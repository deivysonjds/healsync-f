import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUnidadesStore = create(
  persist(
    (set) => ({
      unidades: [],
      unidadeSelecionada: null,
      setUnidadeSelecionada: (unidade) => set({ unidadeSelecionada: unidade }),
      setUnidades: (unidades) =>
        set({
          unidades,
          unidadeSelecionada: unidades.length > 0 ? unidades[0] : null,
        }),
    }),
    {
      name: "unidades-storage",
      getStorage: () => localStorage,
    }
  )
);
