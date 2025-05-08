
import { Button } from "@/components/ui/button";
import { Film, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background with cinematic overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop")', 
        }}
      >
        <div className="absolute inset-0 bg-midnight/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Film className="w-12 h-12 text-popcorn mx-auto mb-6" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">
            <span className="text-ivory">Sua história merece um </span>
            <span className="text-coral">filme à altura</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ivory/90 mb-8 max-w-xl mx-auto leading-relaxed">
            Compartilhe sua jornada e descubra o filme que conecta com as emoções mais profundas da sua vida, como se fosse escrito especialmente para você.
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <Button 
              className="bg-coral hover:bg-coral/90 text-ivory text-lg px-8 py-6 rounded-full animate-pulse-soft"
              size="lg"
              onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Descubra Seu Filme
            </Button>
            
            <Button 
              className="bg-transparent hover:bg-midnight/40 text-popcorn border border-popcorn/30 text-sm px-6 py-2 rounded-full"
              variant="outline"
              onClick={() => document.getElementById('premium')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Plano Premium
            </Button>
          </div>
          
          <div className="flex items-center justify-center mt-8 space-x-6">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-popcorn mr-2" />
              <span className="text-slate">5.000+ histórias conectadas</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-popcorn mr-2" />
              <span className="text-slate">4.9/5 avaliação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
