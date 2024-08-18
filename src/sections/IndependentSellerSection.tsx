"use client";
import React, { useState } from "react";
import IndependentSellerCard from "@/components/IndependentSellerCard"; // Adjust the import path as needed

const IndependentSellerSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sellers = [
    {
      imageSrc:
        "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Throw Pillows",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/26839105/pexels-photo-26839105/free-photo-of-handmade-vases-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Handmade Vases",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/26605624/pexels-photo-26605624/free-photo-of-paintings-in-frames-hanging-at-the-exhibition-in-an-art-gallery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Custom Paintings",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/186844/pexels-photo-186844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Artistic Lamps",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/4040599/pexels-photo-4040599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Unique Jewelry",
    },
    {
        imageSrc:
          "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Throw Pillows",
      },
      {
        imageSrc:
          "https://images.pexels.com/photos/26839105/pexels-photo-26839105/free-photo-of-handmade-vases-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Handmade Vases",
      },
      {
        imageSrc:
          "https://images.pexels.com/photos/26605624/pexels-photo-26605624/free-photo-of-paintings-in-frames-hanging-at-the-exhibition-in-an-art-gallery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Custom Paintings",
      },
      {
        imageSrc:
          "https://images.pexels.com/photos/186844/pexels-photo-186844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Artistic Lamps",
      },
    // Add more items as needed
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sellers.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sellers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto my-8 px-4 md:px-8 lg:px-12">
      {/* Text Section */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">Only on Polka</h2>
        <p className="text-sm text-gray-600">
          Explore products from independent sellers
        </p>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        <div className="flex overflow-x-scroll space-x-4 scrollbar-hide snap-x snap-mandatory px-3 py-0">
          {sellers.map((seller, index) => (
            <div key={index} className="flex-shrink-0 w-[140px] h-[140px] snap-center">
              <IndependentSellerCard
                imageSrc={seller.imageSrc}
                title={seller.title}
                imageSize={120}
              />
            </div>
          ))}
        </div>
        {/* Indicators */}
        <div className="flex justify-center mt-4">
          {sellers.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${currentIndex === index ? "bg-[#EB8426]" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      {/* Tablet and PC View */}
      <div className="hidden lg:flex justify-center items-center relative">
        <button
          onClick={handlePrevClick}
          className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full"
        >
          &lt;
        </button>
        <div className="grid grid-cols-4 gap-4">
          {sellers
            .slice(currentIndex, currentIndex + 4)
            .map((seller, index) => (
              <div key={index} className="w-[140px] h-[140px]">
                <IndependentSellerCard
                  imageSrc={seller.imageSrc}
                  title={seller.title}
                  imageSize={120}
                />
              </div>
            ))}
        </div>
        <button
          onClick={handleNextClick}
          className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default IndependentSellerSection;
