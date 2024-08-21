"use client";
import React from "react";
import Logo from "@/assets/logo.svg";
import UserIcon from "@/assets/User.svg";
import ShoppingBagIcon from "@/assets/Shopping.svg";
import HamburgerMenu from "@/assets/menu.svg";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-[#FFF9F3] backdrop-blur-md z-50">
      {/* Top row */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center lg:justify-center">
        <Image src={Logo} alt="Logo" className="h-10 w-32 md:h-12 md:w-36" />

        {/* Search Bar for Desktop View */}
        <div className="hidden lg:flex flex-1 justify-center mx-4">
          <div className="relative w-[760px]">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#F5F6F8] rounded-full h-9 w-40 flex items-center justify-center">
              <span className="text-gray-600 text-sm">All categories</span>
              <FaChevronDown className="ml-2 text-gray-600" />
            </div>
            <input
              type="text"
              className="pl-44 pr-10 py-2 w-full rounded-full bg-white focus:outline-none"
              placeholder="Search anything"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex gap-2 md:gap-4 lg:space-x-8">
          {/* Help Button */}
          <button className="hidden md:flex items-center justify-center bg-[#EB6D20] text-white rounded-full px-3 py-1 h-10 w-20 text-xs md:px-4 md:py-2 md:text-sm">
            Help
          </button>

          {/* User Icon and Account Text */}
          <div className="flex items-center">
            <Image src={UserIcon} alt="User" className="h-6 w-6" />
            <p className="hidden md:block ml-2 text-[#3E3E3E] text-xs md:text-sm">
              Account
            </p>
          </div>

          {/* Shopping Icon and Shopping Text */}
          <div className="flex items-center">
            <Image
              src={ShoppingBagIcon}
              alt="Shopping Bag"
              className="h-6 w-6"
            />
            <p className="hidden md:block ml-2 text-[#3E3E3E] text-xs md:text-sm">
              Shopping
            </p>
          </div>
        </div>
      </div>

      {/* Bottom row for mobile view */}
      <div className="container mx-auto px-4 py-2 lg:hidden flex items-center justify-between">
        <div className="flex items-center justify-center bg-white rounded-full h-12 w-12">
          <Image src={HamburgerMenu} alt="Hamburger Menu" className="h-6 w-6" />
        </div>
        <div className="flex-1 ml-2 relative">
          <input
            type="text"
            className="rounded-full px-4 py-3 w-full bg-white focus:outline-none text-xs"
            placeholder="Search anything"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
        </div>
      </div>
    </header>
  );
};
