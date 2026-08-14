import logo from "../assets/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useSelector } from "react-redux"; // Import useSelector hook to access Redux state

const Header = () => {
  const navigate = useNavigate(); // Hook to navigate
  const user = useSelector((state) => state.user); // Access user state from Redux store

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        // Navigate to the login page after sign-out
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between bg-linear-to-b from-black/90 via-black/50 to-transparent px-6 md:px-12">
      {/* Netflix Logo */}
      <img
        src={logo}
        alt="Netflix"
        className="w-28 object-contain md:w-36"
      />

      {/* Right Side */}
      {user && window.location.pathname !== "/" && (
        <div className="flex items-center gap-4">
          {/* Profile */}
          <div className="group relative">
            <img
              src={
                user?.photoURL ||
                "https://avatars.githubusercontent.com/u/98464309?v=4"
              }
              alt="Profile"
              className="h-9 w-9 cursor-pointer rounded object-cover"
            />

            <span className="absolute right-0 top-10 hidden whitespace-nowrap rounded bg-black px-3 py-1 text-sm text-white group-hover:block">
              {user?.displayName}
            </span>
          </div>

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;