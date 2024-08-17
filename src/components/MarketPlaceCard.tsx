// components/MarketPlaceCard.tsx
import React from 'react';
import Image from 'next/image';

interface MarketPlaceCardProps {
  imageSrc: string; // URL for the image
  title: string;
  description: string;
}

const MarketPlaceCard: React.FC<MarketPlaceCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-[#F5F6F8] rounded-lg flex flex-col items-center justify-center p-4 w-[268px] h-[292px] mx-auto">
      {/* Circular image */}
      <div className="w-24 h-24 mb-4 rounded-full overflow-hidden flex items-center justify-center">
        <Image src={imageSrc} alt={title} layout="responsive" width={96} height={96} />
      </div>

      {/* Title */}
      <h3 className="text-center text-lg font-bold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-center text-sm">{description}</p>
    </div>
  );
};

export default MarketPlaceCard;
