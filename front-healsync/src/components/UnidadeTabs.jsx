"use client";
import UnidadeButton from "./UnidadeButton";
import { useUnidadesStore } from "../store/useUnidadeStore";
import Link from "next/link";

export default function UnidadeTabs({
  unidades
}) {
  const { unidadeSelecionada, setUnidadeSelecionada } = useUnidadesStore();
  
  return (
    <div className="flex gap-2 mt-6 px-6 font-bold">
      {unidades.map((unidade) => (
        <UnidadeButton
          key={unidade.id}
          ativo={unidadeSelecionada.name === unidade.name}
          onClick={() => setUnidadeSelecionada(unidade)}
        >
          {unidade.name}
        </UnidadeButton>
      ))}
      <Link
        className="border border-black text-sm rounded-full px-4 py-1 hover:scale-105 transform transition-all"
        href="/pages/cadastrar-unidade"
      >
        Adicionar +
      </Link>
    </div>
  );
}
