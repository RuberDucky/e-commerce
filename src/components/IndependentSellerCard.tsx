import React from "react";
import Image from "next/image";

interface IndependentSellerCardProps {
  imageSrc: string;
  title: string;
  imageSize: number; // Added imageSize prop
}

const IndependentSellerCard: React.FC<IndependentSellerCardProps> = ({
  imageSrc,
  title,
  imageSize,
}) => {
  return (
    <div className="w-34 h-37 rounded-lg bg-white flex flex-col items-center justify-center shadow-md">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill" // Ensures the image fills the container
        objectFit="cover" // Ensures the image covers the container without distortion
        className="rounded-lg object-cover"
        style={{ width: imageSize, height: imageSize }} // Use imageSize prop
      />
      <p className="mt-2 text-sm text-center text-gray-800">{title}</p>
    </div>
  );
};

export default IndependentSellerCard;
