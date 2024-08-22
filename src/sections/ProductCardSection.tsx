"use client";
import React, { useState, useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard"; // Import the ProductCard component
import sofaImg from "@/assets/sofa.svg";
import chairImg from "@/assets/chair.svg";
import lampImg from "@/assets/lamp.svg";

const ProductShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      imageSrc: sofaImg,
      bgColor: "#D9ABFD",
      title: "Vonna Neva Walnut Sandalye Chair",
      price: "195,13 $",
    },
    {
      imageSrc: chairImg,
      bgColor: "#D3FBD9",
      title: "Vonna Neva Walnut Sandalye Chair",
      price: "195,13 $",
    },
    {
      imageSrc: lampImg,
      bgColor: "#FBD9D9",
      title: "Vonna Neva Walnut Sandalye Chair",
      price: "195,13 $",
    },
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
    <div className="container mx-auto my-8 px-6">
      {/* Mobile view */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-scroll md:hidden scrollbar-hide snap-x snap-mandatory px-4"
      >
        {products.map((product, index) => (
          <div key={index} className="flex-shrink-0 w-68 snap-center">
            <ProductCard
              imageSrc={product.imageSrc}
              bgColor={product.bgColor}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
      {/* Tablet and larger view */}
      <div className="hidden md:flex justify-center space-x-4">
        <div className="flex justify-center space-x-4">
          {products.map((product, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <ProductCard
                imageSrc={product.imageSrc}
                bgColor={product.bgColor}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Page indicators */}
      <div className="flex justify-center mt-4 md:hidden">
        {products.map((_, index) => (
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

export default ProductShowcase;
