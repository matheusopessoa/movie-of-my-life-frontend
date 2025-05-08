
import { Film, Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <Film className="h-6 w-6 text-popcorn" />
              <span className="text-popcorn font-poppins text-xl font-bold">My<span className="text-coral">Movie</span>Match</span>
            </a>
            
            <p className="text-slate text-sm mb-6">
              Conectando histórias reais com experiências cinematográficas inesquecíveis.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-slate hover:text-coral transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate hover:text-coral transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate hover:text-coral transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-ivory mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate hover:text-coral transition-colors">Início</a></li>
              <li><a href="#como-funciona" className="text-slate hover:text-coral transition-colors">Como Funciona</a></li>
              <li><a href="#experimente" className="text-slate hover:text-coral transition-colors">Experimente Grátis</a></li>
              <li><a href="#premium" className="text-slate hover:text-coral transition-colors">Versão Premium</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-ivory mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:contato@mymoviematch.com" className="flex items-center text-slate hover:text-coral transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                contato@mymoviematch.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-sm text-slate gap-4">
          <p>&copy; {new Date().getFullYear()} MyMovieMatch. Todos os direitos reservados.</p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-coral transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-coral transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-coral transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
