import React, { useState, useEffect, useCallback } from 'react';
import { GitHubRepo } from '../types';
import { fetchRepos } from '../services/githubService';
import { Icon } from './Icon';

export const ProjectCarousel: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const loadRepos = async () => {
      setIsLoading(true);
      const data = await fetchRepos();
      setRepos(data);
      setIsLoading(false);
    };
    loadRepos();
  }, []);

  useEffect(() => {
    if (isLoading || repos.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % repos.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [isLoading, repos.length, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % repos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + repos.length) % repos.length);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 border border-vscode-activity bg-vscode-sidebar rounded-md animate-pulse">
        <span className="text-vscode-text font-mono">Loading repositories...</span>
      </div>
    );
  }

  if (repos.length === 0) {
    return <div className="text-vscode-text">No repositories found.</div>;
  }

  const currentRepo = repos[currentIndex];

  return (
    <div 
      className="relative group border border-vscode-activity bg-vscode-sidebar rounded-lg p-6 shadow-xl transition-all hover:border-vscode-accent"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header of Card */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <Icon name="code" className="text-vscode-blue w-6 h-6" />
          <h3 className="text-xl font-bold text-vscode-green font-mono truncate max-w-[200px] md:max-w-xs">
            {currentRepo.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
          <span>{new Date(currentRepo.updated_at).toLocaleDateString('pt-BR')}</span>
        </div>
      </div>

      {/* Description */}
      <div className="h-24 overflow-hidden mb-6 relative">
        <p className="text-gray-400 font-sans text-sm leading-relaxed">
          {currentRepo.description || "Sem descrição disponível."}
        </p>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-vscode-sidebar to-transparent"></div>
      </div>

      {/* Footer / Tech Stack */}
      <div className="flex justify-between items-center border-t border-vscode-activity pt-4">
        <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-vscode-yellow"></span>
            <span className="text-sm font-mono text-gray-300">
                {currentRepo.language || 'Code'}
            </span>
        </div>

        <a 
          href={currentRepo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-vscode-accent hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
        >
          View Repo <Icon name="external" className="w-4 h-4" />
        </a>
      </div>

      {/* Carousel Controls (visible on hover) */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-vscode-activity p-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[-50%] transition-all z-10 hover:bg-vscode-accent"
        aria-label="Previous Project"
      >
        ←
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-vscode-activity p-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[50%] transition-all z-10 hover:bg-vscode-accent"
         aria-label="Next Project"
      >
        →
      </button>

      {/* Pagination Indicators */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {repos.slice(0, Math.min(repos.length, 5)).map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1 rounded-full transition-all ${idx === (currentIndex % 5) ? 'w-6 bg-vscode-accent' : 'w-2 bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  );
};
