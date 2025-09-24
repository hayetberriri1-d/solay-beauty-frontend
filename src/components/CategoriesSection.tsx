import { Button } from "@/components/ui/button";
import lipstickImage from "@/assets/lipstick-category.jpg";
import foundationImage from "@/assets/foundation-category.jpg";
import skincareImage from "@/assets/skincare-category.jpg";


const categories = [
  {
    id: 1,
    name: "Rouge à Lèvres",
    description: "Couleurs audacieuses, textures luxueuses",
    image: lipstickImage,
    gradient: "from-rose-light to-rose-powder"
  },
  {
    id: 2,
    name: "Fond de Teint", 
    description: "Couvrance parfaite, fini naturel",
    image: foundationImage,
    gradient: "from-rose-powder to-rose-gold"
  },
  {
    id: 3,
    name: "Soins Visage",
    description: "Nourrir, protéger, sublimer",
    image: skincareImage,
    gradient: "from-rose-gold to-rose-light"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            Nos Catégories
          </h2>
          <p className="text-lg text-charcoal/70 font-inter max-w-2xl mx-auto">
            Découvrez nos collections soigneusement sélectionnées pour sublimer votre beauté naturelle avec des produits de qualité premium.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative bg-cream rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={`${category.name} collection`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-6 text-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-playfair font-bold text-charcoal">
                    {category.name}
                  </h3>
                  <p className="text-charcoal/70 font-inter">
                    {category.description}
                  </p>
                </div>
                
                <Button 
                  variant="beauty" 
                  size="default"
                  className="group-hover:scale-105 transition-transform duration-300"
                >
                  Acheter
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
              
              {/* Hover decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-rose-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;