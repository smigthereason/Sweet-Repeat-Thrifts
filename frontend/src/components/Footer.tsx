import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-customBrown shadow-md z-50 w-full text-gray-900 relative top-96 ">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-between items-start">
        {/* Logo and tagline */}
        <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
          <img
            className="h-auto w-40 mr-2"
            src="src/assets/sweetrepeatthrifts-high-resolution-logo-black-transparent.png"
            alt="Sweet Repeats Thrift Logo"
          />
          <p className="italic text-xs -m-2 pt-3">
            Revive your style, not your spending.
          </p>
        </div>
  
        {/* Company */}
        <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="text-sm">
            <li><Link to="/about">About US</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>

          </ul>
        </div>
  
        {/* Product */}
        <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Product</h3>
          <ul className="text-sm">
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/bestseller">Best Seller</Link></li>
          </ul>
        </div>
  
        {/* Helps */}
        <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="text-sm">
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/sizechart">Size Chart</Link></li>
            <li><Link to="/FAQ">F.A.Q</Link></li>

          </ul>
        </div>
  
        {/* Social Network */}
        <div className="w-full sm:w-1/2 md:w-1/5 mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Social Network</h3>
          <ul className="text-sm">
            <li><Link to="https://facebook.com">Facebook</Link></li>
            <li><Link to="https://instagram.com">Instagram</Link></li>
            <li><Link to="https://tiktok.com">TikTok</Link></li>

          </ul>
        </div>
      </div>
  
      {/* Copyright */}
      <div className="mt-8 pt-4 border-t border-amber-200 text-center text-sm text-gray-600">
        Copyright © All Right Reserved
      </div>
    </div>
  </footer>
  );
};

export default Footer;
