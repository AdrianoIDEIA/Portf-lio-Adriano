import React from 'react';
import { TabId } from '../types';
import { Icon } from '../components/Icon';

interface HomeViewProps {
  onNavigate: (tab: TabId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  
  return (
    <div className="min-h-full w-full flex flex-col items-center justify-center p-8 animate-fadeIn relative overflow-hidden">
      {/* Background Aurora - Subtle */}
      <div className="aurora-bg fixed inset-0 opacity-30"></div>

      <div className="max-w-4xl w-full z-10">
        
        {/* Hero Section - Clean & Centered */}
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
             <div className="w-24 h-24 mx-auto bg-vscode-sidebar rounded-full border-4 border-vscode-activity shadow-2xl overflow-hidden relative group cursor-pointer" onClick={() => onNavigate(TabId.ABOUT)}>
                <img 
                  src="https://github.com/Dritcmg.png" 
                  alt="Adriano Camargo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
             </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Adriano Camargo
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Fullstack Development & Automation Solutions
          </p>
        </div>

        {/* Quick Actions / "Start" Section - Google Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Team Update (Highlighted) */}
          <div 
            onClick={() => onNavigate(TabId.TEAM)}
            className="bg-vscode-sidebar border border-vscode-activity hover:border-vscode-accent/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-vscode-accent/5 group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                <Icon name="globe" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">New Team Structure</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              We've expanded! Dedicated specialists for Frontend, Backend, and Integrations are now available.
            </p>
            <div className="text-purple-400 text-sm font-medium flex items-center gap-1 group-hover:underline">
              Check "team.json" tab <span className="text-xs">→</span>
            </div>
          </div>

          {/* Card 2: Projects */}
          <div 
            onClick={() => onNavigate(TabId.PROJECTS)}
            className="bg-vscode-sidebar border border-vscode-activity hover:border-vscode-accent/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-vscode-accent/5 group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                <Icon name="code" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">Recent Projects</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Explore my latest work in automation, data dashboards, and fullstack applications.
            </p>
            <div className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:underline">
              Check "repos.json" tab <span className="text-xs">→</span>
            </div>
          </div>

        </div>

        {/* Recent / Walkthroughs Section */}
        <div className="border-t border-vscode-activity pt-8">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Recent Activity</h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 hover:bg-vscode-activity/50 rounded-lg transition-colors cursor-default group">
              <div className="flex items-center gap-3">
                <Icon name="check" className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 group-hover:text-white">System Upgrade: Team Expansion</span>
              </div>
              <span className="text-xs text-gray-500">Today</span>
            </div>
            
            <div className="flex items-center justify-between p-3 hover:bg-vscode-activity/50 rounded-lg transition-colors cursor-default group">
              <div className="flex items-center gap-3">
                <Icon name="check" className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 group-hover:text-white">Portfolio v2.0 Deployed</span>
              </div>
              <span className="text-xs text-gray-500">Yesterday</span>
            </div>

            <div className="flex items-center justify-between p-3 hover:bg-vscode-activity/50 rounded-lg transition-colors cursor-default group">
              <div className="flex items-center gap-3">
                <Icon name="check" className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 group-hover:text-white">N8N Integration Module Completed</span>
              </div>
              <span className="text-xs text-gray-500">2 days ago</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
