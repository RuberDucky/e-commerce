import React from "react";
import Logo from "@/assets/logo.svg";
import UserIcon from "@/assets/User.svg";
import ShoppingBagIcon from "@/assets/Shopping.svg";
import HamburgerMenu from "@/assets/menu.svg";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md bg-fff9f3">
      {/* Top row */}
      <div className="container mx-auto px-6 mt-6">
        <div className="flex justify-between items-center">
          <Image
            src={Logo}
            alt="Logo"
            className="h-28 w-136 ml-4 md:h-12 md:w-32"
          />

          {/* Search Bar for Desktop View */}
          <div className="hidden lg:flex flex-1 justify-center mx-4">
            <div className="relative" style={{ width: "224px" }}>
              <input
                type="text"
                className="rounded-full px-5 py-2 w-full"
                placeholder="Search anything"
                style={{
                  borderRadius: "70px",
                  height: "48px",
                  backgroundColor: "#FFFFFF",
                  border: "none",
                  paddingRight: "40px", // Add padding to the right to make space for the icon
                }}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 lg:space-x-8">
            {/* Help Button */}
            <button className="hidden md:flex items-center justify-center bg-[#EB6D20] text-white rounded-[50px] px-4 py-2 h-12 w-24">
              Help
            </button>

            {/* User Icon and Account Text */}
            <div className="flex items-center">
              <Image src={UserIcon} alt="User" className="h-6 w-6" />
              <p className="hidden md:block ml-2 text-[#3E3E3E] text-sm">
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
              <p className="hidden md:block ml-2 text-[#3E3E3E] text-sm">
                Shopping
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row for mobile view */}
      <div className="container mx-auto px-6 mt-6 lg:hidden">
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-white rounded-full h-12 w-12 ml-5">
            <Image
              src={HamburgerMenu}
              alt="Hamburger Menu"
              className="h-6 w-6"
            />
          </div>
          <div className="flex-1 ml-4 mr-5 relative">
            <div className="relative">
              <input
                type="text"
                className="rounded-full px-5 py-2 w-full"
                placeholder="Search anything"
                style={{
                  borderRadius: "70px",
                  height: "48px",
                  backgroundColor: "#FFFFFF",
                  border: "none",
                  paddingRight: "40px",
                }}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
