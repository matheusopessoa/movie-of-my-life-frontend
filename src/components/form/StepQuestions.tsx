
import React from "react";
import QuestionCard from "@/components/QuestionCard";
import AdditionalComments from "@/components/form/AdditionalComments";

interface StepQuestionsProps {
  currentStep: number;
  totalSteps: number;
  questions: any[];
  form: any;
}

const StepQuestions = ({ currentStep, totalSteps, questions, form }: StepQuestionsProps) => {
  return (
    <div className="space-y-8 animate-slide-right">
      {questions.map((item) => (
        <QuestionCard 
          key={item.id}
          question={item}
          form={form}
        />
      ))}
      
      {currentStep === totalSteps && <AdditionalComments />}
    </div>
  );
};

export default StepQuestions;
