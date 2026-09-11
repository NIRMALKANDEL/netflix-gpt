import Header from "./Header";
// import BG_img from "../assets/Netflix_BG.jpg";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import {USER_PHOTO_URL} from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL } from "../utils/constants";

const Login = () => {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux store
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = (event) => {
    event.preventDefault();

    // Validate form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      showSignInForm ? "" : fullName.current.value,
    );

    setErrorMessage(message);

    if (message) return;

    if (!showSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // update the user's display name after sign-up
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(`Error updating profile: ${error.message}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(`Error ${errorCode}: ${errorMessage}`);
          
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Error ${errorCode}: ${errorMessage}`);
        });
    }
  };

  const toggleSignInForm = () => {
    setErrorMessage(null);
    setShowSignInForm(!showSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background */}
      <img
        src={BG_IMG_URL}
        alt="Netflix Background"
        className="fixed inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/60"></div>

      {/* Login Form */}
      <div className="flex min-h-screen items-center justify-center px-3 sm:px-4">
        <div className="w-full max-w-md rounded-md bg-black/80 px-6 py-8 sm:px-10 sm:py-12 md:px-12 md:py-14">
          <h1 className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl">
            {showSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form onSubmit={handleButtonClick} className="flex flex-col gap-3 sm:gap-4">
            {!showSignInForm && (
              <input
                ref={fullName}
                type="text"
                placeholder="Full Name"
                className="rounded bg-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none focus:bg-gray-600 sm:py-4"
              />
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email or phone number"
              className="rounded bg-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none focus:bg-gray-600 sm:py-4"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="rounded bg-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none focus:bg-gray-600 sm:py-4"
            />

            {errorMessage && (
              <p className="text-sm text-red-500 sm:text-base">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="mt-3 rounded bg-red-600 py-3 font-bold text-white hover:bg-red-700 sm:mt-4"
            >
              {showSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <div className="flex flex-wrap justify-between gap-2 text-xs text-gray-400 sm:text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <span className="cursor-pointer hover:underline">Need help?</span>
            </div>
          </form>

          <p className="mt-8 text-sm text-gray-400 sm:mt-10 sm:text-base">
            {showSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              onClick={toggleSignInForm}
              className="cursor-pointer text-white hover:underline"
            >
              {showSignInForm ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
