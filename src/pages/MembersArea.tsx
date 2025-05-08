
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonalityForm from "@/components/PersonalityForm";
import MemberNav from "@/components/MemberNav";
import { motion } from "framer-motion";

const MembersArea = () => {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
              <motion.span 
                className="text-gradient-popcorn inline-block"
                initial={{ backgroundPosition: "0 0" }}
                animate={{ backgroundPosition: "100% 0" }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              >
                Descubra seu filme perfeito
              </motion.span>
            </h1>
            
            <motion.div 
              className="bg-midnight/50 backdrop-blur-lg rounded-xl p-6 md:p-10 border border-popcorn/20 shadow-[0_0_25px_rgba(255,211,111,0.15)] mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.p 
                className="text-lg text-ivory/90 text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Responda às perguntas abaixo para que possamos encontrar o filme que ressoa com sua personalidade e história de vida.
              </motion.p>
              
              <PersonalityForm />
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MembersArea;
