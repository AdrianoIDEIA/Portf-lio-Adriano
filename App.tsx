import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { TabId, TabConfig } from './types';
import { TABS } from './constants';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProjectsView } from './views/ProjectsView';
import { CertificationsView } from './views/CertificationsView';
import { ContactView } from './views/ContactView';
import { Icon } from './components/Icon';
import { MatrixRain } from './components/MatrixRain';
import { Toast } from './components/Toast';
import { Terminal } from './components/Terminal';
import { ContextMenu } from './components/ContextMenu';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.HOME);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Easter Egg States
  const [isShaking, setIsShaking] = useState(false);
  const [fakeErrorCount, setFakeErrorCount] = useState(0);
  const [branchName, setBranchName] = useState('main*');
  const [prettierStatus, setPrettierStatus] = useState('Prettier');
  
  // New Secret States
  const [matrixMode, setMatrixMode] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [toast, setToast] = useState<{message: string, type: 'info' | 'success' | 'warning'} | null>(null);
  
  // Terminal State
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Context Menu State
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; visible: boolean }>({ x: 0, y: 0, visible: false });

  // Konami Code Sequence: Up Up Down Down Left Right Left Right B A
  const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Handle Konami Code
      if (e.key === KONAMI_CODE[konamiIndex]) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === KONAMI_CODE.length) {
          setMatrixMode(prev => !prev);
          setToast({ 
            message: !matrixMode ? "System Hacked! Matrix Mode Activated." : "Matrix Mode Deactivated.", 
            type: 'warning' 
          });
          setKonamiIndex(0);
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0);
      }

      // 2. Handle Ctrl + S (Fake Save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        setToast({ message: "Salvando no disquete... Por favor, aguarde.", type: 'success' });
      }

       // 3. Handle Ctrl + P (Fake Quick Open)
       if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        setToast({ message: "Acesso negado: Arquivos confidenciais.", type: 'info' });
      }

      // 4. Handle Ctrl + J (Toggle Terminal)
      if ((e.ctrlKey || e.metaKey) && e.key === 'j') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex, matrixMode]);

  // Context Menu Handler
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.pageX, y: e.pageY, visible: true });
  };

  const closeContextMenu = () => setContextMenu({ ...contextMenu, visible: false });

  useEffect(() => {
    const handleClick = () => closeContextMenu();
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const handleContextMenuAction = (action: string) => {
     switch(action) {
         case 'definition':
             setActiveTab(TabId.ABOUT);
             setToast({ message: "Navigating to definition (About Me)...", type: 'info'});
             break;
         case 'references':
             setToast({ message: "404 References found. (It's a joke)", type: 'warning'});
             break;
         case 'refactor':
             setIsShaking(true);
             setTimeout(() => setIsShaking(false), 1000);
             setToast({ message: "Refactoring code... Done!", type: 'success'});
             break;
         case 'format':
             setPrettierStatus('Prettier ✓');
             setToast({ message: "Document formatted.", type: 'success'});
             break;
         case 'command':
             setToast({ message: "Command Palette unavailable in read-only mode.", type: 'info'});
             break;
     }
  };

  // Easter Egg Handlers
  const handleRedBtn = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleYellowBtn = () => {
    alert("Warning: Coffee levels critically low. Cannot minimize.");
  };

  const handleGreenBtn = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((e) => {
            console.log(e);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
  };

  const handleBranchClick = () => {
    const funnyBranches = ['feature/coffee', 'hotfix/bug-on-prod', 'wip/chaos', 'legacy/dont-touch', 'main*', 'detached/head-exploding'];
    const next = funnyBranches[Math.floor(Math.random() * funnyBranches.length)];
    setBranchName(next);
  };

  const handleErrorClick = () => {
    setFakeErrorCount(prev => prev + 1);
    if (fakeErrorCount > 5) {
        setToast({ message: "Pare de clicar! Você está criando mais bugs!", type: 'warning' });
    }
  };

  const handlePrettierClick = () => {
    setPrettierStatus('Prettier ✓');
    setTimeout(() => setPrettierStatus('Prettier'), 2000);
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case TabId.HOME: return <HomeView />;
      case TabId.ABOUT: return <AboutView />;
      case TabId.PROJECTS: return <ProjectsView />;
      case TabId.CERTIFICATES: return <CertificationsView />;
      case TabId.CONTACT: return <ContactView />;
      default: return <HomeView />;
    }
  };

  const getPageTitle = () => {
      switch(activeTab) {
          case TabId.HOME: return 'Home';
          case TabId.ABOUT: return 'Sobre';
          case TabId.PROJECTS: return 'Projetos';
          case TabId.CERTIFICATES: return 'Certificados';
          case TabId.CONTACT: return 'Contato';
          default: return 'Portfolio';
      }
  };

  return (
    <div 
        className={`flex h-screen w-screen bg-vscode-bg text-vscode-text overflow-hidden font-sans selection:bg-vscode-accent selection:text-white ${isShaking ? 'animate-shake' : ''}`}
        onContextMenu={handleContextMenu}
    >
      <Helmet>
        <title>{getPageTitle()} | Adriano Camargo</title>
      </Helmet>

      {matrixMode && <MatrixRain />}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <ContextMenu {...contextMenu} onClose={closeContextMenu} onAction={handleContextMenuAction} />

      {/* Activity Bar (Far Left) */}
      <div className="w-12 bg-vscode-activity flex flex-col items-center py-4 border-r border-black hidden sm:flex z-20">
        <div className="mb-4 text-gray-400 hover:text-white cursor-pointer transition-colors" title="Files"><Icon name="code" className="w-6 h-6" /></div>
        <div className="mb-4 text-gray-400 hover:text-white cursor-pointer transition-colors" title="Search"><Icon name="external" className="w-5 h-5 transform rotate-90" /></div>
        <div className="mb-4 text-gray-400 hover:text-white cursor-pointer transition-colors" title="Source Control"><Icon name="branch" className="w-6 h-6" /></div>
        <div className="flex-grow"></div>
        <div className="mb-4 text-gray-400 hover:text-white cursor-pointer transition-colors" title="Settings">
            <Icon name="gear" className="w-6 h-6" />
        </div>
      </div>

      {/* Sidebar (File Explorer) */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-vscode-sidebar flex flex-col transition-all duration-300 border-r border-black relative z-10`}>
        <div className="h-10 text-xs font-bold uppercase tracking-wider p-4 text-gray-400 flex justify-between items-center whitespace-nowrap overflow-hidden">
          <span>Explorer</span>
          <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500 hover:text-white sm:hidden p-2">x</button>
        </div>
        
        {/* Project Folder */}
        <div className="flex-1 overflow-y-auto">
            <div className="px-2 py-1 flex items-center gap-1 text-gray-300 font-bold text-sm cursor-pointer hover:bg-vscode-activity/50">
                <span className="transform rotate-90 text-[10px]">▶</span> PORTFOLIO-V2
            </div>
            
            <div className="mt-1">
                {TABS.map((tab) => (
                    <div 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-2 sm:py-1 flex items-center gap-2 text-sm cursor-pointer border-l-2 transition-colors
                            ${activeTab === tab.id 
                                ? 'bg-vscode-activity border-vscode-accent text-white' 
                                : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#2a2d2e]'}`}
                    >
                        <span className="text-base">{tab.icon}</span>
                        <span className={tab.color}>{tab.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-vscode-bg relative">
        
        {/* Top Header / Tabs */}
        <div className="h-12 sm:h-10 bg-vscode-tab flex items-end overflow-x-auto no-scrollbar border-b border-black select-none">
            
            {/* Mobile Menu Toggle */}
            {!isSidebarOpen && (
                <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="h-full px-4 text-gray-400 hover:text-white hover:bg-vscode-activity flex items-center sm:hidden"
                    aria-label="Open Menu"
                >
                    ☰
                </button>
            )}

            {TABS.map((tab) => (
                <div
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                        group flex items-center gap-2 px-4 py-3 sm:py-2 text-sm min-w-[120px] max-w-[200px] cursor-pointer border-r border-black h-full relative
                        ${activeTab === tab.id ? 'bg-vscode-activeTab text-white' : 'bg-[#2d2d2d] text-gray-500 hover:bg-[#2a2d2e]'}
                    `}
                >
                    {/* Active Indicator Top Line */}
                    {activeTab === tab.id && <div className="absolute top-0 left-0 w-full h-[2px] bg-vscode-accent"></div>}
                    
                    <span className="text-xs">{tab.icon}</span>
                    <span className={`truncate ${activeTab === tab.id ? 'text-white' : tab.color}`}>{tab.label}</span>
                    
                    {/* Close Icon (Visual only) */}
                    <span className={`ml-auto text-xs opacity-0 group-hover:opacity-100 hover:bg-gray-600 rounded-sm px-1 ${activeTab === tab.id ? 'text-white' : ''}`}>×</span>
                </div>
            ))}
            
            {/* Window Controls (Mac Style) positioned in empty tab space on right */}
            <div className="ml-auto px-4 flex gap-2 items-center h-full select-none">
                <div onClick={handleRedBtn} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff4035] cursor-pointer shadow-sm active:scale-90 transition-transform" title="Don't close me!"></div>
                <div onClick={handleYellowBtn} className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffad0a] cursor-pointer shadow-sm active:scale-90 transition-transform" title="Minimize"></div>
                <div onClick={handleGreenBtn} className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#1eb334] cursor-pointer shadow-sm active:scale-90 transition-transform" title="Toggle Fullscreen"></div>
            </div>
        </div>

        {/* Breadcrumbs / Path */}
        <div className="h-6 bg-vscode-bg flex items-center px-4 text-xs text-gray-500 border-b border-vscode-activity shadow-sm z-10 hidden sm:flex">
            <span>portfolio-v2</span>
            <span className="mx-1">›</span>
            <span>src</span>
            <span className="mx-1">›</span>
            <span className="text-white">{TABS.find(t => t.id === activeTab)?.label}</span>
        </div>

        {/* Editor Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth">
            {renderContent()}
        </main>
        
        {/* Terminal Panel */}
        <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} onMatrixToggle={() => setMatrixMode(!matrixMode)} />

        {/* Status Bar */}
        <div className="h-6 bg-vscode-accent flex items-center justify-between px-3 text-xs text-white select-none z-20">
            <div className="flex items-center gap-4">
                <div 
                    className="flex items-center gap-1 hover:bg-white/10 px-1 rounded cursor-pointer transition-colors"
                    onClick={handleBranchClick}
                    title="Change Branch (Click me!)"
                >
                    <Icon name="branch" className="w-3 h-3" />
                    <span>{branchName}</span>
                </div>
                <div 
                    className="flex items-center gap-1 hover:bg-white/10 px-1 rounded cursor-pointer transition-colors"
                    onClick={handleErrorClick}
                    title="Click to fix errors (not)"
                >
                    <span className="w-3 h-3 rounded-full border border-white flex items-center justify-center text-[8px]">×</span>
                    <span>{fakeErrorCount}</span>
                    <span className="w-3 h-3 text-[10px] ml-1">⚠️</span>
                    <span>0</span>
                </div>
                <div 
                     className="flex items-center gap-1 hover:bg-white/10 px-1 rounded cursor-pointer transition-colors"
                     onClick={() => setIsTerminalOpen(!isTerminalOpen)}
                     title="Toggle Terminal (Ctrl+J)"
                >
                     <Icon name="terminal" className="w-3 h-3" />
                     <span className="hidden sm:inline">Terminal</span>
                </div>
            </div>
            <div className="flex items-center gap-4 hidden sm:flex">
                <span className="hover:bg-white/10 px-1 rounded cursor-pointer">Ln 12, Col 43</span>
                <span className="hover:bg-white/10 px-1 rounded cursor-pointer">UTF-8</span>
                <span className="hover:bg-white/10 px-1 rounded cursor-pointer">TypeScript React</span>
                <span 
                    className="hover:bg-white/10 px-1 rounded cursor-pointer transition-all"
                    onClick={handlePrettierClick}
                >
                    {prettierStatus}
                </span>
                <span className="hover:bg-white/10 px-1 rounded cursor-pointer animate-pulse">🔔</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default App;