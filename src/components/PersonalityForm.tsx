
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import FormProgress from "@/components/FormProgress";
import FormNavigation from "@/components/form/FormNavigation";
import StepQuestions from "@/components/form/StepQuestions";
import { getQuestionsByStep, getTotalSteps } from "@/services/questionService";

// Form schema
const formSchema = z.object({
  lifePhilosophy: z.string().min(10, {
    message: "Por favor, compartilhe um pouco mais sobre sua filosofia de vida.",
  }),
  recentChallenge: z.string().min(10, {
    message: "Por favor, compartilhe um pouco mais sobre seu desafio recente.",
  }),
  childhoodMemory: z.string().min(10, {
    message: "Por favor, compartilhe um pouco mais sobre sua memória de infância.",
  }),
  dreamScenario: z.string().min(10, {
    message: "Por favor, compartilhe um pouco mais sobre seu cenário dos sonhos.",
  }),
  preferSolitude: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "Por favor, selecione uma opção.",
  }),
  emotionalDecisions: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "Por favor, selecione uma opção.",
  }),
  takeRisks: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "Por favor, selecione uma opção.",
  }),
  planSpontaneous: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "Por favor, selecione uma opção.",
  }),
  emotionalInspiration: z.enum(["1", "2", "3", "4", "5"], {
    required_error: "Por favor, selecione uma opção.",
  }),
  preferredGenre: z.enum(["action", "comedy", "drama", "romance", "scifi", "horror", "adventure", "animation"], {
    required_error: "Por favor, selecione um gênero.",
  }),
});

const PersonalityForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = getTotalSteps();
  const { toast } = useToast();
  const questions = getQuestionsByStep();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lifePhilosophy: "",
      recentChallenge: "",
      childhoodMemory: "",
      dreamScenario: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Estamos analisando suas respostas para encontrar o filme perfeito para você.",
    });
  };
  
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };
  
  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <FormProgress currentStep={currentStep} totalSteps={totalSteps} />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {Object.keys(questions).map(step => {
            const stepNumber = parseInt(step);
            return currentStep === stepNumber && (
              <StepQuestions 
                key={stepNumber}
                currentStep={currentStep}
                totalSteps={totalSteps}
                questions={questions[stepNumber]}
                form={form}
              />
            );
          })}
          
          <FormNavigation 
            currentStep={currentStep}
            totalSteps={totalSteps}
            prevStep={prevStep}
            nextStep={nextStep}
            isSubmitting={form.formState.isSubmitting}
          />
        </form>
      </Form>
    </div>
  );
};

export default PersonalityForm;
