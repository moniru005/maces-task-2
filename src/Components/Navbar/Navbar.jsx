import { FaAlignJustify, FaTimes } from "react-icons/fa";
import logoImage from '/public/favicon2.png';
import "../Navbar/Navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = (
    <>
      <div className="text-lg flex flex-col lg:flex-row gap-2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      
        <li>
          <NavLink to="https://maces-task-1.netlify.app" target="_blank">Contact</NavLink>
        </li>
        
      </div>
    </>
  );

  const loginButton = (
    <>
      <Link to="#">
        <button
          className="middle none center rounded-lg bg-gradient-to-tr from-[#0064A5] to-black py-2 px-4  text-sm font-semibold uppercase text-white shadow-md shadow-white transition-all hover:shadow-lg hover:shadow-yellow-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
          type="button"
          data-ripple-light="true"
        >
          <span>Login</span>
        </button>
      </Link>
    </>
  );

  return (
    <div className="navbar bg-none lg:px-16">
      {/* Start */}
      <div className="nav navbar-start">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
          <img className="w-16" src={logoImage} alt="" />
          <Link to="/"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
          >
            <span className="text-md lg:text-2xl font-medium uppercase ">
              Maces Weather
            </span>
          </Link>
        </div>
      </div>
      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbar}</ul>
      </div>

      {/* End */}
      <div className="navbar-end pr-2 lg:pr-0">
        {/* Right Button (Login Button) */}
        <span className="hidden lg:flex">{loginButton}</span>
      </div>

      {/*Dropdown Mobile Menu*/}
      <div className="dropdown">
        <div
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
        >
          {isOpen === true ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaAlignJustify className="text-lg"></FaAlignJustify>
          )}
        </div>
        <ul
          tabIndex={0}
          className={`${
            isOpen ? "" : "hidden"
          } menu menu-sm dropdown-content mt-6 -ml-40 w-56 z-[1] p-2 shadow bg-base-100 rounded-box  `}
        >
          {navbar}
          <span className="ml-2 mt-2">{loginButton}</span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
