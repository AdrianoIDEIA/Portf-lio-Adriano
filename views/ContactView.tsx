import React from 'react';
import { Icon } from '../components/Icon';
import { CONTACT_INFO } from '../constants';

export const ContactView: React.FC = () => {
  return (
    <div className="p-6 md:p-12 h-full flex flex-col items-center justify-center animate-fadeIn overflow-y-auto">
       <div className="max-w-2xl w-full">
         
         <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Vamos conversar?</h2>
            <p className="text-gray-400">
              Estou disponível para novos projetos de automação, dados e desenvolvimento.
            </p>
         </div>

         {/* Visual Code Representation */}
         <div className="bg-vscode-sidebar border border-vscode-activity rounded-lg p-6 font-mono text-sm shadow-xl mb-8 relative group">
            <div className="absolute top-3 right-3 flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
            
            <div className="space-y-1">
               <div><span className="text-vscode-purple">.contact-card</span> <span className="text-vscode-yellow">{`{`}</span></div>
               <div className="pl-4">
                  <span className="text-vscode-blue">display</span>: <span className="text-vscode-orange">flex</span>;
               </div>
               <div className="pl-4">
                  <span className="text-vscode-blue">status</span>: <span className="text-vscode-green">"Open for business"</span>;
               </div>
               <div className="pl-4">
                  <span className="text-vscode-blue">response-time</span>: <span className="text-vscode-orange">fast</span>;
               </div>
               <div className="pl-4">
                  <span className="text-vscode-blue">preferred-channels</span>: <span className="text-vscode-text">["WhatsApp", "Email"]</span>;
               </div>
               <div><span className="text-vscode-yellow">{`}`}</span></div>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp / Phone */}
            <a 
              href={CONTACT_INFO.WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-vscode-activity/30 hover:bg-[#25D366]/10 border border-vscode-activity hover:border-[#25D366] p-6 rounded-lg transition-all flex flex-col items-center text-center cursor-pointer"
            >
               <div className="p-4 rounded-full bg-[#25D366]/20 text-[#25D366] mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="whatsapp" className="w-8 h-8" />
               </div>
               <h3 className="text-white font-bold mb-1">WhatsApp / Telefone</h3>
               <p className="text-gray-400 text-sm font-mono mb-4">{CONTACT_INFO.PHONE_FORMATTED}</p>
               <span className="text-vscode-green text-sm flex items-center gap-1 group-hover:underline">
                  Enviar mensagem <Icon name="external" className="w-3 h-3" />
               </span>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${CONTACT_INFO.EMAIL}`}
              className="group bg-vscode-activity/30 hover:bg-vscode-blue/10 border border-vscode-activity hover:border-vscode-blue p-6 rounded-lg transition-all flex flex-col items-center text-center cursor-pointer"
            >
               <div className="p-4 rounded-full bg-vscode-blue/20 text-vscode-blue mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="mail" className="w-8 h-8" />
               </div>
               <h3 className="text-white font-bold mb-1">E-mail</h3>
               <p className="text-gray-400 text-sm font-mono mb-4 break-all">{CONTACT_INFO.EMAIL}</p>
               <span className="text-vscode-blue text-sm flex items-center gap-1 group-hover:underline">
                  Enviar e-mail <Icon name="external" className="w-3 h-3" />
               </span>
            </a>
         </div>

       </div>
    </div>
  );
};