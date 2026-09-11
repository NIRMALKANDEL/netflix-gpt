import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = ({ onMovieClick }) => {
  return (
    <div className="min-h-screen bg-[#0f0f10] pt-28">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,163,127,0.14),transparent_60%)]" />

      <GptSearchBar />
      <GptMovieSuggestions onMovieClick={onMovieClick} />
    </div>
  );
};

export default GptSearchPage;
