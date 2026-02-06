import React, { useState, useEffect } from 'react';
import { HERO_TEXT, SOCIAL_LINKS, CONTACT_INFO } from '../constants';
import { Icon } from '../components/Icon';

export const HomeView: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = HERO_TEXT;
  const [breakpoints, setBreakpoints] = useState<number[]>([]);
  
  // Typewriter effect logic
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 40); // typing speed
    return () => clearInterval(timer);
  }, [fullText]);

  const handleInstantiate = () => {
    console.log("System: Developer instantiated successfully.");
    alert("System: New Developer instance created! Ready to code.");
  };

  const toggleBreakpoint = (line: number) => {
    setBreakpoints(prev => 
      prev.includes(line) ? prev.filter(l => l !== line) : [...prev, line]
    );
  };

  return (
    <div className="min-h-full w-full relative flex flex-col justify-center py-8 md:py-0">
      {/* Background Aurora */}
      <div className="aurora-bg fixed inset-0"></div>

      {/* Floating Blobs for decoration */}
      <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-vscode-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-blob pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 pointer-events-none"></div>

      {/* Main Container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center z-10 animate-fadeIn">
        
        {/* Left Column: Text (VS Code Editor Style) */}
        <div className="order-2 lg:order-1 relative flex flex-col justify-center w-full">
           
           {/* Code Editor Container */}
           <div className="bg-vscode-bg/80 backdrop-blur-md border border-vscode-activity rounded-lg overflow-hidden shadow-2xl mb-8 transform transition-all hover:border-vscode-accent/50 hover:shadow-vscode-accent/10 w-full mx-auto">
              
              {/* Tab Header inside snippet */}
              <div className="bg-vscode-sidebar px-4 py-2 border-b border-vscode-activity flex items-center gap-2 text-xs">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <span className="ml-3 text-gray-400 font-mono text-xs opacity-70">hero_section.ts</span>
              </div>

              <div className="flex p-4 md:p-6 font-mono text-sm md:text-base overflow-x-auto custom-scrollbar">
                 {/* Gutter / Line Numbers */}
                 <div className="flex flex-col text-right pr-4 border-r border-vscode-activity select-none text-vscode-comment mr-4">
                    {[1, 2, 3, 4, 5, 6].map(num => (
                       <div 
                         key={num} 
                         className="h-8 leading-8 cursor-pointer hover:text-gray-300 relative group"
                         onClick={() => toggleBreakpoint(num)}
                       >
                         <span className="opacity-50 group-hover:opacity-100 transition-opacity">{num}</span>
                         {breakpoints.includes(num) && (
                            <span className="absolute top-2.5 right-[-24px] w-3 h-3 bg-red-500 rounded-full shadow-lg z-20"></span>
                         )}
                       </div>
                    ))}
                 </div>

                 {/* Code Content */}
                 <div className="flex-1 whitespace-pre font-medium">
                    <div className="h-8 leading-8">
                       <span className="text-vscode-purple">const</span> <span className="text-vscode-blue">developer</span> = <span className="text-vscode-yellow">new</span> <span className="text-vscode-green cursor-pointer hover:underline decoration-dashed" onClick={handleInstantiate}>Developer</span>();
                    </div>
                    <div className="h-8 leading-8">
                       <span className="text-vscode-blue">developer</span>.<span className="text-vscode-yellow">setName</span>(<span className="text-vscode-orange">"Adriano Camargo"</span>);
                    </div>
                    <div className="h-8 leading-8">
                       <span className="text-vscode-blue">developer</span>.<span className="text-vscode-yellow">setRole</span>(<span className="text-vscode-orange">"Fullstack & Automation"</span>);
                    </div>
                    <div className="h-8 leading-8"></div>
                    <div className="h-8 leading-8">
                       <span className="text-vscode-comment italic">// Output:</span>
                    </div>
                    <div className="h-auto min-h-[32px] leading-8 text-vscode-text break-words whitespace-normal border-l-2 border-vscode-accent pl-3 ml-1 bg-vscode-accent/5 rounded-r">
                       "{typedText}<span className="animate-cursor text-vscode-accent font-bold">|</span>"
                    </div>
                 </div>
              </div>
           </div>

           {/* Call To Action Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a 
                href={CONTACT_INFO.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-vscode-green hover:bg-emerald-600 text-white px-6 py-4 rounded-lg font-bold shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-1 text-center group"
              >
                  <Icon name="whatsapp" className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Solicitar Orçamento</span>
              </a>
              
              <div className="flex gap-3 justify-center sm:justify-start w-full sm:w-auto">
                  <a
                    href={SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-[#0077b5]/10 hover:bg-[#0077b5] border border-[#0077b5] hover:border-transparent text-[#0077b5] hover:text-white rounded-lg transition-all"
                    title="LinkedIn"
                  >
                    <Icon name="linkedin" className="w-6 h-6" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-white/5 hover:bg-[#333] border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-lg transition-all"
                    title="GitHub"
                  >
                    <Icon name="github" className="w-6 h-6" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.FREELAS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-[#4CAF50]/10 hover:bg-[#4CAF50] border border-[#4CAF50] hover:border-transparent text-[#4CAF50] hover:text-white rounded-lg transition-all"
                    title="99Freelas"
                  >
                    <Icon name="briefcase" className="w-6 h-6" />
                  </a>
              </div>
          </div>

        </div>

        {/* Right Column: Photo */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-center relative mb-8 lg:mb-0">
          <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] transition-all duration-500">
            {/* Glow behind image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-vscode-blue to-vscode-purple rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Image Container - Circular for better centralization */}
            <div className="relative w-full h-full bg-vscode-sidebar rounded-full border-4 border-vscode-sidebar ring-2 ring-vscode-activity overflow-hidden shadow-2xl z-10">
              <img 
                src="1765412322129.png" 
                alt="Adriano Camargo" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  const currentSrc = img.src;
                  if (!currentSrc.includes('github.com')) {
                    img.src = 'https://github.com/Dritcmg.png';
                  } else {
                    img.src = 'https://ui-avatars.com/api/?name=Adriano+Camargo&background=007acc&color=fff&size=512';
                  }
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-vscode-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Floating Status Badge */}
            <div className="absolute bottom-4 right-0 lg:right-6 bg-vscode-sidebar/90 backdrop-blur border border-vscode-activity px-4 py-2 rounded-full shadow-xl flex items-center gap-3 animate-bounce z-20" style={{ animationDuration: '3s' }}>
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 block rounded-full bg-green-500"></span>
                <span className="w-2.5 h-2.5 block rounded-full bg-green-500 absolute animate-ping opacity-75"></span>
              </div>
              <div className="text-xs font-mono font-medium text-white">
                Open to Work
              </div>
            </div>

             {/* Decoration Dots */}
             <div className="absolute -top-6 -left-6 opacity-20 hidden lg:block">
               <div className="grid grid-cols-4 gap-2">
                 {[...Array(16)].map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-vscode-text rounded-full"></div>
                 ))}
               </div>
             </div>
          </div>
        </div>

      </div>
      </div>
      
      {/* Decorative background code */}
      <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none select-none overflow-hidden hidden xl:block text-right">
        <pre className="text-xs text-vscode-comment font-mono">
{`while(coffee.level > 0) {
    code();
    innovate();
    sleep(0);
}`}
        </pre>
      </div>
    </div>
  );
};