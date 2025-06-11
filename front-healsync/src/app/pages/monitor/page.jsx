export default function MonitorPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl">
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h1 className="text-xl font-medium text-gray-700">Hospital Saúde+</h1>
          <p className="mt-4 text-lg font-semibold text-gray-700">SENHA:</p>
          <h2 className="text-6xl font-bold text-indigo-700">REC02</h2>
          <p className="mt-6 text-lg font-semibold text-gray-700">GUICHÊ - SALA</p>
          <h3 className="text-3xl font-bold text-red-600">Guichê 1</h3>
        </div>

        {/* Chamadas */}
        <div className="mb-4">
          <h4 className="text-lg font-bold text-gray-800 mb-3">CHAMADAS:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { senha: "RES01", guiche: "Guichê 2" },
              { senha: "ATE01", guiche: "Guichê 3" },
              { senha: "PRE01", guiche: "Guichê 1" },
              { senha: "REC01", guiche: "Guichê 2" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-400 shadow rounded-md p-4 text-center"
              >
                <p className="text-xs font-bold text-gray-600 mb-1">SENHA:</p>
                <p className="text-xl font-bold text-gray-800">{item.senha}</p>
                <p className="text-sm text-gray-700 mt-2">{item.guiche}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
