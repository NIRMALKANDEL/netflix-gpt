import Header from "./Header";
import BG_img from "../assets/Netflix_BG.jpg";
import { useState } from "react";

const Login = () => {
  const [showSignInForm, setShowSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background */}
      <img
        src={BG_img}
        alt="Netflix Background"
        className="fixed inset-0 h-full w-full object-cover -z-20"
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* Login Form */}
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md bg-black/80 px-12 py-14 rounded-md">
          <h1 className="mb-8 text-3xl font-bold text-white">
            {showSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form className="flex flex-col gap-4">
            {!showSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="rounded bg-gray-700 px-4 py-4 text-white placeholder-gray-400 outline-none focus:bg-gray-600"
              />
            )}
            <input
              type="email"
              placeholder="Email or phone number"
              className="rounded bg-gray-700 px-4 py-4 text-white placeholder-gray-400 outline-none focus:bg-gray-600"
            />

            <input
              type="password"
              placeholder="Password"
              className="rounded bg-gray-700 px-4 py-4 text-white placeholder-gray-400 outline-none focus:bg-gray-600"
            />

            <button
              type="submit"
              className="mt-4 rounded bg-red-600 py-3 font-bold text-white hover:bg-red-700"
            >
              {showSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <div className="flex justify-between text-sm text-gray-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <span className="cursor-pointer hover:underline">Need help?</span>
            </div>
          </form>

          <p className="mt-10 text-gray-400">
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
