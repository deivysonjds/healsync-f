"use client";
import UnidadeButton from "./UnidadeButton";
import { useEffect, useState } from "react";
import { useUnidadeStore } from "../store/useUnidadeStore";

export default function UnidadeTabs() {
  const { unidadeSelecionada, setUnidadeSelecionada } = useUnidadeStore();
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    async function fetchUnidades() {
      try {
        const res = await fetch("/api/unidades", {
          //substituir pela URL do backend
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUnidades(data);
      } catch (err) {
        console.error("Erro ao buscar unidades:", err);
      }
    }

    fetchUnidades();
  }, []);

  return (
    <div className="flex gap-2 mt-6 px-6 font-bold">
      {unidades.map((unidade, index) => (
        <UnidadeButton
          key={index}
          ativo={unidadeSelecionada === unidade.nome}
          onClick={() => setUnidadeSelecionada(unidade.nome)}
        >
          {unidade.nome}
        </UnidadeButton>
      ))}
      <button className="border border-black text-sm rounded-full px-4 py-1">
        Adicionar +
      </button>
    </div>
  );
}
