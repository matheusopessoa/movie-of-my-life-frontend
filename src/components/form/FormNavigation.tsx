
import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  prevStep: () => void;
  nextStep: () => void;
  isSubmitting?: boolean;
}

const FormNavigation = ({ 
  currentStep, 
  totalSteps, 
  prevStep, 
  nextStep,
  isSubmitting = false
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between pt-4">
      <Button
        type="button"
        variant="outline"
        onClick={prevStep}
        disabled={currentStep === 1}
        className="border-popcorn/30 text-popcorn hover:bg-popcorn/10"
      >
        Anterior
      </Button>
      
      {currentStep < totalSteps ? (
        <Button 
          type="button" 
          onClick={nextStep}
          className="bg-coral hover:bg-coral/90 text-ivory"
        >
          Próxima
        </Button>
      ) : (
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="bg-popcorn hover:bg-popcorn/90 text-midnight font-semibold"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Encontrar meu filme
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;
