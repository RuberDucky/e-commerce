"use client";
import React, { useState, useEffect, useRef } from "react";
import IndependentSellerCard from "@/components/IndependentSellerCard"; // Adjust the import path as needed

const IndependentSellerSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(2);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const sellers = [
    {
      imageSrc: "https://picsum.photos/id/684/600/400",
      title: "Blanket",
    },
    {
      imageSrc: "https://picsum.photos/id/657/600/400",
      title: "Data",
    },
    {
      imageSrc: "https://picsum.photos/id/688/600/400",
      title: "Camera",
    },
    {
      imageSrc: "https://picsum.photos/id/689/600/400",
      title: "Random",
    },
    {
      imageSrc: "https://picsum.photos/id/690/600/400",
      title: "Image",
    },
    {
      imageSrc: "https://picsum.photos/id/691/600/400",
      title: "Scenes",
    },
    {
      imageSrc: "https://picsum.photos/id/692/600/400",
      title: "Image",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg",
      title: "Throw Pillows",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/26839105/pexels-photo-26839105/free-photo-of-handmade-vases-on-table.jpeg",
      title: "Handmade Vases",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/26605624/pexels-photo-26605624/free-photo-of-paintings-in-frames-hanging-at-the-exhibition-in-an-art-gallery.jpeg",
      title: "Custom Paintings",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/186844/pexels-photo-186844.jpeg",
      title: "Artistic Lamps",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/4040599/pexels-photo-4040599.jpeg",
      title: "Unique Jewelry",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024)
        setItemsPerScreen(4); // Large screens: 4 items per row
      else if (window.innerWidth >= 768)
        setItemsPerScreen(3); // Tablet screens: 3 items per row
      else setItemsPerScreen(2); // Mobile screens: 2 items per row
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  }, [currentIndex, sellers.length, isMobileOrTablet]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const itemWidth = width / itemsPerScreen; // Adjust based on the number of items per screen
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

  const scrollTo = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / itemsPerScreen;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  const getVisibleIndicators = () => {
    const maxVisible = itemsPerScreen;
    const start = Math.max(0, currentIndex - Math.floor(maxVisible / 2));
    const end = Math.min(start + maxVisible, sellers.length);

    return sellers.slice(start, end);
  };

  return (
    <div
      ref={sectionRef}
      className="container mx-auto my-8 px-2 md:py-0 relative"
    >
      <div className="text-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">Only on Polka</h2>
        <p className="text-sm text-gray-600">
          Explore products from independent sellers
        </p>
      </div>

      {/* Scrollable View */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x gap-4 snap-mandatory scrollbar-hide px-4 md:px-8"
        style={{ scrollSnapType: "x mandatory", height: "180px" }} // Increased height
      >
        {sellers.map((seller, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center"
            style={{ width: "140px", height: "140px" }} // Container size
          >
            <IndependentSellerCard
              imageSrc={seller.imageSrc}
              title={seller.title}
              imageSize={120} // Image size
            />
          </div>
        ))}
      </div>

      {/* Page indicators */}
      <div className="flex justify-center mt-4 md:hidden">
        {getVisibleIndicators().map((_, index) => (
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

export default IndependentSellerSection;
