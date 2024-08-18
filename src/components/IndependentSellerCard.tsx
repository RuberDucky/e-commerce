import React from 'react';

interface IndependentSellerCardProps {
  imageSrc: string;
  title: string;
  imageSize: number; // Added imageSize prop
}

const IndependentSellerCard: React.FC<IndependentSellerCardProps> = ({ imageSrc, title, imageSize }) => {
  return (
    <div className="w-34 h-34 rounded-lg bg-white flex flex-col items-center justify-center shadow-md">
      <img 
        src={imageSrc} 
        alt={title} 
        className="rounded-lg object-cover" 
        style={{ width: imageSize, height: imageSize }} // Use imageSize prop
      />
      <p className="mt-2 text-sm text-center text-gray-800">{title}</p>
    </div>
  );
};

export default IndependentSellerCard;