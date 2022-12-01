import React from "react";
import logo from "../img/tgfp_logo.png";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-20 shadow-lg bg-[#343a40]">
      <div className="px-4 z-10 bg-transparent">
        <div className="flex justify-between items-center">
          <div className=" hidden md:flex justify-start items-center space-x-8 flex-1">
            <Link
              to="/"
              className="text-white font-semibold hover:text-[#e55137] "
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-white font-semibold hover:text-[#e55137] "
            >
              About
            </Link>
            <Link
              to="/"
              className="text-white font-semibold hover:text-[#e55137] "
            >
              Media
            </Link>
          </div>
          <div>
            <img src={logo} alt="logo" width={70} height={70} />
          </div>
          <div className="flex md:hidden text-2xl text-white">
            <HiMenuAlt3 />
          </div>
          <div className="hidden md:flex justify-end items-center space-x-8 flex-1">
            <Link
              to="/"
              className="text-white font-semibold hover:text-[#e55137] "
            >
              Book-Table
            </Link>
            <Link
              to="/"
              className="text-white font-semibold hover:text-[#e55137] "
            >
              Reviews
            </Link>
            <Link
              to="/"
              className="text-white font-semibold hover:text-[#e55137] "
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
