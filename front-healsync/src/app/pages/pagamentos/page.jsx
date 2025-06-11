export default function PagamentosPage() {
  const planos = [
    {
      nome: "Básico",
      preco: "R$ 29,90/mês",
      beneficios: [
        "Acesso a conteúdos básicos",
        "Suporte via e-mail",
        "1 dispositivo",
      ],
    },
    {
      nome: "Intermediário",
      preco: "R$ 59,90/mês",
      beneficios: [
        "Acesso a conteúdos básicos",
        "Suporte via e-mail",
        "1 dispositivo",
      ],
    },
    {
      nome: "Premium",
      preco: "R$ 99,90/mês",
      beneficios: [
        "Acesso a conteúdos básicos",
        "Suporte via e-mail",
        "1 dispositivo",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#1A2327] flex flex-col items-center justify-center py-16 px-4">
      <img src="/logo-healsync.png" alt="HealSync" className="w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-white mb-10">HealSync</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {planos.map((plano, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{plano.nome}</h2>
              <p className="text-lg font-semibold text-gray-700 mb-4">{plano.preco}</p>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                {plano.beneficios.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-[#1A2327] text-white py-2 px-4 rounded hover:bg-[#2b3b42] transition">
              Assinar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}