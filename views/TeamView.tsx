import React from 'react';
import { Icon } from '../components/Icon';

export const TeamView: React.FC = () => {
  const roles = [
    {
      title: "Frontend Engineering",
      icon: "layout",
      description: "Crafting responsive, accessible, and performant user interfaces using modern frameworks like React and Tailwind CSS.",
      skills: ["React", "TypeScript", "Tailwind", "UX/UI"]
    },
    {
      title: "Backend Systems",
      icon: "server",
      description: "Building robust server-side logic, managing databases, and ensuring security and scalability for applications.",
      skills: ["Node.js", "Python", "SQL/NoSQL", "API Design"]
    },
    {
      title: "Project Scoping",
      icon: "file-text", // Using a generic icon name, will map to Icon component
      description: "Defining clear requirements, architectural planning, and roadmap development to ensure project success.",
      skills: ["Architecture", "Planning", "Agile", "Documentation"]
    },
    {
      title: "API Integrations",
      icon: "globe",
      description: "Seamlessly connecting services using N8N, REST/GraphQL APIs, and custom automation workflows.",
      skills: ["N8N", "REST", "GraphQL", "Webhooks"]
    }
  ];

  return (
    <div className="min-h-full w-full p-8 md:p-12 animate-fadeIn overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Team Structure
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            We have expanded our capabilities to provide specialized focus in every key area of development. 
            From pixel-perfect frontends to robust backend systems.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="group bg-vscode-sidebar border border-vscode-activity rounded-xl p-6 hover:border-vscode-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-vscode-accent/5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-vscode-activity rounded-lg text-vscode-accent group-hover:bg-vscode-accent group-hover:text-white transition-colors">
                  <Icon name={role.icon} className="w-6 h-6" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-500 font-mono border border-gray-700 rounded px-2 py-1">
                  Active
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-vscode-accent transition-colors">
                {role.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {role.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-vscode-bg border border-vscode-activity text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status Bar / Info */}
        <div className="mt-12 pt-8 border-t border-vscode-activity flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>All systems operational</span>
          </div>
          <div className="font-mono">
            Team Capacity: <span className="text-vscode-accent">100%</span>
          </div>
        </div>

      </div>
    </div>
  );
};
