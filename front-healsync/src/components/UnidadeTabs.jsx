"use client";
import UnidadeButton from "./UnidadeButton";
import { useUnidadesStore } from "../store/useUnidadeStore";
import Link from "next/link";
import { fetchFluxos } from "@/services/fluxoService";
import { useFluxosStore } from "@/store/useFluxosStore";

export default function UnidadeTabs({
  unidades
}) {
  const { unidadeSelecionada, setUnidadeSelecionada } = useUnidadesStore();
  const { setfluxos } = useFluxosStore();
  const handleChangeUnidadeSelecionada = async (unidade) => {
    await fetchFluxos(setfluxos, unidade.id);
    setUnidadeSelecionada(unidade);
  }
  return (
    <div className="flex gap-2 mt-6 px-6 font-bold">
      {unidades.map((unidade) => {
        
        return (
          <UnidadeButton
            key={unidade.id}
            ativo={unidadeSelecionada.id === unidade.id}
            onClick={() => handleChangeUnidadeSelecionada(unidade)}
          >
            {unidade.name}
          </UnidadeButton>
        );
      })}
      <Link
        className="border border-black text-sm rounded-full px-4 py-1 hover:scale-105 transform transition-all"
        href="/pages/cadastrar-unidade"
      >
        Adicionar +
      </Link>
    </div>
  );
}
