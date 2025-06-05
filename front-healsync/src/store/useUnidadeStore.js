import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUnidadeStore = create(
  persist(
    (set) => ({
      unidadeSelecionada: "unidade 1",
      setUnidadeSelecionada: (unidade) => set({ unidadeSelecionada: unidade }),
    }),
    {
      name: "unidade-store", // chave que será usada no localStorage
    }
  )
);
