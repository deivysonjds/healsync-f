import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFluxosStore = create(
  persist(
    (set) => ({
      fluxos: [],
      fluxoselecionada: null,
      setfluxoselecionada: (fluxo) => set({ fluxoselecionada: fluxo }),
      setfluxos: (fluxos) =>
        set({
          fluxos: fluxos,
        }),
    }),
    {
      name: "fluxos-storage",
      getStorage: () => localStorage, 
    }
));
