import React from 'react';
import { Icon } from '../components/Icon';
import { CERTIFICATIONS } from '../constants';

export const CertificationsView: React.FC = () => {
  return (
    <div className="p-6 md:p-12 h-full overflow-y-auto">
       <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
           
           <div className="border-b border-gray-700 pb-4 mb-8">
               <h1 className="text-2xl font-mono text-white mb-2">
                   <span className="text-vscode-purple">import</span> certifications <span className="text-vscode-purple">from</span> <span className="text-vscode-green">'./google-microsoft-ibm'</span>;
               </h1>
               <p className="text-gray-400 text-sm font-mono">
                   // Total Credentials: {CERTIFICATIONS.length}
               </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                  <div key={index} className="bg-vscode-sidebar p-5 rounded-lg border border-vscode-activity hover:border-vscode-green transition-all group flex flex-col h-full shadow-lg relative overflow-hidden">
                      
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-vscode-activity/20 to-transparent rounded-bl-3xl -mr-4 -mt-4 transition-all group-hover:from-vscode-green/10"></div>

                      <div className="flex items-start gap-4 mb-4 z-10">
                          <div className="p-3 bg-vscode-bg rounded-full text-vscode-green border border-vscode-activity group-hover:scale-110 transition-transform">
                              <Icon name="certificate" className="w-6 h-6" />
                          </div>
                          <div>
                              <div className="text-xs font-mono text-vscode-blue mb-1">{cert.issuer}</div>
                              <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                                  {cert.name}
                              </h3>
                          </div>
                      </div>

                      <div className="flex-grow z-10">
                          {cert.competencies && (
                              <div className="mb-4">
                                  <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Competencies</div>
                                  <div className="text-xs text-gray-400 bg-vscode-bg/50 p-2 rounded border border-vscode-activity/50">
                                    {cert.competencies}
                                  </div>
                              </div>
                          )}
                      </div>

                      <div className="pt-4 border-t border-vscode-activity mt-auto flex justify-between items-center text-xs text-gray-500 font-mono z-10">
                          <span>{cert.date}</span>
                          <span className="flex items-center gap-1">
                              ID: {cert.credentialId}
                          </span>
                      </div>
                  </div>
              ))}
           </div>
           
           <div className="mt-8 text-center">
             <div className="inline-block px-4 py-2 bg-vscode-activity/30 rounded text-xs text-gray-500 font-mono">
                 All certifications are verified and can be validated via credential ID.
             </div>
           </div>
       </div>
    </div>
  );
};