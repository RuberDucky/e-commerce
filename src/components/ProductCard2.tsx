import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

interface ProductCardProps {
  imageSrc: string;
  bgColor: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  bgColor,
  title,
  price,
}) => {
  return (
    <div
      className={`relative rounded-lg p-4`}
      style={{
        backgroundColor: bgColor,
        width: "288px",
        height: "394px",
      }}
    >
      {/* Heart Icon */}
      <div className="absolute top-3 right-3">
        <FaHeart className="text-red-500" />
      </div>

      {/* Product Image */}
      <div className="flex justify-center mt-2">
        <Image
          src={imageSrc}
          alt={title}
          width={185}
          height={150}
          className="rounded-lg"
        />
      </div>

      {/* Color Label */}
      <p className="text-sm text-[#3E3E3E] mt-4">Color</p>

      {/* Color Circles */}
      <div className="flex space-x-2 mt-2">
        {/* Add as many colors as you want */}
        <div className="h-4 w-4 rounded-full bg-red-500"></div>
        <div className="h-4 w-4 rounded-full bg-blue-500"></div>
        <div className="h-4 w-4 rounded-full bg-green-500"></div>
        <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
      </div>

      {/* Product Title */}
      <p className="text-sm text-[#3E3E3E] mt-4">{title}</p>

      {/* Product Price */}
      <p className="text-lg  mt-2">{price}</p>
    </div>
  );
};

export default ProductCard;
