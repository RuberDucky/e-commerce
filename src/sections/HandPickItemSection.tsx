"use client";
import React, { useRef, useState, useEffect } from "react";
import HandPickItemsCard from "@/components/HandPickItemsCard";

const HandPickItemsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  // Sample data for items
  const items = [
    {
      imageSrc: "https://picsum.photos/id/284/600/400",
      title: "Viejanut Hocaala",
      price: "$10.00",
    },
    {
      imageSrc: "https://picsum.photos/id/385/600/400",
      title: "Luozibuh Hocaala",
      price: "$20.00",
    },
    {
      imageSrc: "https://picsum.photos/id/386/600/400",
      title: "Gatooza Hocaala",
      price: "$30.00",
    },
    {
      imageSrc: "https://picsum.photos/id/287/600/400",
      title: "Timsubef",
      price: "$40.00",
    },
    {
      imageSrc: "https://picsum.photos/id/288/600/400",
      title: "Tialjip Hocaala",
      price: "$50.00",
    },
    {
      imageSrc: "https://picsum.photos/id/289/600/400",
      title: "Item 6 Hocaala",
      price: "$60.00",
    },
    {
      imageSrc: "https://picsum.photos/id/290/600/400",
      title: "Hocaala Hocaala",
      price: "$70.00",
    },
    {
      imageSrc: "https://picsum.photos/id/291/600/400",
      title: "Hocaala Hocaala",
      price: "$80.00",
    },
    // Add more items as needed
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const itemWidth = width / 2;
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== currentIndex && newIndex < items.length) {
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

  const scrollTo = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  useEffect(() => {
    // Detect if the device is mobile or tablet
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobileOrTablet(
      /android|iphone|ipad|iPod|windows phone|mobile/.test(userAgent)
    );

    const scrollElement = scrollRef.current;
    const sectionElement = sectionRef.current;

    if (scrollElement && sectionElement && !isMobileOrTablet) {
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
  }, [currentIndex, items.length, isMobileOrTablet]);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto my-8 px-2 md:py-0 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">HandPick Item</h2>
      </div>

      {/* Scrollable View */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 md:px-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center"
            style={{ width: "195px", height: "290px" }}
          >
            <HandPickItemsCard
              imageSrc={item.imageSrc}
              title={item.title}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center mt-4 md:hidden">
        {items.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full mx-1 ${
              currentIndex === index ? "bg-[#EB8426]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Left and Right Arrows */}
      {!isMobileOrTablet && (
        <>
          <div
            onClick={() => scrollTo("left")}
            className="absolute top-1/2 transform -translate-y-1/2 left-0 p-2 cursor-pointer"
          >
            <div className="bg-white p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={() => scrollTo("right")}
            className="absolute top-1/2 transform -translate-y-1/2 right-0 p-2 cursor-pointer"
          >
            <div className="bg-white p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HandPickItemsSection;
