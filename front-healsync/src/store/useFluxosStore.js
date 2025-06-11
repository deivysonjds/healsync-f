import { create } from "zustand";

export const useFluxosStore = create((set) => ({
      fluxos: [],
      fluxoselecionada: null,
      setfluxoselecionada: (fluxo) => set({ fluxoselecionada: fluxo }),
      setfluxos: (fluxos)=> set({
        fluxos: fluxos,
        })
    }),
);
