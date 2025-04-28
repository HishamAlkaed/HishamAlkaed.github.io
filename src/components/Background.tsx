import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  baseX: number;
  baseY: number;
  baseSize: number;
}

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const isMobileRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if device is mobile
    isMobileRef.current = window.innerWidth <= 768;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      isMobileRef.current = window.innerWidth <= 768;
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobileRef.current) return;
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Touch move handler
    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobileRef.current) return;
      const touch = e.touches[0];
      mouseRef.current = { x: touch.clientX, y: touch.clientY };
    };

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 20));

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, 0.7)`,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          baseSize: Math.random() * 3 + 1
        });
      }
      particlesRef.current = particles;
    };

    // Update particle positions
    const updateParticles = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Calculate distance from mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse interaction
        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - distance) / 150;
          p.x += Math.cos(angle) * force * 5;
          p.y += Math.sin(angle) * force * 5;
        } else {
          // Return to base position
          const dx = p.baseX - p.x;
          const dy = p.baseY - p.y;
          p.x += dx * 0.1;
          p.y += dy * 0.1;
        }

        // Keep particles within canvas bounds
        if (p.x > canvas.width) p.x = 0;
        else if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        else if (p.y < 0) p.y = canvas.height;
      }
    };

    // Draw particles and connections
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      
      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections
      const maxDistance = 150;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      draw();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    updateCanvasSize();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
    />
  );
};

export default Background;
