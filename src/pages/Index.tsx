import HeroSection from "@/components/HeroSection";
import PromotionBanner from "@/components/PromotionBanner";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PromotionBanner />
      <CategoriesSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
