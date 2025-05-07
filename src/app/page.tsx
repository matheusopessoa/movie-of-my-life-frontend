'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { Toaster, toast } from 'react-hot-toast';

const examples = {
  pt: "Nasci em uma família simples no interior do Brasil. Meus pais sempre trabalharam duro...",
  en: "I was born in a small town in the countryside. My parents always worked hard to give us...",
  es: "Nací en una familia sencilla en el campo. Mis padres siempre trabajaron duro para darnos..."
};

export default function Home() {
  const [story, setStory] = useState('');
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('pt');
  const [mounted, setMounted] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, [isDarkMode, mounted]);

  useEffect(() => {
    const words = story.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [story]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (story.split(/\s+/).length > 100) {
      toast.error('A história deve ter no máximo 100 palavras');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:6552/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: story }),
      });

      const data = await response.json();

      if (data.movie) {
        setMovie(data.movie);
        toast.success('Filme gerado com sucesso!');
      } else {
        throw new Error('Resposta inválida da API');
      }
    } catch (error) {
      console.error('Erro:', error);
      toast.error('Erro ao gerar o filme. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Movie of My Life</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Toaster position="top-center" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Movie of My Life</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setLanguage('pt')}
            className={`px-4 py-2 rounded ${language === 'pt' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            PT
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`px-4 py-2 rounded ${language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            ES
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="story" className="block text-lg font-medium mb-2">
              {language === 'pt' ? 'Conte sua história' : language === 'en' ? 'Tell your story' : 'Cuenta tu historia'}
            </label>
            <textarea
              id="story"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="w-full h-48 p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={examples[language as keyof typeof examples]}
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm text-gray-500">
                {language === 'pt' ? 'Máximo de 100 palavras' : language === 'en' ? 'Maximum 100 words' : 'Máximo 100 palabras'}
              </p>
              <p className={`text-sm font-medium ${wordCount > 100 ? 'text-red-500' : 'text-gray-500'}`}>
                {wordCount}/100
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {language === 'pt' ? 'Gerando...' : language === 'en' ? 'Generating...' : 'Generando...'}
              </span>
            ) : (
              language === 'pt' ? 'Gerar Filme' : language === 'en' ? 'Generate Movie' : 'Generar Película'
            )}
          </motion.button>
        </form>

        {movie && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">
              {language === 'pt' ? 'Seu filme é:' : language === 'en' ? 'Your movie is:' : 'Tu película es:'}
            </h2>
            <p className="text-3xl font-bold text-blue-500">{movie}</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
