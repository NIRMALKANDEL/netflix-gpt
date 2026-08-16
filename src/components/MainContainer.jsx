import { useSelector } from "react-redux";
import store from "../utils/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;
  const mainMovie = movies[0];

  const { original_title, overview,id } = mainMovie;

  return (
    <div className="relative w-full overflow-hidden bg-linear-to-b from-black to-transparent">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
}

export default MainContainer;
