import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="fixed top-0 flex georama tracking-widest p-4 max-w-7xl gap-[12vw] items-center justify-center mx-auto">
        <ul className="flex gap-4 p-1 items-center justify-left ">
          <div className="h-10 w-10 rounded-full bg-[#D9D9D9]"></div>
        </ul>
        <div className="flex font-medium gap-10 items-center">
          <ul className="flex gap-2 items-center ">
            <Link to="/">Home</Link>
          </ul>
          <ul className="flex gap-2 items-center ">
            <Link to="/support">About</Link>
          </ul>
          <ul className="flex gap-2 items-center ">
            <Link to="/help">Resources</Link>
          </ul>
          <ul className="flex gap-2 items-center ">
            <Link to="/help">Contact</Link>
          </ul>
        </div>
        <div className="flex gap-4">
          <ul className="flex gap-2 py-2 px-8 bg-black text-white rounded-md items-center ">
            <Link to="/help">login</Link>
          </ul>
          <ul className="flex gap-2  py-2 px-8 border rounded-md items-center ">
            <Link to="/help">Signup</Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
