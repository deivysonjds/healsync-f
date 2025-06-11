import React, { useState } from 'react';
import { ArrowLeft, Cog, ChevronDown, ChevronUp } from 'lucide-react';

const ExpandablePanel = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-medium text-gray-800"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="mt-3">
          {children}
        </div>
      )}
    </div>
  );
};

const MedicalApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Cabeçalho preto */}
      <header className="bg-black text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/c781645d-1e7d-4a6d-9e9b-bb3ea9d39ff3.png" 
            alt="Logo" 
            className="w-8 h-8 mr-3"
          />
          <button className="flex items-center text-white hover:text-gray-300 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            <span className="text-sm font-medium">voltar</span>
          </button>
        </div>
        
        <h1 className="text-lg font-medium text-center flex-1">
          Restauração - Unidade 1
        </h1>
        
        <button className="text-white hover:text-gray-300 transition-colors">
          <Cog size={20} />
        </button>
      </header>

      {/* Conteúdo principal */}
      <main className="p-4">
        {/* Caixa branca principal */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Painéis expansíveis */}
          <div className="px-4">
            <ExpandablePanel title="Dados do paciente">
              <div className="text-sm text-gray-600 space-y-2">
                <p className="text-gray-500 italic">
                  /* Campos de dados do paciente serão implementados aqui */
                </p>
              </div>
            </ExpandablePanel>
            
            <ExpandablePanel title="Atendimento">
              <div className="text-sm text-gray-600 space-y-2">
                <p className="text-gray-500 italic">
                  /* Campos de atendimento serão implementados aqui */
                </p>
              </div>
            </ExpandablePanel>
          </div>

          {/* Campos de texto principais */}
          <div className="p-4 space-y-4">
            {/* Campo Sintomas */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sintomas
              </label>
              <textarea
                className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descreva os sintomas..."
              />
            </div>

            {/* Campo Prescrição */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prescrição
              </label>
              <textarea
                className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite a prescrição..."
              />
            </div>
          </div>

          {/* Botões de ação */}
          <div className="p-4 flex gap-3">
            <button className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Avançar
            </button>
            
            <button className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors">
              encerrar atendimento
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalApp;
