
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-popcorn font-poppins text-2xl font-bold">My<span className="text-coral">Movie</span>Match</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-ivory hover:text-coral transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#como-funciona" className="text-ivory hover:text-coral transition-colors">
            Como Funciona
          </a>
          <a href="#experimente" className="text-ivory hover:text-coral transition-colors">
            Experimente Grátis
          </a>
          <a href="#premium" className="text-ivory hover:text-coral transition-colors">
            Versão Premium
          </a>
          <Button className="bg-coral hover:bg-coral/90 text-ivory">
            Entrar
          </Button>
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-midnight/95 backdrop-blur-md border-b border-white/10">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-6">
              <a 
                href="#como-funciona" 
                className="text-ivory hover:text-coral transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#experimente" 
                className="text-ivory hover:text-coral transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experimente Grátis
              </a>
              <a 
                href="#premium" 
                className="text-ivory hover:text-coral transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Versão Premium
              </a>
              <Button 
                className="bg-coral hover:bg-coral/90 text-ivory w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
