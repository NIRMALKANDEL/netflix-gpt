import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = ({ onMovieClick }) => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults) {
    return (
      <div className="relative z-10 mx-auto mt-10 w-full max-w-2xl px-4 text-center text-sm text-gray-400">
        Ask about a mood, genre, actor or vibe — e.g. "feel-good comfort
        movies" — and get AI-powered picks from our catalog.
      </div>
    );
  }

  const uniqueMovies = [];
  const seenIds = new Set();
  movieResults.flat().forEach((movie) => {
    if (movie?.id && !seenIds.has(movie.id)) {
      seenIds.add(movie.id);
      uniqueMovies.push(movie);
    }
  });

  const bollywoodMovies = uniqueMovies.filter(
    (movie) => movie.original_language === "hi",
  );
  const hollywoodMovies = uniqueMovies.filter(
    (movie) => movie.original_language !== "hi",
  );

  return (
    <div className="relative z-10 mx-auto mt-6 w-full max-w-5xl px-3 pb-20 sm:px-4">
      <div className="rounded-2xl border border-[#2a2b32] bg-[#202123]/95 p-3 shadow-2xl backdrop-blur sm:p-4 md:p-6">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10a37f] text-xs font-bold text-white">
            AI
          </div>
          <p className="text-sm text-gray-300">
            Here are some recommendations based on your search
          </p>
        </div>

        {hollywoodMovies.length === 0 && bollywoodMovies.length === 0 && (
          <p className="px-2 py-6 text-center text-sm text-gray-500">
            No matching movies found in the catalog for that search.
          </p>
        )}

        {hollywoodMovies.length > 0 && (
          <MovieList
            title="Hollywood"
            movies={hollywoodMovies}
            onMovieClick={onMovieClick}
          />
        )}

        {bollywoodMovies.length > 0 && (
          <MovieList
            title="Bollywood"
            movies={bollywoodMovies}
            onMovieClick={onMovieClick}
          />
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
