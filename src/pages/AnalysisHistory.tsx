
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MemberNav from "@/components/MemberNav";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar, Star, Sparkles } from "lucide-react";

const AnalysisHistory = () => {
  // Mock data for user's analysis history
  const analysisHistory = [
    {
      id: "1",
      date: "12/05/2023",
      movieTitle: "Eterno Brilho de uma Mente sem Lembranças",
      rating: 4.8,
      status: "completed"
    },
    {
      id: "2",
      date: "27/08/2023",
      movieTitle: "Antes do Amanhecer",
      rating: 4.5,
      status: "completed"
    },
    {
      id: "3",
      date: "14/02/2024",
      movieTitle: "Moonlight: Sob a Luz do Luar",
      rating: 4.9,
      status: "completed"
    },
    {
      id: "4",
      date: "08/05/2024",
      movieTitle: null,
      rating: null,
      status: "processing"
    }
  ];
  
  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="min-h-screen bg-midnight text-ivory">
      <Header />
      <main className="pt-20">
        <MemberNav />
        
        <div className="container mx-auto px-4 py-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <motion.span 
                className="text-gradient-popcorn inline-block"
                initial={{ backgroundPosition: "0 0" }}
                animate={{ backgroundPosition: "100% 0" }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              >
                Seu Histórico de Análises
              </motion.span>
            </h1>
            
            <motion.div 
              className="bg-midnight/50 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-popcorn/20 shadow-[0_0_25px_rgba(255,211,111,0.15)]"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="mb-6">
                <p className="text-ivory/90 text-center mb-8">
                  Aqui você encontra todas as análises de perfil que já realizou e os filmes que combinaram com sua personalidade.
                </p>
              </motion.div>
              
              {analysisHistory.length > 0 ? (
                <motion.div variants={item}>
                  <Card className="bg-midnight/70 border-popcorn/20 text-ivory overflow-hidden">
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader className="bg-midnight/80">
                            <TableRow className="border-b border-slate/20 hover:bg-midnight/80">
                              <TableHead className="text-slate">Data</TableHead>
                              <TableHead className="text-slate">Filme Recomendado</TableHead>
                              <TableHead className="text-slate">Status</TableHead>
                              <TableHead className="text-slate text-right">Ações</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {analysisHistory.map((analysis) => (
                              <motion.tr
                                key={analysis.id}
                                className="border-b border-slate/20 hover:bg-midnight/50"
                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                              >
                                <TableCell className="text-sm">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-slate/70" />
                                    {analysis.date}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  {analysis.status === "completed" ? (
                                    <div>
                                      <div className="font-medium text-ivory/90">{analysis.movieTitle}</div>
                                      <div className="flex items-center gap-1 text-xs text-slate mt-1">
                                        <Star className="h-3 w-3 text-popcorn" />
                                        <span>{analysis.rating}</span>
                                        <span className="text-slate/50">/ 5</span>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="text-slate italic">Em análise...</div>
                                  )}
                                </TableCell>
                                <TableCell>
                                  {analysis.status === "completed" ? (
                                    <Badge className="bg-popcorn/20 text-popcorn hover:bg-popcorn/30">
                                      Concluída
                                    </Badge>
                                  ) : (
                                    <Badge className="bg-coral/20 text-coral hover:bg-coral/30 animate-pulse">
                                      Em processamento
                                    </Badge>
                                  )}
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-slate/30 text-slate hover:bg-slate/10 hover:text-ivory"
                                  >
                                    <FileText className="h-3 w-3 mr-1" /> 
                                    Detalhes
                                  </Button>
                                </TableCell>
                              </motion.tr>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div 
                  variants={item}
                  className="text-center p-10 border border-dashed border-slate/30 rounded-lg"
                >
                  <div className="flex justify-center mb-4">
                    <FileText className="h-12 w-12 text-slate/50" />
                  </div>
                  <h3 className="text-lg font-semibold text-ivory mb-2">Nenhuma análise encontrada</h3>
                  <p className="text-slate mb-4">
                    Você ainda não possui análises de personalidade.
                  </p>
                  <Button className="bg-coral hover:bg-coral/90 text-ivory">
                    Fazer minha primeira análise
                  </Button>
                </motion.div>
              )}
              
              <Separator className="my-8 bg-slate/20" />
              
              <motion.div variants={item} className="bg-popcorn/10 p-5 rounded-lg border border-popcorn/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-popcorn/20 p-3 rounded-full">
                      <Sparkles className="h-5 w-5 text-popcorn" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-popcorn">Premium Ilimitado</h3>
                      <p className="text-sm text-slate">Faça quantas análises quiser sem limites!</p>
                    </div>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="bg-popcorn hover:bg-popcorn/90 text-midnight font-semibold"
                    >
                      Continuar com Premium
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalysisHistory;
