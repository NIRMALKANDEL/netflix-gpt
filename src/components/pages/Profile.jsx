import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { SUPPORTED_LANGUAGES, USER_PHOTO_URL } from "../../utils/constants";
import { setLanguage } from "../../utils/configSlice";
import StaticPageLayout from "./StaticPageLayout";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((store) => store.user);
  const selectedLanguage = useSelector((store) => store.config.lang);
  const currentUser = userState?.user;

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  if (!currentUser) {
    return (
      <StaticPageLayout title="Account">
        <p>
          You need to be signed in to view your profile. Please{" "}
          <a href="/" className="text-white hover:underline">
            sign in
          </a>{" "}
          first.
        </p>
      </StaticPageLayout>
    );
  }

  return (
    <StaticPageLayout title="Account">
      <div className="flex flex-col items-center gap-4 rounded-md bg-[#141414] p-6 sm:flex-row sm:items-start">
        <img
          src={currentUser.photoURL || USER_PHOTO_URL}
          alt={currentUser.displayName || "Profile"}
          className="h-24 w-24 rounded-md border border-gray-700 object-cover"
        />

        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold text-white">
            {currentUser.displayName || "Netflix User"}
          </h2>
          <p className="text-sm text-gray-400">{currentUser.email}</p>
          <p className="break-all text-xs text-gray-600">
            User ID: {currentUser.uid}
          </p>
        </div>
      </div>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-white">About</h2>
        <p className="text-gray-400">
          This is a demo Netflix-GPT account. It showcases Firebase
          authentication, TMDB-powered browsing and AI-assisted movie
          recommendations all in one profile.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold text-white">
          Account Options
        </h2>

        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center sm:gap-4">
            Preferred Language
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="w-fit rounded border border-gray-700 bg-black px-3 py-1.5 text-white focus:outline-none"
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          </label>

          <button
            onClick={handleSignOut}
            className="w-fit rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      </section>
    </StaticPageLayout>
  );
};

export default Profile;
