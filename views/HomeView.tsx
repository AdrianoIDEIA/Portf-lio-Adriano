import React, { useState, useEffect } from 'react';
import { HERO_TEXT, SOCIAL_LINKS } from '../constants';
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
    <div className="h-full relative overflow-hidden flex items-center">
      {/* Background Aurora */}
      <div className="aurora-bg"></div>

      {/* Floating Blobs for decoration */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-vscode-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

      <div className="p-6 md:p-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 animate-fadeIn">
        
        {/* Left Column: Text (VS Code Editor Style) */}
        <div className="order-2 lg:order-1 relative">
           
           {/* Code Editor Container */}
           <div className="bg-vscode-bg/50 backdrop-blur-sm border border-vscode-activity rounded-lg overflow-hidden shadow-2xl">
              
              {/* Tab Header inside snippet */}
              <div className="bg-vscode-sidebar px-4 py-2 border-b border-vscode-activity flex items-center gap-2 text-xs">
                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                <span className="ml-2 text-gray-400">hero_section.ts</span>
              </div>

              <div className="flex p-4 font-mono text-sm md:text-base overflow-x-auto">
                 {/* Gutter / Line Numbers */}
                 <div className="flex flex-col text-right pr-4 border-r border-vscode-activity select-none text-gray-600 mr-4">
                    {[1, 2, 3, 4, 5, 6].map(num => (
                       <div 
                         key={num} 
                         className="h-8 leading-8 cursor-pointer hover:text-gray-400 relative group"
                         onClick={() => toggleBreakpoint(num)}
                       >
                         <span className="opacity-50 group-hover:opacity-100 transition-opacity">{num}</span>
                         {breakpoints.includes(num) && (
                            <span className="absolute top-2.5 right-[-22px] w-3 h-3 bg-red-500 rounded-full shadow-lg z-20"></span>
                         )}
                       </div>
                    ))}
                 </div>

                 {/* Code Content */}
                 <div className="flex-1 whitespace-pre">
                    <div className="h-8 leading-8">
                       <span className="text-vscode-purple">const</span> <span className="text-vscode-blue">developer</span> = <span className="text-vscode-yellow">new</span> <span className="text-vscode-green cursor-pointer hover:underline" onClick={handleInstantiate}>Developer</span>();
                    </div>
                    <div className="h-8 leading-8">
                       <span className="text-vscode-blue">developer</span>.<span className="text-vscode-yellow">setName</span>(<span className="text-vscode-orange">"Adriano Camargo"</span>);
                    </div>
                    <div className="h-8 leading-8">
                       <span className="text-vscode-blue">developer</span>.<span className="text-vscode-yellow">setRole</span>(<span className="text-vscode-orange">"Fullstack & Automation"</span>);
                    </div>
                    <div className="h-8 leading-8"></div>
                    <div className="h-8 leading-8">
                       <span className="text-gray-500">// Output:</span>
                    </div>
                    <div className="h-auto leading-8 text-gray-300 break-words whitespace-normal border-l-2 border-vscode-accent pl-2 ml-1">
                       "{typedText}<span className="animate-cursor text-vscode-accent">|</span>"
                    </div>
                 </div>
              </div>
           </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0077b5]/10 hover:bg-[#0077b5] border border-[#0077b5] hover:border-transparent text-[#0077b5] hover:text-white px-6 py-3 rounded-full font-medium transition-all transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#0077b5]/30"
            >
              <Icon name="linkedin" className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-[#333] border border-gray-600 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition-all transform hover:translate-y-[-2px]"
            >
              <Icon name="github" className="w-5 h-5" /> GitHub
            </a>
            <a
              href={SOCIAL_LINKS.FREELAS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#4CAF50]/10 hover:bg-[#4CAF50] border border-[#4CAF50] hover:border-transparent text-[#4CAF50] hover:text-white px-6 py-3 rounded-full font-medium transition-all transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#4CAF50]/30"
            >
              <Icon name="briefcase" className="w-5 h-5" /> 99Freelas
            </a>
          </div>
        </div>

        {/* Right Column: Photo */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative group">
            {/* Glow behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-vscode-blue to-vscode-purple rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-vscode-sidebar rounded-2xl border border-vscode-activity overflow-hidden shadow-2xl">
              <img 
                src="1765412322129.png" 
                alt="Adriano Camargo" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  const currentSrc = img.src;

                  // 1. First fallback: GitHub Profile Picture (high quality, reliable)
                  if (!currentSrc.includes('github.com')) {
                    img.src = 'https://github.com/Dritcmg.png';
                  } 
                  // 2. Second fallback: UI Avatar (guaranteed to work)
                  else {
                    img.src = 'https://ui-avatars.com/api/?name=Adriano+Camargo&background=007acc&color=fff&size=512';
                  }
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating Status Badge */}
            <div className="absolute -bottom-6 -right-6 bg-vscode-sidebar border border-vscode-activity p-3 rounded-lg shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="relative">
                <span className="w-3 h-3 block rounded-full bg-green-500"></span>
                <span className="w-3 h-3 block rounded-full bg-green-500 absolute top-0 left-0 animate-ping"></span>
              </div>
              <div className="text-xs font-mono">
                <p className="text-gray-400">Status:</p>
                <p className="text-white font-bold">Open to Work</p>
              </div>
            </div>

             {/* Decoration Dots */}
             <div className="absolute -top-4 -left-4 w-20 h-20 opacity-20">
               <div className="grid grid-cols-4 gap-2">
                 {[...Array(16)].map((_, i) => (
                   <div key={i} className="w-1 h-1 bg-vscode-text rounded-full"></div>
                 ))}
               </div>
             </div>
          </div>
        </div>

      </div>
      
      {/* Decorative background code */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none overflow-hidden hidden lg:block text-right pr-4 pb-4">
        <pre className="text-xs text-vscode-text font-mono">
{`while(coffee.level > 0) {
    code();
    innovate();
    sleep(0); // Optional
}`}
        </pre>
      </div>
    </div>
  );
};