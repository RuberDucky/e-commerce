import React from "react";
import Image from "next/image";
import Shoes from "@/assets/Shoes.png";
import Home from "@/assets/home.png";
import Art from "@/assets/art.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto py-10 flex justify-center">
      <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-6 lg:justify-center">
        {/* Collection 1 */}
        <div className="w-full md:w-1/3 lg:w-auto flex justify-center">
          <Image
            src={Shoes}
            alt="Shoes Collection"
            className="rounded-lg"
            width={300} // Adjust width and height as per your design
            height={300} // to maintain the aspect ratio
          />
        </div>

        {/* Collection 2 */}
        <div className="w-full md:w-1/3 lg:w-auto flex justify-center">
          <Image
            src={Home}
            alt="Home Collection"
            className="rounded-lg"
            width={300}
            height={300}
          />
        </div>

        {/* Collection 3 */}
        <div className="w-full md:w-1/3 lg:w-auto flex justify-center">
          <Image
            src={Art}
            alt="Art Collection"
            className="rounded-lg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
