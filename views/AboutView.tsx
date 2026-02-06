import React from 'react';
import { Icon } from '../components/Icon';

export const AboutView: React.FC = () => {
  const skills = [
    "Arquitetura de Software", "Automação (RPA)", "Business Intelligence", 
    "Consultoria de Negócios", "Python", "Power BI", "Node.js", "React",
    "PostgreSQL", "Data Science", "AI Integration", "SQL Server"
  ];

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto overflow-y-auto h-full font-mono text-sm md:text-base">
      <div className="space-y-12 animate-fadeIn pb-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
           <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
                Adriano Camargo<span className="text-vscode-accent">.</span>
              </h1>
              <p className="text-vscode-blue font-semibold mb-4 text-lg">
                Especialista em Implementação Tech & Eficiência
              </p>
              
              <div className="inline-flex flex-wrap gap-2 text-xs bg-vscode-activity/20 p-2 rounded-lg border border-vscode-activity">
                 <span className="px-2 py-1 rounded bg-vscode-green/10 text-vscode-green flex items-center gap-1">
                    <Icon name="briefcase" className="w-3 h-3" /> Freelancer Premium
                 </span>
                 <span className="px-2 py-1 rounded bg-vscode-blue/10 text-vscode-blue">
                    Identidade Verificada
                 </span>
                 <span className="px-2 py-1 rounded bg-vscode-yellow/10 text-vscode-yellow">
                    ★★★★★ (4.93)
                 </span>
              </div>
           </div>
           
           <div className="w-full md:w-auto bg-vscode-sidebar p-4 rounded-lg border-l-4 border-vscode-purple shadow-lg max-w-md">
              <p className="text-gray-300 italic text-sm leading-relaxed">
                "Tecnologia sem resultado é apenas gasto. Eu foco no que traz <strong className="text-vscode-orange">ROI</strong> e transforma ineficiência em lucro."
              </p>
           </div>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
               <h2 className="flex items-center gap-2 text-xl font-bold text-white border-b border-gray-700 pb-2">
                  <span className="text-vscode-purple">#</span> Sobre mim
               </h2>
               <p className="text-gray-400 leading-relaxed">
                 Minha trajetória une 5 anos de atuação estratégica em campo com base em Marketing e Tecnologia. Não entrego apenas código; entrego soluções que funcionam no mundo real.
               </p>
            </div>
            
             <div className="bg-vscode-bg border border-vscode-activity rounded-lg p-1 font-mono text-xs overflow-hidden shadow-inner">
                <div className="flex bg-vscode-sidebar px-2 py-1 border-b border-vscode-activity mb-2">
                   <span className="text-gray-500">experience.json</span>
                </div>
                <div className="p-2 space-y-1">
                   <div className="flex gap-2"><span className="text-gray-600 select-none">1</span> <span className="text-vscode-purple">const</span> <span className="text-vscode-blue">diferenciais</span> = [</div>
                   <div className="flex gap-2"><span className="text-gray-600 select-none">2</span> &nbsp;&nbsp;<span className="text-vscode-orange">'Visão de Dono (Intraprededorismo)'</span>,</div>
                   <div className="flex gap-2"><span className="text-gray-600 select-none">3</span> &nbsp;&nbsp;<span className="text-vscode-orange">'Análise de Dados para Lucratividade'</span>,</div>
                   <div className="flex gap-2"><span className="text-gray-600 select-none">4</span> &nbsp;&nbsp;<span className="text-vscode-orange">'Implementação de IA & Machine Learning'</span></div>
                   <div className="flex gap-2"><span className="text-gray-600 select-none">5</span> ];</div>
                </div>
             </div>
        </div>

        {/* Skills Grid */}
        <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                <span className="text-vscode-yellow">##</span> Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-vscode-sidebar hover:bg-vscode-activity p-3 rounded border border-vscode-activity hover:border-vscode-blue transition-all cursor-default group">
                        <span className="text-vscode-purple opacity-50 text-xs mr-2 group-hover:opacity-100">&lt;/&gt;</span>
                        <span className="text-gray-300 group-hover:text-white">{skill}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Impact Stats */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
              <span className="text-vscode-blue">##</span> Impacto Real
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-vscode-sidebar to-vscode-bg p-6 rounded-xl border border-vscode-activity relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon name="briefcase" className="w-12 h-12" />
               </div>
               <h3 className="text-3xl font-bold text-vscode-green mb-1">27%</h3>
               <p className="text-sm font-bold text-white mb-2">Recuperação de Receita</p>
               <p className="text-xs text-gray-500">Reverti perdas através de auditoria e otimização de dados.</p>
            </div>

            <div className="bg-gradient-to-br from-vscode-sidebar to-vscode-bg p-6 rounded-xl border border-vscode-activity relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon name="code" className="w-12 h-12" />
               </div>
               <h3 className="text-3xl font-bold text-vscode-blue mb-1">15%</h3>
               <p className="text-sm font-bold text-white mb-2">Eficiência Operacional</p>
               <p className="text-xs text-gray-500">Automações que elevaram a produtividade da equipe.</p>
            </div>

            <div className="bg-gradient-to-br from-vscode-sidebar to-vscode-bg p-6 rounded-xl border border-vscode-activity relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon name="branch" className="w-12 h-12" />
               </div>
               <h3 className="text-3xl font-bold text-vscode-purple mb-1">∞</h3>
               <p className="text-sm font-bold text-white mb-2">Escalabilidade</p>
               <p className="text-xs text-gray-500">Arquitetura robusta preparada para crescimento exponencial.</p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="bg-vscode-sidebar rounded-xl p-6 border border-vscode-activity">
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="text-vscode-orange">##</span> Como posso ajudar?
          </h2>
          <div className="space-y-4">
             <div className="flex items-start gap-3">
                <div className="min-w-[24px] pt-1 text-vscode-green">➜</div>
                <div>
                   <h3 className="text-white font-bold">Automação e RPA</h3>
                   <p className="text-gray-400 text-sm">Transformo rotinas manuais de 4 horas em processos automáticos de 15 minutos usando Python e n8n.</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <div className="min-w-[24px] pt-1 text-vscode-blue">➜</div>
                <div>
                   <h3 className="text-white font-bold">Sistemas Sob Medida</h3>
                   <p className="text-gray-400 text-sm">Desenvolvimento Full-Stack focado em operações críticas e gestão financeira.</p>
                </div>
             </div>
             <div className="flex items-start gap-3">
                <div className="min-w-[24px] pt-1 text-vscode-purple">➜</div>
                <div>
                   <h3 className="text-white font-bold">Inteligência de Dados</h3>
                   <p className="text-gray-400 text-sm">Dashboards (BI) que revelam os KPIs reais para decisões rápidas.</p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};