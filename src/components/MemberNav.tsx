
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, User, History, Sparkles } from "lucide-react";

const MemberNav = () => {
  const location = useLocation();
  
  const navItems = [
    {
      name: "Questionário",
      path: "/membros",
      icon: <FileText className="w-4 h-4" />
    },
    {
      name: "Perfil",
      path: "/membros/perfil",
      icon: <User className="w-4 h-4" />
    },
    {
      name: "Histórico",
      path: "/membros/historico",
      icon: <History className="w-4 h-4" />
    }
  ];
  
  return (
    <div className="bg-midnight/30 backdrop-blur-lg border-b border-popcorn/10 py-1 mb-8">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center md:justify-start">
          <ul className="flex space-x-1 md:space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <motion.li key={item.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to={item.path}
                    className={`relative flex items-center px-3 md:px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "text-popcorn font-medium"
                        : "text-ivory/60 hover:text-ivory"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-popcorn/10 rounded-md z-0"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="flex items-center gap-1.5 z-10">
                      {item.icon}
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MemberNav;
