import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const rotateX = isMobile ? 0 : ((mousePosition.y - 150) / 45) * -1;
  const rotateY = isMobile ? 0 : ((mousePosition.x - 150) / 45);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${
        isHovered && !isMobile ? 'scale-[1.02] shadow-xl' : 'scale-100 shadow-lg'
      } ${className}`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transform: isMobile 
          ? 'none'
          : isHovered 
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
            : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
        transition: isMobile ? 'none' : 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard; 