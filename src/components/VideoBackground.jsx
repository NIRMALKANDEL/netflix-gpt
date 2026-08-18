import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideo
  );

  useMovieTrailer(movieId);

  return (
    <div className="relative w-full overflow-hidden">
      <iframe
        className="block aspect-video w-full"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&rel=0&playsinline=1"
        }
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
      ></iframe>

      {/* Left dark fade */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent" />

      {/* Top + bottom Netflix fade */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black" />
    </div>
  );
};

export default VideoBackground;