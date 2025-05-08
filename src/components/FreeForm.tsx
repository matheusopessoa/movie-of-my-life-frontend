import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const FreeForm = () => {
  const [story, setStory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const maxWords = 100;
  const maxChars = 1000;
  
  const wordCount = story.trim().split(/\s+/).filter(word => word.length > 0).length;
  const charCount = story.length;
  const isOverWordLimit = wordCount > maxWords;
  const isOverCharLimit = charCount > maxChars;
  const isOverLimit = isOverWordLimit || isOverCharLimit;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (wordCount < 10) {
      toast({
        title: "História muito curta",
        description: "Por favor, conte sua história com pelo menos 10 palavras para uma melhor recomendação.",
        variant: "destructive",
      });
      return;
    }
    
    if (isOverWordLimit) {
      toast({
        title: "História muito longa",
        description: "Por favor, limite sua história a 100 palavras.",
        variant: "destructive",
      });
      return;
    }

    if (isOverCharLimit) {
      toast({
        title: "Texto muito longo",
        description: "Por favor, limite sua história a 1000 caracteres.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulação de envio para API futura
    setTimeout(() => {
      toast({
        title: "História recebida!",
        description: "Estamos processando sua história para encontrar o filme perfeito. Você receberá um email em breve.",
      });
      
      setIsSubmitting(false);
      setStory('');
    }, 1500);
  };
  
  return (
    <section id="experimente" className="py-20 bg-midnight/90">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-popcorn/20 text-popcorn px-4 py-2 rounded-full text-sm font-medium mb-4">
              Experimente Grátis
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conte sua história e descubra seu filme
            </h2>
            <p className="text-lg text-slate max-w-xl mx-auto">
              Compartilhe momentos, sentimentos ou reflexões da sua vida e receba uma recomendação personalizada.
            </p>
          </div>
          
          <div className="bg-midnight/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="story" className="block text-sm font-medium text-ivory">
                  Sua História
                </label>
                <Textarea
                  id="story"
                  placeholder="Conte sua história, um momento especial, ou um sentimento que você deseja explorar..."
                  className={`min-h-[200px] bg-midnight/60 border-white/20 text-ivory placeholder:text-slate/70 ${isOverLimit ? 'border-coral' : ''}`}
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  required
                />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate">Mínimo de 10 palavras</span>
                  <div className="flex gap-4">
                    <span className={`text-xs ${isOverWordLimit ? 'text-coral font-bold' : 'text-slate'}`}>
                      {wordCount}/{maxWords} palavras
                    </span>
                    <span className={`text-xs ${isOverCharLimit ? 'text-coral font-bold' : 'text-slate'}`}>
                      {charCount}/{maxChars} caracteres
                    </span>
                  </div>
                </div>
                
                {isOverLimit && (
                  <div className="bg-coral/10 border border-coral/20 text-coral rounded-md p-3 flex items-start">
                    <Lock className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">
                        {isOverWordLimit && isOverCharLimit 
                          ? 'Limites excedidos' 
                          : isOverWordLimit 
                            ? 'Limite de palavras excedido' 
                            : 'Limite de caracteres excedido'}
                      </p>
                      <p className="text-sm">
                        {isOverWordLimit && `Sua história tem ${wordCount} palavras. `}
                        {isOverCharLimit && `Seu texto tem ${charCount} caracteres. `}
                        Para enviar histórias mais longas, 
                        <a href="#premium" className="font-bold underline ml-1">faça upgrade para o plano Premium</a>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-coral hover:bg-coral/90 text-ivory"
                  disabled={isSubmitting || isOverLimit}
                >
                  {isSubmitting ? 'Processando...' : 'Encontrar Meu Filme'}
                </Button>
              </div>
              
              <div className="bg-midnight/60 p-4 rounded-lg border border-white/10 mt-4">
                <h4 className="text-center text-sm font-medium text-popcorn mb-2">Quer resultados ainda melhores?</h4>
                <p className="text-xs text-center text-ivory/80 mb-3">
                  Com o plano Premium você recebe 5 recomendações personalizadas, histórias sem limites e análise avançada de sentimentos.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-coral/30 text-coral hover:bg-coral/10"
                  onClick={() => document.getElementById('premium')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Plano Premium
                </Button>
              </div>
              
              <p className="text-xs text-center text-slate">
                Ao enviar, você concorda com nossos <a href="#" className="text-popcorn hover:underline">Termos de Serviço</a> e <a href="#" className="text-popcorn hover:underline">Política de Privacidade</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeForm;
