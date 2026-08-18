import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies", movies);

  return (
    <div className="p-6 " >
      <div className="text-2xl pb-2 text-white">{title}</div>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
      <div className=" flex">
        {movies?.map((movie) => {
          return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
        })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

