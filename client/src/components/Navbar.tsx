import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="flex px-4 max-w-5xl gap-[12vw] items-center justify-end mx-auto">
        <div className="flex gap-10 items-center">
        <ul className="flex gap-2 items-center ">
          <Link to="/">Officials</Link>
          <IoMdArrowDropdown/>
        </ul>
        <ul className="flex gap-2 items-center ">
          <Link to="/support">Support</Link>
          <IoMdArrowDropdown/>
        </ul>
        <ul className="flex gap-2 items-center ">
          <Link to="/help">Help</Link>
          <IoMdArrowDropdown/>
        </ul>
        </div>
        <ul className="flex gap-4 p-1 items-center ">
          <Link to="/">Profile</Link>
          <div className="h-10 w-10 rounded-full bg-[#6B94ED]"></div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
