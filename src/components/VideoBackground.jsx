import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);


    return (
  <div className="max-h-full w-screen overflow-hidden">
    <iframe
      className="aspect-video w-full"
      src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1"}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>

    {/* Left Netflix-style fade */}
    <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent"></div>
    {/* Bottom fade */}
     <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
  </div>
);
// return (
//   <div className="w-screen">
//     <iframe
//       className="w-screen aspect-video"
//       src={"https://www.youtube.com/embed/" + trailerVideo?.key}
//       title="YouTube video player"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     ></iframe>

//     <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/10"></div>
//   </div>
// );

//     <div className="relative">
//       <iframe
//         className="w-screen aspect-video"
//         src={"https://www.youtube.com/embed/" + trailerVideo?.key}
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       ></iframe>
//     </div>
//   );
};
export default VideoBackground;
