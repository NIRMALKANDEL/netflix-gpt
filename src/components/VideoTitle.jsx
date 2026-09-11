import { useState } from "react";

const VideoTitle = ({ title, overview, movieId, onMovieClick }) => {
  const [showFullOverview, setShowFullOverview] = useState(false);

  const shortOverview =
    overview?.length > 180 ? overview.slice(0, 180) + "..." : overview;
  return (
    <div className="absolute top-[32%] left-0 z-20 w-full px-6 sm:top-[36%] sm:px-8 md:top-[40%] md:px-10">
      <div className="w-[85%] sm:w-3/4 md:w-[45%] max-w-lg">
        {/* Movie Title */}
        <h1 className="text-2xl font-bold leading-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h1>

        {/* Overview */}
        <p className="mt-3 text-xs leading-5 text-white drop-shadow-md md:text-sm md:leading-5">
          {showFullOverview ? overview : shortOverview}

          {overview?.length > 180 && (
            <button
              onClick={() => setShowFullOverview(!showFullOverview)}
              className="ml-2 font-semibold text-white hover:underline"
            >
              {showFullOverview ? "Less" : "More"}
            </button>
          )}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">
          <button className="flex items-center gap-2 rounded-lg bg-white px-8 py-2 text-xs font-semibold text-black transition hover:bg-white/80 md:px-10 md:text-sm">
            <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px] fill-black">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>

          <button
            onClick={() => onMovieClick?.(movieId)}
            className="flex items-center gap-2 rounded-lg bg-gray-500/70 px-5 py-2 text-xs font-semibold text-white transition hover:bg-gray-500/90 md:text-sm"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            More Info
          </button>
        </div>
      </div>
    </div>
  );

}
export default VideoTitle;
 