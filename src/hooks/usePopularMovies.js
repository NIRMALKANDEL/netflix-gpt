import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux store

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS,
      );
      const data = await response.json();
        console.log("POPULAR MOVIES,",data.result)
      dispatch(addPopularMovies(data.results)); // Dispatch the action to update the state
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
