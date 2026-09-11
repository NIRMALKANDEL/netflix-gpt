import { Link } from "react-router-dom";

const StaticPageLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-black text-gray-300 px-6 py-16 md:px-[12%]">
      <Link
        to="/browse"
        className="inline-block mb-8 text-sm text-gray-400 hover:text-white hover:underline"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
        {title}
      </h1>

      <div className="flex flex-col gap-6 max-w-3xl text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default StaticPageLayout;
