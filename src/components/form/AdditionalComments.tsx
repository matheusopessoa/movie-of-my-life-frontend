
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ChevronUp, ChevronDown } from "lucide-react";

const AdditionalComments = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-midnight/30 p-6 rounded-lg border border-popcorn/20">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="flex w-full justify-between border-dashed border-popcorn/30 bg-midnight/50 hover:bg-midnight/70">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-popcorn" />
              <span>Deseja adicionar algo mais específico?</span>
            </span>
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <Textarea 
            placeholder="Aqui você pode adicionar detalhes especiais sobre sua história, preferências ou qualquer outra informação que acha relevante para encontrarmos seu filme perfeito..."
            className="min-h-[120px] bg-midnight/40 border-popcorn/20 text-ivory placeholder:text-slate/70"
          />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default AdditionalComments;
