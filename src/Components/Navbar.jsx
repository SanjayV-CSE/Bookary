import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/book-logo.png";
const Navbar = () => {
  const [icon, setIcon] = useState(true);
  const [isNav, setisNav] = useState(true);
  const handleClick = () => {
    setIcon(!icon);
    setisNav(!isNav);
  };
  return (
    <div className="">
      <br />
      <nav className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="" className="w-50 w-44" />
          </Link>
          <div>
          <div
            className={`md:flex md: ${ isNav ? "hidden" : "flex-col bg-blue-300 text-center content-center w-screen space-y-10 p-4" }`}>
            <ul>
              <Link to="/">Home</Link>
            </ul>
            <ul>
              <Link to="/aboutus">AboutUs</Link>
            </ul>
            <ul>
              <Link to="/contactus">ContactUs</Link>
            </ul>
            <ul>
              <Link to="/signup">Sign-Up</Link>
            </ul>
          </div>

        <div onClick={handleClick}>
          {icon ? (
            <FaBars className="text-2xl md:hidden"></FaBars>
          ) : (
            <FaTimes className="text-2xl"></FaTimes>
          )}
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
