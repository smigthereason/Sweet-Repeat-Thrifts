import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-amber-50 shadow-md z-50 w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-18 w-32 mr-2"
                src="src/assets/sweetrepeatthrifts-high-resolution-logo-black-transparent.png"
                alt="Sweet Repeats Thrift Logo"
              />
              <h1 className="text-xl font-bold text-black"></h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-80 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-black hover:text-slate-600 px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-black hover:text-slate-600 px-3 py-2"
                >
                  About
                </Link>
                <a
                  href="#"
                  className="text-black hover:text-slate-600 px-3 py-2"
                >
                  Shop
                </a>

                <a
                  href="#"
                  className="text-black hover:text-slate-600 px-3 py-2"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block -m-10">
            <button className="text-black p-1 m-3">
              <FaOpencart className="h-6 w-6" />
            </button>
            <button className="text-black p-1 m-3">
              <SlUser className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
