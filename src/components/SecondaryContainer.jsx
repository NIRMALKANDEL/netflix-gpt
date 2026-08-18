import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20 ">
          <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"horror"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Thriller"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer

