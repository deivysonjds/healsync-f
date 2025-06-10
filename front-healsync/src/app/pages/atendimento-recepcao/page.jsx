export default function AtendimentoRecepcaoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Atendimento – Recepção</h1>

        <form className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Nome"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Chamar
          </button>
        </form>

        <div>
          <h2 className="text-lg font-semibold mb-2">Fila de Espera</h2>
          <ul className="text-sm">
            <li className="flex justify-between">
              <span>João Silva</span><span>0151</span>
            </li>
            <li className="flex justify-between">
              <span>Ana Souza</span><span>1023</span>
            </li>
            <li className="flex justify-between">
              <span>Carlos Lima</span><span>7160</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
