import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onMatrixToggle: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose, onMatrixToggle }) => {
  const [history, setHistory] = useState<string[]>(['Welcome to DriDev Shell v1.0.0', 'Type "help" for available commands.']);
  const [input, setInput] = useState('');
  
  // Command History States
  const [userCommands, setUserCommands] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [history, isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (trimmed) {
      setUserCommands(prev => [...prev, trimmed]);
    }
    setHistoryIndex(-1); // Reset history index on new command

    const lowered = trimmed.toLowerCase();
    const newHistory = [...history, `➜  ~ ${cmd}`];

    switch (lowered) {
      case 'help':
        newHistory.push('Available commands:', '  about     - Who am I?', '  contact   - Get in touch', '  clear     - Clear terminal', '  date      - Current date/time', '  sudo      - Admin privileges', '  matrix    - Toggle Matrix mode');
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'about':
        newHistory.push('Adriano Camargo: Fullstack Developer & Automation Expert.');
        break;
      case 'contact':
        newHistory.push('Email: adrianocamargooliver@gmail.com', 'WhatsApp: (15) 98118-9090');
        break;
      case 'date':
        newHistory.push(new Date().toString());
        break;
      case 'whoami':
        newHistory.push('visitor@portfolio');
        break;
      case 'sudo':
        newHistory.push('Permission denied: You are not root. Nice try.');
        break;
      case 'sudo rm -rf /':
        newHistory.push('CRITICAL ERROR: DELETING SYSTEM32...', 'Just kidding. Please don\'t do that.');
        break;
      case 'matrix':
        newHistory.push('Toggling Matrix mode...');
        onMatrixToggle();
        break;
      case '':
        break;
      default:
        newHistory.push(`command not found: ${trimmed}`);
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (userCommands.length > 0) {
            const newIndex = historyIndex === -1 ? userCommands.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setInput(userCommands[newIndex]);
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex !== -1) {
            const newIndex = historyIndex + 1;
            if (newIndex >= userCommands.length) {
                setHistoryIndex(-1);
                setInput('');
            } else {
                setHistoryIndex(newIndex);
                setInput(userCommands[newIndex]);
            }
        }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-vscode-bg border-t border-vscode-activity h-64 z-40 flex flex-col shadow-[0_-5px_15px_rgba(0,0,0,0.5)] animate-slideUp">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-vscode-sidebar border-b border-vscode-activity select-none">
        <div className="flex gap-6 text-xs font-mono uppercase text-gray-400">
           <span className="hover:text-white cursor-pointer">Problems</span>
           <span className="hover:text-white cursor-pointer">Output</span>
           <span className="hover:text-white cursor-pointer">Debug Console</span>
           <span className="text-white border-b border-vscode-accent cursor-pointer">Terminal</span>
           <span className="hover:text-white cursor-pointer">Ports</span>
        </div>
        <div className="flex gap-2">
           <button onClick={onClose} className="text-gray-400 hover:text-white">
              <Icon name="close" className="w-4 h-4" />
           </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-sm" onClick={() => inputRef.current?.focus()}>
         {history.map((line, i) => (
           <div key={i} className="text-gray-300 whitespace-pre-wrap leading-relaxed">{line}</div>
         ))}
         <div className="flex items-center gap-2 text-gray-300 mt-1">
            <span className="text-vscode-green">➜</span>
            <span className="text-vscode-blue">~</span>
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-white focus:ring-0 p-0"
              autoFocus
            />
         </div>
         <div ref={bottomRef}></div>
      </div>
    </div>
  );
};