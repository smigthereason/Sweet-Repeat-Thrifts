import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import  Login  from './Login'
import Menu from "./Menu";
import { IoSearchOutline } from "react-icons/io5";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-customBrown shadow-md z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Left side - Menu and Search */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <CiMenuBurger className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" 
                          onClick={onMenuToggle}  />
            <IoSearchOutline className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-12 w-32 sm:h-16 sm:w-28 md:h-18 md:w-32 "
                src="src/assets/black.png"
                alt="Sweet Repeats Thrift Logo"
              />
            </Link>
          </div>

          {/* Right side - Cart and User */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/login" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900">
              <SlUser className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link to="/login" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900">
              <FaOpencart className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
