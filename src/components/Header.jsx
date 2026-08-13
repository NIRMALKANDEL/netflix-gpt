import logo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute w-full px-8 py-2 bg-linear-to-b  from-black to-transparent g-opacity-75 z-10 flex items-center justify-between">
      <img 
      className="h-18"  
      src={logo} alt="logo" />

    </div>
  );
};

export default Header;
