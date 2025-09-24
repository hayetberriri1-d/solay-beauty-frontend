import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-bold text-rose-gold">
                Solay Beauty
              </h3>
              <p className="text-cream/80 font-inter leading-relaxed">
                Sublimer la beauté naturelle avec des cosmétiques . Rayonnez comme jamais auparavant.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-rose-powder/20 rounded-full flex items-center justify-center hover:bg-rose-gold transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} className="text-cream" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-rose-powder/20 rounded-full flex items-center justify-center hover:bg-rose-gold transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} className="text-cream" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-rose-powder/20 rounded-full flex items-center justify-center hover:bg-rose-gold transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} className="text-cream" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-rose-gold">
              Liens Rapides
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-cream/80 hover:text-rose-gold transition-colors font-inter">
                À Propos
              </a>
              <a href="#" className="text-cream/80 hover:text-rose-gold transition-colors font-inter">
                Tous les Produits
              </a>
              <a href="#" className="text-cream/80 hover:text-rose-gold transition-colors font-inter">
                Conseils Beauté
              </a>
              <a href="#" className="text-cream/80 hover:text-rose-gold transition-colors font-inter">
                Avis Clients
              </a>
            </nav>
          </div>
          
          {/* Customer Care */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-rose-gold">
              Service Client
            </h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-cream/80 hover:text-rose-gold transition-colors font-inter">
                Nous Contacter
              </a>
              <a href="#" className="text-cream/80 hover:text-rose-gold transition-colors font-inter">
                Livraison
              </a>
              <a href="#" className="text-cream/80 hover:text-rose-gold transition-colors font-inter">
                Retours & Échanges
              </a>
              <a href="#" className="text-cream/80 hover:text-rose-gold transition-colors font-inter">
                Guide des Teintes
              </a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-playfair font-semibold text-rose-gold">
              Nous Contacter
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-rose-gold" />
                <span className="text-cream/80 font-inter text-sm">
                  bonjour@solaybeauty.fr
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-rose-gold" />
                <span className="text-cream/80 font-inter text-sm">
                  01 42 86 83 92
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-rose-gold mt-1" />
                <span className="text-cream/80 font-inter text-sm">
                  123 Avenue de la Beauté<br />
                  75008 Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="border-t border-rose-powder/20 mt-12 pt-8">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-rose-gold">
              Restez Belle
            </h4>
            <p className="text-cream/80 font-inter">
              Abonnez-vous à notre newsletter pour des conseils beauté, des offres exclusives et les nouveaux produits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-full bg-rose-powder/20 border border-rose-powder/30 text-cream placeholder-cream/60 font-inter focus:outline-none focus:ring-2 focus:ring-rose-gold"
              />
              <button className="px-6 py-3 bg-rose-gold text-cream rounded-full font-inter font-medium hover:bg-rose-powder transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-rose-powder/20 mt-8 pt-8 text-center">
          <p className="text-cream/60 font-inter text-sm">
            © {currentYear} Solay Beauty. Tous droits réservés. Créé avec 💕 pour les âmes belles.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;