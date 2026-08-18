// import { useSelector } from "react-redux";
// import store from "../utils/appStore";
// import VideoTitle from "./VideoTitle";
// import VideoBackground from "./VideoBackground";

// function MainContainer() {
//   const movies = useSelector(
//     (store) => store.movies?.nowPlayingMovies
//   );

//   if (!movies) return null;

//   const mainMovie = movies[0];

//   const { original_title, overview, id } = mainMovie;

//   return (
//     <div className="relative w-full overflow-hidden">
//       <VideoBackground movieId={id} />
//       <VideoTitle
//         title={original_title}
//         overview={overview}
//       />
//     </div>
//   );
// }

// export default MainContainer;
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full max-h-2/3">
      <VideoBackground movieId={id} />

      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
}

export default MainContainer;
