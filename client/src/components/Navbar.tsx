import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 flex georama tracking-widest p-4 max-w-7xl gap-[12vw] items-center justify-center mx-auto w-full">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-10 h-10" />
        <div className="font-bold text-lg">Armer</div>
      </div>

      {/* Navigation Links */}
      <div className="flex font-medium gap-10 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/therapy" className="hover:underline">Therapy</Link>
        <Link to="/community" className="hover:underline">Community</Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link to="/help" className="py-2 px-6 bg-black text-white rounded-md hover:bg-gray-800">
          Chatbot
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
