import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = ({ onMovieClick }) => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-1 relative z-20 ">
        <MovieList
          title={"Now playing"}
          movies={movies.nowPlayingMovies}
          onMovieClick={onMovieClick}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
          onMovieClick={onMovieClick}
        />
        <MovieList
          title={"Upcomming"}
          movies={movies.upComingMovies}
          onMovieClick={onMovieClick}
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
          onMovieClick={onMovieClick}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
