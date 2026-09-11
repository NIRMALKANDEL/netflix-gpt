import { NETFLIX_LOGO_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { setLanguage } from "../utils/configSlice";

const supportedLanguages = SUPPORTED_LANGUAGES;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // /user is signed in
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );

        navigate("/browse"); // Navigate to the browse page after sign-in
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/"); // Navigate to the login page after sign-out
      }
    });

    return () => {
      // Cleanup the listener when the component unmounts
      const unsubscribe = onAuthStateChanged(auth, () => {});
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex min-h-20 w-full items-center justify-between gap-2 bg-linear-to-b from-black/90 via-black/50 to-transparent px-3 py-3 sm:px-6 md:px-12">
      {/* Netflix Logo */}
      <img
        src={NETFLIX_LOGO_URL}
        alt="Netflix"
        className="w-20 shrink-0 object-contain sm:w-28 md:w-36"
      />

      {/* Right Side */}
      {user && window.location.pathname !== "/" && (
        <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-3 md:gap-4">
          {/* Profile */}
          {showGptSearch && (
            <select
              className="rounded border border-gray-600 bg-black px-1.5 py-1 text-xs text-white focus:outline-none sm:px-3 sm:py-1.5 sm:text-sm"
              onChange={handleLanguageChange}
            >
              {supportedLanguages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="whitespace-nowrap rounded-md bg-red-600 px-2.5 py-1.5 text-xs font-semibold text-white
             transition-all duration-200 hover:bg-red-700 hover:scale-105
             shadow-md shadow-red-600/20 sm:px-4 sm:py-2 sm:text-sm"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          <div className="group relative">
            <button type="button" className="block" aria-label="Account menu">
              <img
                src={
                  user?.photoURL ||
                  "https://avatars.githubusercontent.com/u/98464309?v=4"
                }
                alt="Profile"
                className="h-8 w-8 cursor-pointer rounded-md object-cover
                 border border-gray-600 transition-all duration-200
                 group-hover:border-white group-hover:scale-105 sm:h-9 sm:w-9"
              />
            </button>

            <div
              className="absolute right-0 top-full z-50 mt-3 hidden min-w-40
               rounded-md border border-gray-700 bg-black/95 px-4 py-3
               shadow-xl group-hover:block group-focus-within:block"
            >
              <p className="truncate text-sm font-semibold text-white">
                {user?.user?.displayName || "User"}
              </p>

              <div className="my-2 h-px bg-gray-700"></div>

              <Link
                to="/profile"
                className="block w-full rounded px-2 py-1.5 text-left text-sm text-gray-300
                 transition hover:bg-gray-800 hover:text-white"
              >
                Account
              </Link>
            </div>
          </div>

          {/* Sign Out */}
          {!showGptSearch && (
            <button
              onClick={handleSignOut}
              className="whitespace-nowrap rounded bg-red-600 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-red-700 sm:px-4 sm:py-2 sm:text-sm"
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
