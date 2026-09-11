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

  return (
    <div className="relative z-10 mx-auto mt-6 w-full max-w-5xl px-4 pb-20">
      <div className="rounded-2xl border border-[#2a2b32] bg-[#202123]/95 p-4 shadow-2xl backdrop-blur md:p-6">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10a37f] text-xs font-bold text-white">
            AI
          </div>
          <p className="text-sm text-gray-300">
            Here are some recommendations based on your search
          </p>
        </div>

        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName + index}
            title={movieName}
            movies={movieResults[index]}
            onMovieClick={onMovieClick}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
