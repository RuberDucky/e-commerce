import { Header } from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import IndependentSellerSection from "@/sections/IndependentSellerSection";
import MarketPlaceSection from "@/sections/MarketPlaceCardSection";
import ProductShowcase from "@/sections/ProductCardSection";


export default function Home() {
  return( <>
  <Header/>
  <HeroSection/>
  <ProductShowcase/>
  <MarketPlaceSection/>
  <IndependentSellerSection/>
  </>);
}
