
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-400 px-8 md:px-[12%] py-12">
      {/* Social Icons */}
      <div className="flex gap-8 mb-8">
        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fa-brands fa-x-twitter"></i>
        </a>

        <a href="#" className="text-white text-2xl hover:text-gray-400">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 gap-x-12 text-sm">
        <div className="flex flex-col gap-6">
          <a href="#" className="hover:underline">
            Audio Description
          </a>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
          <a href="#" className="hover:underline">
            Legal Notices
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <a href="#" className="hover:underline">
            Help Centre
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <a href="#" className="hover:underline">
            Gift Cards
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Corporate Information
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <a href="#" className="hover:underline">
            Media Centre
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-12 text-sm">
        © 1997-2026 Netflix, Inc.
      </p>
    </footer>
  );
};

export default Footer;
