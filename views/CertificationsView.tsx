import React from 'react';
import { Icon } from '../components/Icon';
import { CERTIFICATIONS } from '../constants';

export const CertificationsView: React.FC = () => {
  return (
    <div className="p-6 md:p-12 h-full overflow-y-auto">
       <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
           
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
                          <div className={`p-3 rounded-full text-vscode-bg border border-vscode-activity group-hover:scale-110 transition-transform ${
                            cert.issuer.includes('Google') ? 'bg-blue-100 text-blue-600' :
                            cert.issuer.includes('Amazon') ? 'bg-orange-100 text-orange-600' :
                            cert.issuer.includes('Microsoft') ? 'bg-blue-100 text-blue-500' :
                            cert.issuer.includes('IBM') ? 'bg-indigo-100 text-indigo-600' :
                            cert.issuer.includes('Meta') ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                              <Icon name="certificate" className="w-6 h-6" />
                          </div>
                          <div>
                              <div className="text-xs font-mono text-vscode-blue mb-1">{cert.issuer}</div>
                              <h3 className="text-white font-bold text-sm md:text-base leading-tight">
                                  {cert.name}
                              </h3>
                          </div>
                      </div>

                      <div className="flex-grow z-10 space-y-3">
                          <div className="flex flex-col text-xs text-gray-500 font-mono gap-1">
                              <span>Emitido: {cert.date}</span>
                              <span className="flex items-center gap-1">
                                  ID: <span className="text-gray-400 select-all">{cert.credentialId}</span>
                              </span>
                          </div>

                          {cert.competencies && (
                              <div className="pt-2">
                                  <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Competências</div>
                                  <div className="text-xs text-gray-300 bg-vscode-bg/50 p-2 rounded border border-vscode-activity/50">
                                    {cert.competencies}
                                  </div>
                              </div>
                          )}
                      </div>

                      <div className="pt-4 border-t border-vscode-activity mt-4 flex justify-between items-center z-10">
                          {cert.url ? (
                            <a 
                              href={cert.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-vscode-accent hover:text-white flex items-center gap-1 transition-colors px-3 py-1.5 rounded hover:bg-vscode-accent/20"
                            >
                              Exibir credencial <Icon name="external" className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-xs text-gray-600 cursor-not-allowed">
                                Link indisponível
                            </span>
                          )}
                      </div>
                  </div>
              ))}
           </div>
           
           <div className="mt-8 text-center pb-8">
             <div className="inline-block px-4 py-2 bg-vscode-activity/30 rounded text-xs text-gray-500 font-mono">
                 Todas as certificações podem ser validadas através do ID ou link oficial.
             </div>
           </div>
       </div>
    </div>
  );
};