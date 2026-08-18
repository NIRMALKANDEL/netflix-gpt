import { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [showFullOverview, setShowFullOverview] = useState(false);

  const shortOverview =
    overview?.length > 180 ? overview.slice(0, 180) + "..." : overview;
  return (
    <div className="absolute top-[40%] left-0 z-20 w-full px-10  md:px-8 lg:px-10">
      <div className="w-[30%] max-w-md">
        {/* Movie Title */}
        <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
          {title}
        </h1>

        {/* Overview */}
        <p className="mt-3 text-xs leading-5 text-white md:text-sm md:leading-5">
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
          <button className="flex items-center gap-2 rounded-lg bg-white px-12 py-2 text-xs font-semibold text-black transition hover:bg-white/80 md:text-sm">
           Play
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-gray-500/70 px-5 py-2 text-xs font-semibold text-white transition hover:bg-gray-500/90 md:text-sm">
            ⓘ <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );

}
export default VideoTitle;
 