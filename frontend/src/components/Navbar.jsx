import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold">Logo</h1>
              </div>
              <div className="hidden md:block ">
                <div className="ml-10 flex items-center space-x-4 w-full">
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <AiOutlineShoppingCart className="text-red-500 " size={30}></AiOutlineShoppingCart>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white md:hidden"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                <AiOutlineShoppingCart className="text-red-500 " size={30}></AiOutlineShoppingCart>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
