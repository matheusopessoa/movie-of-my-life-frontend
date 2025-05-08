import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MemberNav from "@/components/MemberNav";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Shield, Lock, Sparkles } from "lucide-react";

const UserProfile = () => {
  const { toast } = useToast();
  const [editMode, setEditMode] = useState(false);
  
  // Mock user data - in a real app, this would come from authentication/API
  const [userData, setUserData] = useState({
    name: "Maria Silva",
    email: "maria.silva@exemplo.com",
    city: "São Paulo",
    age: "28",
    profileImage: "",
    memberSince: "Maio 2023",
    membershipType: "Premium"
  });
  
  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    setEditMode(false);
    
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
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
                Seu Perfil
              </motion.span>
            </h1>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {/* Profile Card */}
              <Card className="bg-midnight/70 border-popcorn/20 text-ivory md:col-span-1">
                <CardHeader className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Avatar className="h-28 w-28 ring-2 ring-popcorn/30 ring-offset-2 ring-offset-midnight">
                      <AvatarImage src={userData.profileImage} />
                      <AvatarFallback className="bg-coral/20 text-popcorn text-3xl">
                        {userData.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <CardTitle className="mt-4 text-2xl text-ivory">{userData.name}</CardTitle>
                  <div className="text-slate text-sm">{userData.email}</div>
                  
                  <div className="mt-4 w-full">
                    <div className="flex items-center gap-2 text-sm text-slate mb-2">
                      <Shield className="h-4 w-4 text-popcorn" />
                      <span>Membro desde {userData.memberSince}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 bg-popcorn/20 rounded-full text-popcorn text-xs font-medium"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Sparkles className="h-3 w-3" />
                        {userData.membershipType}
                      </motion.div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              
              {/* Profile Edit Form */}
              <Card className="bg-midnight/70 border-popcorn/20 text-ivory md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-coral" />
                    Informações Pessoais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveChanges}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-ivory/90">Nome</Label>
                          <Input 
                            id="name"
                            value={userData.name}
                            readOnly={!editMode}
                            onChange={(e) => setUserData({...userData, name: e.target.value})}
                            className="bg-midnight/50 border-slate/30 text-ivory placeholder:text-slate/70 focus-visible:ring-popcorn/30"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-ivory/90">Email</Label>
                          <Input 
                            id="email"
                            value={userData.email}
                            readOnly
                            className="bg-midnight/50 border-slate/30 text-ivory/70 placeholder:text-slate/70"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city" className="text-ivory/90">Cidade</Label>
                          <Input 
                            id="city"
                            value={userData.city}
                            readOnly={!editMode}
                            onChange={(e) => setUserData({...userData, city: e.target.value})}
                            className="bg-midnight/50 border-slate/30 text-ivory placeholder:text-slate/70 focus-visible:ring-popcorn/30"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="age" className="text-ivory/90">Idade</Label>
                          <Input 
                            id="age"
                            type="number"
                            value={userData.age}
                            readOnly={!editMode}
                            onChange={(e) => setUserData({...userData, age: e.target.value})}
                            className="bg-midnight/50 border-slate/30 text-ivory placeholder:text-slate/70 focus-visible:ring-popcorn/30"
                          />
                        </div>
                      </div>
                      
                      <Separator className="my-6 bg-slate/20" />
                      
                      <div className="space-y-2">
                        <CardTitle className="flex items-center gap-2 mb-4 text-base">
                          <Lock className="h-4 w-4 text-coral" />
                          Segurança
                        </CardTitle>
                        
                        <motion.button
                          type="button"
                          className="flex items-center gap-2 px-4 py-2 border border-dashed border-slate/30 rounded-md w-full justify-center text-slate hover:bg-slate/10 hover:text-ivory transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Lock className="h-4 w-4" /> 
                          Alterar senha
                        </motion.button>
                      </div>
                      
                      <div className="flex justify-end gap-3 pt-4">
                        {editMode ? (
                          <>
                            <Button 
                              type="button" 
                              variant="outline"
                              onClick={() => setEditMode(false)}
                              className="border-slate/30 text-slate hover:bg-slate/10 hover:text-ivory"
                            >
                              Cancelar
                            </Button>
                            <Button 
                              type="submit" 
                              className="bg-coral hover:bg-coral/90 text-ivory"
                            >
                              Salvar alterações
                            </Button>
                          </>
                        ) : (
                          <Button 
                            type="button" 
                            onClick={() => setEditMode(true)}
                            className="bg-popcorn hover:bg-popcorn/90 text-midnight"
                          >
                            Editar informações
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
