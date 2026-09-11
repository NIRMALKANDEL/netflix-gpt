import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useRef, useState } from "react";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 translate-x-[1px] fill-white md:h-5 md:w-5">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white md:h-5 md:w-5">
    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
  </svg>
);

const VolumeOnIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white md:h-5 md:w-5">
    <path d="M4 9v6h4l5 5V4L8 9H4z" />
    <path d="M16.5 12c0-1.77-.77-3.29-2-4.24v8.48c1.23-.95 2-2.47 2-4.24z" />
    <path d="M14.5 5.14v1.84c2 .91 3.5 2.94 3.5 5.02s-1.5 4.11-3.5 5.02v1.84c3-.99 5-3.86 5-6.86s-2-5.87-5-6.86z" />
  </svg>
);

const VolumeOffIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white md:h-5 md:w-5">
    <path d="M4 9v6h4l5 5V4L8 9H4z" />
    <path d="M19 8.5l-1.41-1.41L15 9.67 12.41 7.09 11 8.5 13.59 11 11 13.5l1.41 1.41L15 12.33l2.59 2.58L19 13.5 16.41 11z" />
  </svg>
);

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideo
  );

  useMovieTrailer(movieId);

  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const postCommand = (func) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*",
    );
  };

  const toggleMute = () => {
    postCommand(isMuted ? "unMute" : "mute");
    setIsMuted((prev) => !prev);
  };

  const togglePlay = () => {
    postCommand(isPlaying ? "pauseVideo" : "playVideo");
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative h-[56vw] max-h-[82vh] min-h-[420px] w-full overflow-hidden">
      <iframe
        ref={iframeRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&enablejsapi=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
      ></iframe>

      {/* Left dark fade */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />

      {/* Top + bottom Netflix fade */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black" />

      {/* Custom playback controls */}
      {trailerVideo?.key && (
        <div className="absolute bottom-24 right-4 z-30 flex items-center gap-2 md:bottom-28 md:right-10 md:gap-3">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/70 bg-black/40 backdrop-blur-sm transition hover:scale-105 hover:border-white hover:bg-black/60 md:h-11 md:w-11"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/70 bg-black/40 backdrop-blur-sm transition hover:scale-105 hover:border-white hover:bg-black/60 md:h-11 md:w-11"
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;