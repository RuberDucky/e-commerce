import React from 'react';
import Image from 'next/image';

interface HandPickItemsCardProps {
  imageSrc: string;
  title: string;
  price: string;
}

const HandPickItemsCard: React.FC<HandPickItemsCardProps> = ({ imageSrc, title, price }) => {
  return (
    <div className="w-40 h-[290px] rounded-lg bg-white flex flex-col items-center justify-between shadow-md p-4">
      <div className="relative w-full h-3/5">
        {/* Image at the top center */}
        <Image
          src={imageSrc}
          alt={title}
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Ensures the image covers the container without distortion
          className="rounded-lg"
        />
        {/* Heart reaction icon in the top-right corner */}
        <div className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.172 3.172a4 4 0 015.656 0L12 6.343l3.172-3.171a4 4 0 115.656 5.656L12 18.343l-8.828-8.828a4 4 0 010-5.656z"
            />
          </svg>
        </div>
      </div>
      {/* Title below the image */}
      <p className="text-sm text-gray-800 mt-2 text-center">{title}</p>
      {/* Price below the title */}
      <p className="text-base font-bold text-gray-800 text-center">{price}</p>
    </div>
  );
};

export default HandPickItemsCard;
