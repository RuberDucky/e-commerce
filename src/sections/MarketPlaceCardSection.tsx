// components/MarketPlaceSection.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import MarketPlaceCard from "@/components/MarketPlaceCard";

const MarketPlaceSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const marketPlaceItems = [
    {
      imageSrc:
        "https://images.pexels.com/photos/4846437/pexels-photo-4846437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Elegant Sofa Set",
      description:
        "Transform your living room with this stylish and comfortable sofa set. Perfect for any modern home.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/4846433/pexels-photo-4846433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Artistic Wall Decor",
      description:
        "Add a touch of sophistication to your walls with our unique and artistic wall decor. Ideal for contemporary spaces.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/4202322/pexels-photo-4202322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Modern Table Lamp",
      description:
        "Illuminate your room with this sleek and modern table lamp. A perfect blend of functionality and style for any room.",
    },
    // Add more items as needed
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => scrollElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="container mx-auto my-8 px-8 md:py-0">
      {/* Mobile view */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-scroll md:hidden scrollbar-hide snap-x snap-mandatory px-4"
      >
        {marketPlaceItems.map((item, index) => (
          <div key={index} className="min-w-full snap-center">
            <MarketPlaceCard
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>

      {/* Tablet and larger view */}
      <div className="hidden md:flex justify-center space-x-4">
        <div className="flex justify-center space-x-4">
          {marketPlaceItems.map((item, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <MarketPlaceCard
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Page indicators */}
      <div className="flex justify-center mt-4 md:hidden">
        {marketPlaceItems.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-[#EB8426]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketPlaceSection;
