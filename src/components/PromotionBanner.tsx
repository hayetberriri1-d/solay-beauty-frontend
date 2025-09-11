import { Button } from "@/components/ui/button";

const PromotionBanner = () => {
  return (
    <section className="bg-gradient-accent py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream">
              Soldes Beauté Printemps
            </h2>
            <p className="text-2xl md:text-3xl font-playfair text-cream/90">
              Jusqu'à <span className="font-bold text-cream">40% de réduction</span>
            </p>
          </div>
          
          <p className="text-lg text-cream/80 font-inter max-w-2xl mx-auto">
            Transformez votre routine beauté avec notre collection premium. Offre limitée sur une sélection de soins, maquillage et essentiels beauté.
          </p>
          
          <div className="pt-4">
            <Button variant="elegant" size="lg" className="bg-cream text-rose-gold hover:bg-rose-light shadow-elegant">
              Acheter Maintenant
              <span className="ml-2">✨</span>
            </Button>
          </div>
          
          {/* Countdown or urgency element */}
          <div className="flex justify-center items-center gap-2 text-cream/70 font-inter text-sm">
            <span>⏰</span>
            <span>L'offre se termine dans 7 jours</span>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-cream/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-16 w-6 h-6 bg-cream/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-16 left-1/4 w-3 h-3 bg-cream/15 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-cream/20 rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default PromotionBanner;