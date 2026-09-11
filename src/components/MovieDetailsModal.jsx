import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";

const formatRuntime = (minutes) => {
  if (!minutes) return null;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

const MovieDetailsModal = ({ movieId, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    let ignore = false;

    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      setMovieDetails(null);
      setTrailer(null);

      try {
        const [detailsRes, videosRes] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
            API_OPTIONS,
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS,
          ),
        ]);

        if (!detailsRes.ok) throw new Error("Failed to fetch movie details");

        const details = await detailsRes.json();
        const videos = await videosRes.json();

        if (ignore) return;

        const trailerVideo =
          videos.results?.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
          ) || videos.results?.[0];

        setMovieDetails(details);
        setTrailer(trailerVideo || null);
      } catch (err) {
        console.error(err);
        if (!ignore) setError("Couldn't load movie details. Please try again.");
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchMovieDetails();

    return () => {
      ignore = true;
    };
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [movieId, onClose]);

  if (!movieId) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-[#181818] text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg text-white transition hover:bg-black/80"
        >
          ✕
        </button>

        {loading && (
          <div className="flex min-h-80 flex-col items-center justify-center gap-3 text-gray-400">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
            Loading details...
          </div>
        )}

        {!loading && error && (
          <div className="flex min-h-80 flex-col items-center justify-center gap-4 px-6 text-center text-gray-400">
            <p>{error}</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Close
            </button>
          </div>
        )}

        {!loading && !error && movieDetails && !movieDetails.title && (
          <div className="flex min-h-80 items-center justify-center px-6 text-center text-gray-400">
            No details available for this title.
          </div>
        )}

        {!loading && !error && movieDetails?.title && (
          <>
            <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-black">
              {trailer ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0&rel=0`}
                  title={trailer.name || "Trailer"}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : movieDetails.backdrop_path ? (
                <img
                  src={IMG_CDN_URL + movieDetails.backdrop_path}
                  alt={movieDetails.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
                  No preview available
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 p-5 md:flex-row md:p-6">
              {movieDetails.poster_path && (
                <img
                  src={IMG_CDN_URL + movieDetails.poster_path}
                  alt={movieDetails.title}
                  className="mx-auto w-32 shrink-0 rounded-md shadow-lg sm:mx-0 md:w-40"
                />
              )}

              <div className="flex flex-1 flex-col gap-3">
                <h2 className="text-xl font-bold text-white md:text-2xl">
                  {movieDetails.title}
                </h2>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
                  {movieDetails.release_date && (
                    <span>{movieDetails.release_date.slice(0, 4)}</span>
                  )}
                  {formatRuntime(movieDetails.runtime) && (
                    <span>{formatRuntime(movieDetails.runtime)}</span>
                  )}
                  {typeof movieDetails.vote_average === "number" &&
                    movieDetails.vote_average > 0 && (
                      <span className="flex items-center gap-1 text-green-500">
                        ★ {movieDetails.vote_average.toFixed(1)}/10
                      </span>
                    )}
                  {typeof movieDetails.popularity === "number" && (
                    <span>Popularity {Math.round(movieDetails.popularity)}</span>
                  )}
                </div>

                {movieDetails.genres?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {movieDetails.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                )}

                {movieDetails.overview && (
                  <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                    {movieDetails.overview}
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsModal;
