"use client";
import React, { useState, useEffect, useRef } from "react";
import IndependentSellerCard from "@/components/IndependentSellerCard"; // Adjust the import path as needed

const IndependentSellerSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const itemWidth =
        scrollRef.current.querySelector("div")?.clientWidth || width;
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== currentIndex && newIndex < sellers.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const handleWheelScroll = (event: WheelEvent) => {
    if (scrollRef.current) {
      event.preventDefault();
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const sectionElement = sectionRef.current;

    if (scrollElement && sectionElement) {
      scrollElement.addEventListener("scroll", handleScroll);

      const handleMouseEnter = () => {
        sectionElement.addEventListener("wheel", handleWheelScroll);
      };

      const handleMouseLeave = () => {
        sectionElement.removeEventListener("wheel", handleWheelScroll);
      };

      sectionElement.addEventListener("mouseenter", handleMouseEnter);
      sectionElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
        sectionElement.removeEventListener("mouseenter", handleMouseEnter);
        sectionElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [currentIndex, sellers.length]);

  const getVisibleIndicators = () => {
    const maxVisible = 3;
    const start = Math.max(0, currentIndex - 1);
    const end = Math.min(start + maxVisible, sellers.length);

    return sellers.slice(start, end);
  };

  return (
    <div ref={sectionRef} className="container mx-auto my-8 px-2 md:py-0">
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">Only on Polka</h2>
        <p className="text-sm text-gray-600">
          Explore products from independent sellers
        </p>
      </div>

      {/* Scrollable View for All Devices */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll space-x-4 justify-center scrollbar-hide snap-x snap-mandatory gap-4 px-4 md:px-8"
        style={{ paddingLeft: "16px", paddingRight: "16px" }} // Add padding to ensure first and last items are fully visible
      >
        {sellers.map((seller, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px] h-[150px] snap-center"
            style={{
              marginLeft: index === 0 ? "8px" : 0,
              marginRight: index === sellers.length - 1 ? "8px" : 0,
            }} // Ensure first and last items are visible
          >
            <IndependentSellerCard
              imageSrc={seller.imageSrc}
              title={seller.title}
              imageSize={120}
            />
          </div>
        ))}
      </div>

      {/* Page indicators */}
      <div className="flex justify-center mt-4 md:hidden">
        {getVisibleIndicators().map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${currentIndex === index + Math.max(0, currentIndex - 1)
                ? "bg-[#EB8426]"
                : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default IndependentSellerSection;
