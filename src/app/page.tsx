import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import JuiceSection from "@/components/JuiceSection";
import StockistsSection from "@/components/StockistsSection";
import UsageSection from "@/components/UsageSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <JuiceSection />
      <GallerySection />
      <UsageSection />
      <StockistsSection />
      <FAQSection />
    </>
  );
}
