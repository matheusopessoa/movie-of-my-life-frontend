
import { Award, FileText, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="w-10 h-10 text-coral" />,
      title: "Conte sua história",
      description: "Compartilhe momentos importantes, sentimentos ou reflexões da sua vida em um texto livre.",
      free: "Texto simples, apenas 100 palavras.",
      premium: "Texto detalhado e sem limite de caracteres.",
      limitation: "Limite de 100 palavras",
    },
    {
      icon: <Award className="w-10 h-10 text-coral" />,
      title: "Análise especializada",
      description: "Nossa tecnologia analisa sua história para identificar os elementos emocionais e temáticos principais.",
      free: "Análise básica de sentimentos.",
      premium: "Análise profunda com contexto cultural e emocional.",
      limitation: "Sem análise de contexto",
    },
    {
      icon: <Heart className="w-10 h-10 text-coral" />,
      title: "Encontre seu filme",
      description: "Receba recomendações de filmes que refletem os elementos da sua história de forma única.",
      free: "Apenas 1 recomendação básica.",
      premium: "5 recomendações detalhadas com análise personalizada.",
      limitation: "Apenas 1 filme sugerido",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-midnight to-midnight/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-coral/20 text-coral px-4 py-2 rounded-full text-sm font-medium mb-4">Como Funciona</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme sua história em experiência cinematográfica</h2>
          <p className="text-lg text-slate max-w-xl mx-auto">
            Um processo simples que conecta os momentos da sua vida com filmes que tocam sua alma.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-midnight/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:transform hover:translate-y-[-5px] hover:shadow-xl">
              <div className="bg-midnight/60 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-center">
                {index + 1}. {step.title}
              </h3>
              
              <p className="text-ivory/80 mb-6 text-center">{step.description}</p>

              <div className="bg-midnight/60 p-4 rounded-lg border border-coral/30 relative transform hover:scale-105 transition-all">
                  <Badge className="absolute -top-2 right-2 bg-coral border-0 text-ivory text-xs">
                    Recomendado
                  </Badge>
                  <h4 className="text-sm font-semibold text-coral mb-2">Versão Premium</h4>
                  <p className="text-sm text-ivory/70">{step.premium}</p>
                  <div className="mt-2 bg-coral/20 py-1 px-2 rounded text-xs text-coral flex items-center justify-center">
                    <span>✨ Experiência completa</span>
                  </div>
              </div>

              <div className="space-y-4">
                <div className="bg-midnight/60 p-4 rounded-lg relative">

                  <h4 className="text-sm font-semibold text-popcorn mb-2">Versão Gratuita</h4>
                  <p className="text-sm text-ivory/70">{step.free}</p>
                  <div className="mt-2 bg-midnight/80 py-1 px-2 rounded text-xs text-ivory/60 flex items-center justify-center">
                    <span>⚠️ {step.limitation}</span>
                  </div>
                </div>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
