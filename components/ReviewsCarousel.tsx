import React, { useState, useEffect } from 'react';
import { FreelanceProject } from '../types';
import { FREELANCE_PROJECTS } from '../constants';
import { Icon } from './Icon';

export const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FREELANCE_PROJECTS.length);
    }, 5000); // 5 seconds per slide for reading reviews

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FREELANCE_PROJECTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FREELANCE_PROJECTS.length) % FREELANCE_PROJECTS.length);
  };

  const currentProject = FREELANCE_PROJECTS[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Icon 
        key={i} 
        name="star" 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <div 
      className="relative group border border-vscode-activity bg-vscode-sidebar rounded-lg p-6 shadow-xl transition-all hover:border-vscode-yellow h-full flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <div>
            <div className="flex items-center gap-1 mb-1">
                {renderStars(currentProject.stars)}
                <span className="text-xs text-gray-400 ml-2 font-mono">{currentProject.stars.toFixed(1)}</span>
            </div>
            <h3 className="text-lg font-bold text-vscode-blue font-sans leading-tight">
            {currentProject.title}
            </h3>
        </div>
      </div>

      {/* Review Text */}
      <div className="flex-grow py-4 relative">
        <Icon name="quote" className="absolute -top-2 -left-2 w-6 h-6 text-vscode-activity opacity-50" />
        <p className="text-gray-300 font-serif italic text-sm md:text-base pl-4 border-l-2 border-vscode-activity">
          "{currentProject.review}"
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-vscode-activity pt-4 mt-2">
        <span className="text-xs font-mono text-gray-500 bg-vscode-bg px-2 py-1 rounded">
            Freelance
        </span>
        <span className="text-xs font-mono text-gray-500">
            {currentProject.date}
        </span>
      </div>

      {/* Carousel Controls */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-vscode-activity p-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[-50%] transition-all z-10 hover:bg-vscode-accent shadow-lg text-white"
        aria-label="Previous Review"
      >
        ←
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-vscode-activity p-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[50%] transition-all z-10 hover:bg-vscode-accent shadow-lg text-white"
         aria-label="Next Review"
      >
        →
      </button>

      {/* Pagination Indicators */}
      <div className="absolute top-2 right-2 flex gap-1">
        {FREELANCE_PROJECTS.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-vscode-yellow' : 'bg-gray-700'}`}
          />
        ))}
      </div>
    </div>
  );
};
