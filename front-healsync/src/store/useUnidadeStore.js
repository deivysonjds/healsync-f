import { create } from "zustand";

export const useUnidadesStore = create((set) => ({
      unidades: [],
      unidadeSelecionada: null,
      setUnidadeSelecionada: (unidade) => set({ unidadeSelecionada: unidade }),
      setUnidades: (unidades)=> set({
        unidades: unidades,
        unidadeSelecionada: unidades.length > 0 ? unidades[0] : null
        })
    }),
);
