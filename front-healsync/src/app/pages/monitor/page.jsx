export default function MonitorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-8">Tela de Monitoramento</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 p-6 rounded-md text-center font-semibold text-lg">EM ATENDIMENTO</div>
          <div className="bg-gray-100 p-6 rounded-md text-center font-semibold text-lg">PRÓXIMO</div>
          <div className="bg-gray-100 p-6 rounded-md text-center font-semibold text-lg">EM ESPERA</div>
        </div>
      </div>
    </div>
  );
}
