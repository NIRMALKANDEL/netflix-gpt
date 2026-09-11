
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { setLanguage } from "../utils/configSlice";

const linkClass =
  "text-gray-400 transition-colors duration-150 hover:text-white hover:underline w-fit";

const Footer = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.config.lang);

  const handleLanguageChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <footer className="border-t border-white/10 bg-[#141414] px-6 py-12 text-gray-400 sm:px-10 md:px-[8%]">
      <div className="mx-auto max-w-5xl">
        {/* Social Icons */}
        <div className="mb-8 flex gap-6">
          <a
            href="#"
            aria-label="Facebook"
            className="text-xl text-gray-400 transition-all duration-150 hover:scale-110 hover:text-white"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="text-xl text-gray-400 transition-all duration-150 hover:scale-110 hover:text-white"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="#"
            aria-label="X (Twitter)"
            className="text-xl text-gray-400 transition-all duration-150 hover:scale-110 hover:text-white"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="text-xl text-gray-400 transition-all duration-150 hover:scale-110 hover:text-white"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm sm:grid-cols-3 md:grid-cols-4 md:gap-x-10">
          <div className="flex flex-col gap-4">
            <a href="#" className={linkClass}>
              Audio Description
            </a>
            <a href="#" className={linkClass}>
              Investor Relations
            </a>
            <Link to="/legal-notices" className={linkClass}>
              Legal Notices
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link to="/help-centre" className={linkClass}>
              Help Centre
            </Link>
            <a href="#" className={linkClass}>
              Jobs
            </a>
            <a href="#" className={linkClass}>
              Cookie Preferences
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className={linkClass}>
              Gift Cards
            </a>
            <Link to="/terms-and-conditions" className={linkClass}>
              Terms of Use
            </Link>
            <a href="#" className={linkClass}>
              Corporate Information
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className={linkClass}>
              Media Centre
            </a>
            <a href="#" className={linkClass}>
              Privacy
            </a>
            <a href="#" className={linkClass}>
              Contact Us
            </a>
          </div>
        </div>

        {/* Language selector */}
        <div className="mt-8">
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            aria-label="Select language"
            className="w-fit cursor-pointer rounded border border-gray-600 bg-black px-3 py-1.5 text-xs text-gray-300 transition hover:border-gray-400 focus:outline-none"
          >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-gray-500">
          © 1997-2026 Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
