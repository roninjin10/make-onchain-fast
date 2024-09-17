import { motion } from 'framer-motion';
import { ExternalLink, Mail, Github, Coffee } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { copy } from '@/copy';

export const Footer = () => (
  <footer className="bg-gray-800 text-white py-12 relative">
    <div className="max-w-4xl mx-auto text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 font-serif"
      >
        {copy.footerTitle}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 text-lg font-light"
      >
        {copy.footerSubtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center space-x-6 mb-8"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href="#" className="hover:text-blue-300 transition-colors"><ExternalLink size={32} /></a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copy.websiteTooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href="#" className="hover:text-blue-300 transition-colors"><Mail size={32} /></a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copy.websiteTooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href="#" className="hover:text-blue-300 transition-colors"><Github size={32} /></a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copy.githubTooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Coffee size={32} className="text-yellow-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{copy.coffeeTooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-sm text-gray-400"
      >
        {copy.copyrightText}
      </motion.p>
    </div>
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-900"></path>
      </svg>
    </div>
  </footer>
);
