// StatsCarousel.tsx - Composant de carrousel pour les statistiques en version mobile
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
//import StatCard, { StatCardProps } from './StatCard';
import StatCard, { StatCardProps }  from './StatsCard';

type StatsCarouselProps = {
  stats: StatCardProps[];
};

const StatsCarousel: React.FC<StatsCarouselProps> = ({ stats }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Navigation du carrousel
  const goToSlide = (index: number) => {
    if (index < 0) {
      setCurrentSlide(stats.length - 1);
    } else if (index >= stats.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };
  
  // Effet pour faire défiler le carrousel
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentSlide * carouselRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <div className="relative">
      <div 
        ref={carouselRef}
        className="flex overflow-hidden snap-x snap-mandatory scroll-smooth"
      >
        {stats.map((stat, index) => (
          <div key={index} className="w-full flex-shrink-0 snap-center px-1">
            <StatCard 
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              barColor={stat.barColor}
              period={stat.period}
            />
          </div>
        ))}
      </div>
      
      {/* Boutons de navigation */}
      <button 
        onClick={() => goToSlide(currentSlide - 1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-1 shadow-md"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={() => goToSlide(currentSlide + 1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-1 shadow-md"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Indicateurs de pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {stats.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsCarousel;