import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();

    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 20));

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Gradient colors: cyan, blue, purple
        const colors = ['rgba(8, 145, 178, 0.7)', 'rgba(59, 130, 246, 0.7)', 'rgba(124, 58, 237, 0.7)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      if (!ctx) return;
      const maxDistance = 150;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      ></canvas>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-slate-900/30 p-8 rounded-xl border border-slate-800/50">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Hisham Alkaed
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-slate-300">
            Data Scientist | AI & NLP Engineer
          </h2>
          
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Transforming complex data challenges into innovative AI solutions. 
            Specializing in machine learning, natural language processing, and knowledge graphs.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/hishamalkaed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-lg"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/hishamalkaed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-lg"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hisham.alkaed@example.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-lg"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-medium tracking-wide transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-500 hover:text-slate-300 transition-colors duration-300 animate-bounce z-10"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
};

export default Hero;