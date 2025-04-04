import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="absolute top-0 flex georama tracking-widest p-4 max-w-7xl gap-[12vw] items-center justify-center mx-auto">
        <ul className="flex gap-4 p-1 items-center justify-left ">
          <img src="/logo.png" alt="" />
          <div className="font-bold">Armer</div>
        </ul>
        <div className="flex font-medium gap-10 items-center">
          <ul className="flex gap-2 items-center ">
            <Link to="/">Home</Link>
          </ul>
          <ul className="flex gap-2 items-center ">
            <Link to="/about">About</Link>
          </ul>
          <ul className="flex gap-2 items-center ">
            <Link to="/therapy">Therapy</Link>
          </ul>
          <ul className="flex gap-2 items-center ">
            <Link to="/community">Community</Link>
          </ul>
        </div>
        <div className="flex gap-4">
          <ul className="flex gap-2 py-2 px-8 bg-black text-white rounded-md items-center ">
            <Link to="/help">Chatbot</Link>
          </ul>
          {/* <ul className="flex gap-2  py-2 px-8 border rounded-md items-center ">
            <Link to="/help">Signup</Link>
          </ul> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
