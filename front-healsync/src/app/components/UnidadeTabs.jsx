"use client";
import UnidadeButton from "./UnidadeButton";
import { useUnidadeStore } from "../store/useUnidadeStore";

const unidades = ["unidade 1", "unidade 2", "unidade 3"];

export default function UnidadeTabs() {
  const { unidadeSelecionada, setUnidadeSelecionada } = useUnidadeStore();

  return (
    <div className="flex gap-2 mt-6 px-6 font-bold">
      {unidades.map((nomeUnidade, index) => (
        <UnidadeButton
          key={index}
          ativo={unidadeSelecionada === nomeUnidade}
          onClick={() => setUnidadeSelecionada(nomeUnidade)}
        >
          {nomeUnidade}
        </UnidadeButton>
      ))}
      <button className="border border-black text-sm rounded-full px-4 py-1">
        Adicionar +
      </button>
    </div>
  );
}
