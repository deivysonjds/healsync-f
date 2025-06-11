import { create } from "zustand";

export const useAtendimentoStore = create((set) => ({
      atendimentos: [],
      atendimentoselecionada: null,
      setAtendimentoSelecionada: (atendimento) => set({ atendimentoselecionada: atendimento }),
      setAtendimentos: (atendimentos)=> set({
        atendimentos: atendimentos
        })
    }),
);
