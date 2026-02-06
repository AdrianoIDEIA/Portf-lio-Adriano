import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
  type?: 'info' | 'success' | 'warning';
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, type = 'info' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    info: 'bg-vscode-blue',
    success: 'bg-vscode-green',
    warning: 'bg-vscode-orange',
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 animate-fadeIn">
      <div className={`${colors[type]} text-white px-6 py-3 rounded shadow-2xl flex items-center gap-3 border border-white/10`}>
        <span className="text-xl">
            {type === 'info' && 'ℹ️'}
            {type === 'success' && '💾'}
            {type === 'warning' && '⚠️'}
        </span>
        <span className="font-mono text-sm">{message}</span>
      </div>
    </div>
  );
};