import React, { useState, useEffect } from "react";

export default function MonitorManager({ monitores, setMonitores }) {
  const [novoMonitor, setNovoMonitor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Carrega monitores do backend ao montar
  useEffect(() => {
    setLoading(true);
    fetch("/api/monitores")
      .then((res) => res.json())
      .then((data) => setMonitores(data))
      .catch(() => setError("Erro ao carregar monitores"))
      .finally(() => setLoading(false));
  }, [setMonitores]);

  const handleAddMonitor = async () => {
    if (novoMonitor.trim() === "") return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/monitores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: novoMonitor.trim() }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMonitores(data);
      setNovoMonitor("");
    } catch {
      setError("Erro ao adicionar monitor");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMonitor = async (index) => {
    setLoading(true);
    setError("");
    try {
      const nome = monitores[index];
      const res = await fetch("/api/monitores", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMonitores(data);
    } catch {
      setError("Erro ao remover monitor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-8 w-full max-w-sm flex flex-col gap-6 border border-green-200">
      <h3 className="font-extrabold text-2xl mb-2 text-center text-green-700 tracking-wide drop-shadow">
        Gerenciar Monitores
      </h3>
      <div className="flex gap-2 items-center">
        <input
          className="border-2 border-green-300 rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          type="text"
          placeholder="Nome do monitor"
          value={novoMonitor}
          onChange={(e) => setNovoMonitor(e.target.value)}
          disabled={loading}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-600 transition disabled:opacity-50"
          onClick={handleAddMonitor}
          disabled={loading}
        >
          +
        </button>
      </div>
      {error && (
        <div className="text-red-500 text-sm text-center">{error}</div>
      )}
      <ul className="mt-2 divide-y divide-green-100">
        {loading ? (
          <li className="text-gray-400 text-sm text-center py-4">
            Carregando...
          </li>
        ) : monitores.length === 0 ? (
          <li className="text-gray-400 text-sm text-center py-4">
            Nenhum monitor cadastrado
          </li>
        ) : (
          monitores.map((monitor, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center py-2 group"
            >
              <span className="text-green-900 font-medium truncate">
                {monitor}
              </span>
              <button
                className="text-red-500 hover:text-red-700 text-xs font-bold px-2 py-1 rounded transition opacity-70 group-hover:opacity-100"
                onClick={() => handleRemoveMonitor(idx)}
                title="Remover monitor"
                disabled={loading}
              >
                Remover
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
