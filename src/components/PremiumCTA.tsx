import { Button } from "@/components/ui/button";
import { Check, Crown, Star, Package, Gift, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PremiumCTA = () => {
  const freeBenefits = [
    "1 recomendação de filme",
    "Análise básica de sentimentos",
    "Limite de 1000 caracteres",
    "Recomendação por email",
  ];
  
  const premiumBenefits = [
    "5 recomendações de filmes detalhadas",
    "Análise avançada de sentimentos e contexto",
    "Texto sem limite de caracteres",
    "Histórico de recomendações",
    "Suporte prioritário",
  ];
  
  return (
    <section id="premium" className="py-20 bg-gradient-to-b from-midnight/90 to-midnight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-popcorn/20 text-popcorn px-4 py-2 rounded-full text-sm font-medium mb-4">
            Versão Premium
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Eleve sua experiência cinematográfica
          </h2>
          <p className="text-lg text-slate max-w-xl mx-auto">
            Descubra conexões mais profundas entre sua história e o universo cinematográfico.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-midnight/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 order-2 md:order-2">
            <h3 className="text-xl font-bold mb-2">Plano Gratuito</h3>
            <p className="text-slate mb-6">Para experimentar a magia do cinema.</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold">R$0</span>
              <span className="text-slate">/sempre</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {freeBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-popcorn mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-ivory/80">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className="w-full bg-popcorn hover:bg-popcorn/90 text-midnight font-medium"
              onClick={() => document.getElementById('experimente')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Grátis
            </Button>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-midnight/60 to-midnight/40 backdrop-blur-sm border-2 border-coral rounded-xl p-6 md:p-8 relative transform md:scale-110 shadow-xl shadow-coral/10 order-1 md:order-1">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-coral text-ivory px-4 py-1 rounded-full text-sm font-bold flex items-center">
              <Crown className="w-4 h-4 mr-1" /> Mais Popular
            </div>
            
            <Badge className="absolute top-4 right-4 bg-popcorn text-midnight">Economize 67%</Badge>
            
            <div className="flex items-center">
              <h3 className="text-xl font-bold mb-2">Plano Premium</h3>
              <div className="ml-2 bg-coral/20 text-coral text-xs px-2 py-0.5 rounded">Melhor valor</div>
            </div>
            <p className="text-slate mb-6">Para os verdadeiros amantes de cinema.</p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-coral">R$9,70</span>
              <span className="text-slate">/uma vez</span>
              <div className="text-sm text-slate line-through mt-1">De R$29,90</div>
              <div className="text-xs text-ivory/60 mt-1">Oferta por tempo limitado</div>
            </div>
            
            <ul className="space-y-3 mb-8">
              {premiumBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-coral mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-ivory/80">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-coral hover:bg-coral/90 text-ivory font-medium text-lg py-6 animate-pulse-soft">
              Assinar Premium
            </Button>
            
            <div className="text-center mt-4 text-xs text-slate">
              <p>Cancele a qualquer momento. Garantia de 7 dias.</p>
              <div className="flex items-center justify-center mt-3 space-x-2">
                <Gift className="h-4 w-4 text-slate" />
                <span>Acesso imediato após a assinatura</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto space-y-6">
          <div className="bg-midnight/30 p-4 rounded-lg border border-white/10">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
            </div>
            <p className="text-ivory/80 text-center italic">
              "O plano Premium me trouxe conexões com filmes que eu jamais teria descoberto. Valeu cada centavo!"
            </p>
            <p className="text-center text-coral mt-2 font-medium">Maria C., assinou há 3 meses</p>
          </div>

          <div className="bg-midnight/30 p-4 rounded-lg border border-white/10">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
            </div>
            <p className="text-ivory/80 text-center italic">
              "As recomendações são incríveis! Descobri filmes que se encaixam perfeitamente com minhas histórias."
            </p>
            <p className="text-center text-coral mt-2 font-medium">João P., assinou há 2 meses</p>
          </div>

          <div className="bg-midnight/30 p-4 rounded-lg border border-white/10">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
              <Star className="h-5 w-5 text-popcorn" />
            </div>
            <p className="text-ivory/80 text-center italic">
              "A análise de sentimentos é muito precisa. Me ajudou a entender melhor minhas próprias histórias!"
            </p>
            <p className="text-center text-coral mt-2 font-medium">Ana L., assinou há 1 mês</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTA;
