import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, onMovieClick }) => {
  return (
    <div className="p-6">
      <div className="pb-2 text-lg font-semibold text-white md:text-2xl">
        {title}
      </div>

      {!movies ? (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-32 shrink-0 pr-4 sm:w-40 md:w-48">
              <div className="aspect-[2/3] animate-pulse rounded-md bg-gray-800" />
            </div>
          ))}
        </div>
      ) : movies.length === 0 ? (
        <p className="text-sm text-gray-500">No movies found.</p>
      ) : (
        <div className="flex gap-2 overflow-x-auto overflow-y-visible py-6 scrollbar-hide">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => onMovieClick?.(movie.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
