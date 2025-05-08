
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FormField, FormItem, FormControl, FormDescription, FormMessage, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

interface QuestionCardProps {
  question: {
    id: string;
    question: string;
    description: string;
    type: string;
  };
  form: any;
}

const QuestionCard = ({ question, form }: QuestionCardProps) => {
  const renderFormField = () => {
    switch (question.type) {
      case "text":
        return (
          <FormField
            control={form.control}
            name={question.id}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder="Escreva sua resposta aqui..." 
                    className="min-h-[120px] bg-midnight/40 border-popcorn/20 text-ivory placeholder:text-slate/70 resize-none focus:border-popcorn/50"
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-slate/70 text-sm italic mt-2">
                  {question.description}
                </FormDescription>
                <FormMessage className="text-coral" />
              </FormItem>
            )}
          />
        );
        
      case "radio":
        return (
          <FormField
            control={form.control}
            name={question.id}
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex justify-between"
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FormItem key={value} className="flex flex-col items-center space-y-1">
                        <FormControl>
                          <RadioGroupItem
                            value={value.toString()}
                            id={`${question.id}-${value}`}
                            className="sr-only peer"
                          />
                        </FormControl>
                        <label
                          htmlFor={`${question.id}-${value}`}
                          className="cursor-pointer flex flex-col items-center space-y-1 peer-data-[state=checked]:text-popcorn"
                        >
                          <div className="size-9 rounded-full flex items-center justify-center border border-slate/30 peer-data-[state=checked]:border-popcorn peer-data-[state=checked]:bg-popcorn/10">
                            {value}
                          </div>
                        </label>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <div className="flex justify-between text-xs text-slate mt-1 px-1">
                  <span>Discordo Totalmente</span>
                  <span>Concordo Totalmente</span>
                </div>
                <FormDescription className="text-slate/70 text-sm italic">
                  {question.description}
                </FormDescription>
                <FormMessage className="text-coral" />
              </FormItem>
            )}
          />
        );
        
      case "genre":
        return (
          <FormField
            control={form.control}
            name={question.id}
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                  >
                    {[
                      { label: "Ação", value: "action" },
                      { label: "Comédia", value: "comedy" },
                      { label: "Drama", value: "drama" },
                      { label: "Romance", value: "romance" },
                      { label: "Ficção Científica", value: "scifi" },
                      { label: "Terror", value: "horror" },
                      { label: "Aventura", value: "adventure" },
                      { label: "Animação", value: "animation" }
                    ].map((genre) => (
                      <FormItem key={genre.value}>
                        <FormControl>
                          <RadioGroupItem
                            value={genre.value}
                            id={genre.value}
                            className="sr-only peer"
                          />
                        </FormControl>
                        <label
                          htmlFor={genre.value}
                          className="flex flex-col items-center justify-center h-24 rounded-lg border border-slate/30 bg-midnight/40 hover:bg-midnight/60 cursor-pointer peer-data-[state=checked]:border-popcorn peer-data-[state=checked]:bg-popcorn/10"
                        >
                          <div className="text-center">
                            <Star className="h-5 w-5 mb-2 mx-auto text-slate peer-data-[state=checked]:text-popcorn" />
                            <span className="text-ivory peer-data-[state=checked]:text-popcorn">{genre.label}</span>
                          </div>
                        </label>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormDescription className="text-slate/70 text-sm italic">
                  {question.description}
                </FormDescription>
                <FormMessage className="text-coral" />
              </FormItem>
            )}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <Card className="border-popcorn/20 bg-midnight/30 shadow-[0_4px_15px_rgba(255,211,111,0.07)] overflow-hidden">
      <div className="bg-gradient-to-r from-midnight via-midnight/90 to-midnight p-4 border-b border-popcorn/10">
        <h3 className="text-lg font-medium text-ivory">{question.question}</h3>
      </div>
      <CardContent className="p-6">
        {renderFormField()}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
