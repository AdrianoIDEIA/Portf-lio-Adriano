import React from 'react';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { Icon } from '../components/Icon';

export const ProjectsView: React.FC = () => {
  return (
    <div className="p-6 md:p-12 h-full overflow-y-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-10">
           <h2 className="text-2xl font-mono text-vscode-text mb-2">
             <span className="text-vscode-purple">import</span> portfolio <span className="text-vscode-purple">from</span> <span className="text-vscode-orange">'./work'</span>;
           </h2>
           <p className="text-gray-500 text-sm">Open Source & Histórico de Freelance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* GitHub Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2 px-1">
                    <Icon name="github" className="w-5 h-5 text-vscode-text" />
                    <h3 className="text-vscode-blue font-bold">GitHub Activity</h3>
                </div>
                <div className="flex-1 min-h-[300px]">
                    <ProjectCarousel />
                </div>
            </div>

            {/* Freelance Reviews Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2 px-1">
                    <Icon name="briefcase" className="w-5 h-5 text-vscode-text" />
                    <h3 className="text-vscode-yellow font-bold">Freelance Reviews</h3>
                </div>
                <div className="flex-1 min-h-[300px]">
                    <ReviewsCarousel />
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-center w-full">
            <div className="bg-vscode-activity/20 p-4 rounded border border-transparent hover:border-vscode-activity transition-colors group">
                <h3 className="text-vscode-blue font-bold text-lg mb-1 group-hover:scale-110 transition-transform">100%</h3>
                <p className="text-xs text-gray-400">Sucesso em Entregas</p>
            </div>
            <div className="bg-vscode-activity/20 p-4 rounded border border-transparent hover:border-vscode-activity transition-colors group">
                <h3 className="text-vscode-green font-bold text-lg mb-1 group-hover:scale-110 transition-transform">5.0</h3>
                <p className="text-xs text-gray-400">Avaliação Média</p>
            </div>
            <div className="bg-vscode-activity/20 p-4 rounded border border-transparent hover:border-vscode-activity transition-colors group">
                <h3 className="text-vscode-orange font-bold text-lg mb-1 group-hover:scale-110 transition-transform">ROI</h3>
                <p className="text-xs text-gray-400">Foco em Resultado</p>
            </div>
             <div className="bg-vscode-activity/20 p-4 rounded border border-transparent hover:border-vscode-activity transition-colors group">
                <h3 className="text-vscode-purple font-bold text-lg mb-1 group-hover:scale-110 transition-transform">Fullstack</h3>
                <p className="text-xs text-gray-400">Web & Automation</p>
            </div>
        </div>

      </div>
    </div>
  );
};
