import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAtendimentoStore = create(
  persist(
    (set) => ({
      atendimentos: [],
      atendimentoselecionada: null,

      setAtendimentoSelecionada: (atendimento) =>
        set({ atendimentoselecionada: atendimento }),

      setAtendimentos: (atendimentos) =>
        set({ atendimentos }),
    }),
    {
      name: "atendimento-storage",
      getStorage: () => localStorage,
    }
  )
);
