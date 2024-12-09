import React, { useState } from "react";
import { LuDot } from "react-icons/lu";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-5 relative w-full">
      <div className={`md:hidden flex justify-between items-center p-5`}>
        <h3 className="text-md">&lt;mayuri/&gt;</h3>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "md:flex hidden"
        } flex flex-col md:flex-row gap-4 items-center justify-evenly p-5 text-lg opacity-75 md:bg-transparent ransition-transform duration-500 ease-in-out`}
      >
        <Link
          to="home"
          className="hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <LuDot className="hidden md:block" />
        <Link
          to="about"
          className="hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
          onClick={toggleMenu}
        >
          About
        </Link>
        {!isOpen && (
          <>
            <LuDot />
            <h3 className="text-md">&lt;mayuri/&gt;</h3>
          </>
        )}
        <LuDot className="hidden md:block" />
        <Link
          to="works"
          className="hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
          onClick={toggleMenu}
        >
          Works
        </Link>
        <LuDot className="hidden md:block" />
        <Link
          to="contact"
          className="hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
