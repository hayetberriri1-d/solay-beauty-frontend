import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import DiorImg from '@/assets/Dior.jpg';
import lipoilImg from '@/assets/lipoil.jpg';
import rougeImg from '@/assets/rouge.jpg';
import houppettesImg from '@/assets/houppettes.jpg';

const featuredProducts = [
  {
    id: 1,
    name: "Rouge Velours Rosé",
    price: "45,500 DT",
    originalPrice: "55,000 DT",
    rating: 4.9,
    reviews: 324,
    badge: "Best-seller",
    color: "Rose Poudré",
    image: DiorImg,
  },
 {
  id: 2,
  name: "Huile à Lèvres Brillance Intense",
  price: "29.900 DT",
  originalPrice: "39.900 DT",
  rating: 4.8,
  reviews: 189,
  badge: "Nouveau",
  color: "Rose Transparent",
   image: lipoilImg,
},

 {
  id: 3,
  name: "Gloss Lèvres Brillance Sublime",
  price: "39.900 DT",
  originalPrice: "45.900 DT",
  rating: 5.0,
  reviews: 92,
  badge: "Édition Limitée",
  color: "Rouge Cerise",
  image: rougeImg,
},
{
  id: 4,
  name: "Houppettes Douces Velours",
  price: "8.500 DT",
  originalPrice: "9.000 DT",
  rating: 4.6,
  reviews: 37,
  badge: "Top Vente",
  color: "Rose",
  image: houppettesImg,
}

];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-rose-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
            Produits Vedettes
          </h2>
          <p className="text-lg text-charcoal/70 font-inter max-w-2xl mx-auto">
            Nos coups de cœur adorés par les passionnées de beauté du monde entier. Découvrez ce qui rend ces produits si spéciaux.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-cream rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
                    product.badge === "Best-seller"
                      ? "bg-rose-gold text-cream"
                      : product.badge === "Nouveau"
                      ? "bg-rose-powder text-charcoal"
                      : product.badge === "Édition Limitée"
                      ? "bg-charcoal text-cream"
                      : "bg-rose-light text-rose-gold"
                  }`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative h-48 rounded-xl mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-24 h-24 bg-rose-gold/30 rounded-full flex items-center justify-center mx-auto mt-12">
                    <span className="text-rose-gold text-xs font-inter font-medium text-center">
                      {product.name.split(" ")[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-charcoal group-hover:text-rose-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-charcoal/60 font-inter">
                    {product.color}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "fill-rose-gold text-rose-gold"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-charcoal/70 font-inter">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-playfair font-bold text-charcoal">
                    {product.price}
                  </span>
                  <span className="text-sm text-charcoal/50 line-through font-inter">
                    {product.originalPrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  variant="beauty"
                  size="sm"
                  className="w-full group-hover:scale-105 transition-transform"
                >
                  Ajouter au Panier
                </Button>
              </div>

              {/* Hover effect decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-rose-powder/10 rounded-full translate-x-8 translate-y-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="beauty-outline" size="lg">
            Voir Tous les Produits
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
