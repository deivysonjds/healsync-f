export default function AtendimentoRecepcao() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Restauração - Unidade 1
        </h1>

        {/* Dados do paciente */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Dados do paciente</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Nome completo" className="input" />
            <input type="text" placeholder="CPF" className="input" />
            <input type="text" placeholder="Idade" className="input" />
            <input type="text" placeholder="RG" className="input" />
            <input type="text" placeholder="Cartão do SUS" className="input" />
            <input type="email" placeholder="E-mail" className="input" />
            <input type="text" placeholder="Contato" className="input md:col-span-2" />
          </div>
        </div>

        {/* Endereço */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Endereço</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="CEP" className="input" />
            <input type="text" placeholder="Logradouro" className="input" />
            <input type="text" placeholder="Nº" className="input" />
            <input type="text" placeholder="Complemento" className="input" />
            <input type="text" placeholder="Cidade" className="input" />
            <input type="text" placeholder="UF" className="input" />
          </div>
        </div>

        {/* Tipo de atendimento e botão */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="w-full md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-gray-700">Tipo de atendimento</label>
            <select className="input">
              <option>Clínico</option>
              <option>Odontológico</option>
              <option>Psicológico</option>
            </select>
          </div>

          <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-2 rounded-md transition w-full md:w-auto">
            Iniciar atendimento
          </button>
        </div>
      </div>
    </div>
  );
}

// Tailwind input padrão para reaproveitamento
const inputClass = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600";
