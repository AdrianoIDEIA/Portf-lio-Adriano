import React from 'react';

interface ContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  onClose: () => void;
  onAction: (action: string) => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, visible, onClose, onAction }) => {
  if (!visible) return null;

  const menuItems = [
    { label: 'Go to Definition', action: 'definition', shortcut: 'F12' },
    { label: 'Find All References', action: 'references', shortcut: 'Shift+F12' },
    { type: 'separator' },
    { label: 'Refactor...', action: 'refactor', shortcut: 'Ctrl+Shift+R' },
    { label: 'Format Document', action: 'format', shortcut: 'Shift+Alt+F' },
    { type: 'separator' },
    { label: 'Command Palette...', action: 'command', shortcut: 'Ctrl+Shift+P' },
  ];

  return (
    <div 
      className="fixed z-[9999] bg-vscode-sidebar border border-vscode-activity shadow-xl rounded py-1 min-w-[200px]"
      style={{ top: y, left: x }}
      onClick={(e) => e.stopPropagation()}
    >
      {menuItems.map((item, index) => {
        if (item.type === 'separator') {
          return <div key={index} className="h-[1px] bg-vscode-activity my-1 mx-2"></div>;
        }
        return (
          <div 
            key={index} 
            className="px-4 py-1.5 hover:bg-vscode-blue hover:text-white cursor-pointer flex justify-between items-center group text-sm text-vscode-text"
            onClick={() => {
                onAction(item.action!);
                onClose();
            }}
          >
            <span>{item.label}</span>
            {item.shortcut && <span className="text-xs text-gray-500 group-hover:text-gray-200 ml-4">{item.shortcut}</span>}
          </div>
        );
      })}
    </div>
  );
};