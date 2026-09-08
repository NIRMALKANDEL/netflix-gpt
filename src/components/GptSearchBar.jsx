import GptMovieSuggestions from "./GptMovieSuggestions";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";


const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const placeholderText = lang[selectedLanguage]?.search_placeholder || "Search for movies...";
  const searchtext = lang[selectedLanguage]?.search || "Search";
  return (
    <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50">
      <form className="flex items-center bg-black/80 border border-gray-600 rounded-md overflow-hidden shadow-lg">
        <input
          type="text"
          className="w-72 md:w-96 px-5 py-3 bg-transparent text-white outline-none placeholder-gray-400"
          placeholder={placeholderText}
        />

        <button
          type="submit"
          className="px-6 py-3 bg-red-600 text-white font-semibold hover:bg-red-700"
        >
          {searchtext}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
