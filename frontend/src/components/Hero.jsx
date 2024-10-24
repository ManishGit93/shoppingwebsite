import React from "react";
import Img from '../public/eCommerce.png'
const HeroSection = () => {
  return (
    <div className="bg-blue-300 text-white ">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Elevate Your Style with <span className="text-white">Exclusive Deals</span>
          </h1>
          <p className="text-lg md:text-xl">
            Shop the latest trends and enjoy up to <span className="font-bold">50% Off</span> on select items.
          </p>
          <button className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white transition duration-300 font-semibold px-6 py-3 rounded-lg">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-4">
          <img
            src={Img}
            alt="Fashion sale"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
