import logo from "../assets/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Header = () => {

  const navigate = useNavigate(); // Hook to navigate
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
      <img src={logo} alt="Netflix" className="w-28 object-contain md:w-36" />

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Profile */}
        <div className="group relative">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACUCAMAAAD79nauAAAAaVBMVEUNfoD///8Ae30AeHoAdXf7/f3d6OkAcHJHkZL0+fnt9fVVmZrx9vakyMmNwMFfpadKmJrU5OWuzs98sLHK4eIwi4220tOdwsNtqKoogoS/19iHt7jj7u8bhYerx8hTn6BqnZ652tuPtbcVyyTfAAADo0lEQVR4nO3ba3eqOhAG4DAJ94sSCKBAdff//8gdtBeVeFQuafdZ7/Op7erKZJwEAomMAQAAAAAAAAAAAMBvQVwQCUGWow4RheDLNMb7Tf0m39otcXt56KhNLXXUgBZIg6ssj1zHccKubMhWFkLV3kfUajM7CxF7Q1tnoWTLVPcR/9B9R01qMa81KkLnUhnYqAVlznXUWeOY4uscHKfarZ8FL26jyhmtUe85t7LF+no36jYfRW2nD2PRjlpzuvUHVO2OouZqclS/GyfhFDOn2SMUjAvhhO9To5IafyR6lvmL9nmEHw1BnWrqeDKNJm3tShijTh5PvjQmwVaeFLUpqBdMLIVf/Q+SEJmpOWflm/ad4TT1osgPpokdrT2xG1MS+35q/bmpOblyEhSbLuxvky8nxpkdrz2cdoapGE2PSup2EaMv2Et22By1icbln3ExGU/tbrv+ApBG647J0/pMXrcXNRaW4lzdDOMonnWDpb6+rG3erH2TOEfdpe5V1LlPRawpPxsL09jSUzZnxVfUKJ16n7tAuzgrkyT6UwRWynAOSupQezpqtVRULk4svutgQxr8HNTymyIAAAAAAAAAAACwioj3u3/7PSDRrqnyXFrYFrnCiS1xWmxAQjX7025V1yzT4pNx6VjL+rhEGiT6Yv+5PTJzs+i1wH3duY4bpdu5WXCu2jL53mop7CXB2489ni7j/oyw3Fe1d7Xt2drbHLk45+MWauKWBgm2KZ0bFpNoLgaAE6Wxvji+Flz//y5Ox/vx7tHOGUp2m4QOXbaxYs8WhDjvgyYrDacx3HTyuYiXUTw6Ndjt60bxR/tWp92t/tjKfLwTf6rp9PNzExgO+rhRWbVxwO5kcjrC3QdxW+278QmGQSgbe3UYeqTMh6TCyKvS9qDI18SX4bdeNbXce3cS0J9B1Tw9IJfKghmOZnx2J0ySKJdZVmxOsizde0kShqYjSV9V2DJ7W89fBMuS+516iRtlyva3BT4QV/XdwfFKBnnBfiiFwWnJcHdUPSXM35qfTOGUBqlGev8x1h9kkBaB7dlsotex26KaUo5cFgH9cBG+EdsFmz+v5THc4vtf9iCnVxLskO2fSiTS9/ZeLPVAtTAuaKcK6XVR4mrXPR/+kkSdJ4ttb//bVy/RSwvfZ9vNe53Kqiy9s7IsK5nW7xvF9G38F8zjJwyLPN3TXvXBmdI/Mnq4OPyF6NpPdwcAAAAAAAAAAAAAAAAAAAAAAP4JfwENRihgRx+MbQAAAABJRU5ErkJggg=="
            alt="Profile"
            className="h-9 w-9 cursor-pointer rounded object-cover"
          />
        </div>

        {/* Sign Out */}
        <button
          onClick={handleSignOut}
          className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};
export default Header;
