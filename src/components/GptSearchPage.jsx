import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
// import BG_img from "../assets/Netflix_BG.jpg";
import {BG_IMG_URL} from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
        <img
        src={BG_IMG_URL}
        alt="Netflix Background"
        className="fixed inset-0  h-full w-full object-cover"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
