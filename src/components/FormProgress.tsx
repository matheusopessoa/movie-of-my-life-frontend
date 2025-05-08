
import React from "react";

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress = ({ currentStep, totalSteps }: FormProgressProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`relative flex items-center justify-center w-8 h-8 rounded-full border ${
              i + 1 <= currentStep
                ? "bg-popcorn border-popcorn text-midnight"
                : "bg-midnight/40 border-slate/30 text-slate"
            }`}
          >
            {i + 1}
            {i + 1 < totalSteps && (
              <div
                className={`absolute top-1/2 -right-full h-[2px] w-full ${
                  i + 1 < currentStep ? "bg-popcorn" : "bg-slate/30"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="text-center text-sm text-slate">
        Passo {currentStep} de {totalSteps}
      </div>
    </div>
  );
};

export default FormProgress;
