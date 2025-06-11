import React from 'react';
import { Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-700 text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img 
          src="/lovable-uploads/716d2861-54c4-427d-9211-9f79e22bb453.png" 
          alt="Logo" 
          className="w-8 h-8"
        />
        <span className="text-sm text-slate-300">Início</span>
      </div>
      
      <div className="flex items-center gap-3">
        <Settings className="w-5 h-5 text-slate-300 cursor-pointer hover:text-white" />
        <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-400">
          <User className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;