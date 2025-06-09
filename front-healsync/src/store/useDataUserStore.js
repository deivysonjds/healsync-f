import { create } from "zustand";

export const useDataUserStore = create((set)=>({
    userData: null,
    setUserData: (user)=> set({userData: user})
}))