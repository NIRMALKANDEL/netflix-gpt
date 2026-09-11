import lang from "../utils/languageConstant";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import gemini from "../utils/geminiAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.config.lang);
  const placeholderText =
    lang[selectedLanguage]?.search_placeholder || "Search for movies...";
  const searchtext = lang[selectedLanguage]?.search || "Search";
  const seachText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movieName) +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query =
      "act as a movie recommendation system and suggest some movies for the query " +
      seachText.current.value +
      " present in netflix preferably bollywood and hololywood   give me just name of 5 movies netflix, comma separated";

    if (seachText.current.value.trim() !== "") {
      setLoading(true);
      setErrorMessage(null);

      try {
        const response = await gemini.models.generateContent({
          model: "gemini-3.7-flash",
          contents: query,
        });

        console.log("Gemini Results:", response.text);

        const movieNames = response.text
          .split(",")
          .map((name) => name.trim())
          .filter(Boolean);

        const movieResults = await Promise.all(
          movieNames.map((movieName) => searchMovieTMDB(movieName)),
        );

        dispatch(addGptMovieResult({ movieNames, movieResults }));
      } catch (error) {
        console.error("Gpt Search Error:", error);
        setErrorMessage("Something went wrong, please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="relative z-10 mx-auto w-full max-w-2xl px-4">
      <form
        className="flex w-full items-center gap-2 rounded-3xl border border-[#3a3b42] bg-[#2a2b32] px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-colors focus-within:border-[#10a37f]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={seachText}
          type="text"
          disabled={loading}
          className="flex-1 bg-transparent px-3 py-3 text-white placeholder-gray-400 outline-none disabled:opacity-60"
          placeholder={placeholderText}
        />

        <button
          onClick={handleGptSearchClick}
          type="submit"
          disabled={loading}
          className="flex shrink-0 items-center gap-2 rounded-full bg-[#10a37f] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0e8f6f] hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>
              Thinking...
            </>
          ) : (
            searchtext
          )}
        </button>
      </form>

      {errorMessage && (
        <p className="mt-3 text-center text-sm text-red-400">{errorMessage}</p>
      )}
    </div>
  );
};

export default GptSearchBar;
