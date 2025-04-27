import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 pt-16 pb-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              Hisham Alkaed
            </h2>
            <p className="text-slate-400 max-w-sm">
              Data Scientist and AI Engineer specializing in NLP and knowledge graphs. 
              Turning complex data into actionable insights.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/hishamalkaed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/hisham-alkaed-898634196/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:hishamalkaed@outlook.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Mail size={18} />
              </a>
            </div>
            
            <a
              href="https://github.com/HishamAlkaed/HishamAlkaed.github.io/raw/main/cv2025.pdf"
              download
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hisham Alkaed. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <span className="mr-2 text-sm">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;