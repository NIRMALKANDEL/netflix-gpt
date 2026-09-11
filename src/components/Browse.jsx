import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import { useState } from "react";
import Footer from "./Footer";
import MovieDetailsModal from "./MovieDetailsModal";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      {showGptSearch ? (
        <GptSearchPage onMovieClick={setSelectedMovieId} />
      ) : (
        <>
          <MainContainer onMovieClick={setSelectedMovieId} />
          <SecondaryContainer onMovieClick={setSelectedMovieId} />
          <Footer/>
        </>
      )}

      <MovieDetailsModal
        movieId={selectedMovieId}
        onClose={() => setSelectedMovieId(null)}
      />
    </div>
  );
};

export default Browse;
