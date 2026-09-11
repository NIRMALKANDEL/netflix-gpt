import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie, onClick }) => {
  if (!movie?.poster_path) return null;

  const title = movie.title || movie.original_title || movie.name;

  return (
    <div className="w-32 shrink-0 pr-4 sm:w-40 md:w-48">
      <button
        type="button"
        onClick={onClick}
        aria-label={title}
        className="group relative block w-full origin-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <div className="relative overflow-hidden rounded-md ring-1 ring-white/10 transition-all duration-300 ease-out group-hover:z-20 group-hover:-translate-y-3 group-hover:scale-[1.25] group-hover:ring-2 group-hover:ring-white/80 group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]">
          <img
            src={IMG_CDN_URL + movie.poster_path}
            alt={title}
            loading="lazy"
            className="block w-full transition duration-300 ease-out group-hover:brightness-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/80 bg-black/50 backdrop-blur-sm">
              <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-px fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>

          <p className="pointer-events-none absolute inset-x-2 bottom-2 truncate text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:text-sm">
            {title}
          </p>
        </div>
      </button>
    </div>
  );
};

export default MovieCard;
