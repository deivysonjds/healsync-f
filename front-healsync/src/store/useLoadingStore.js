import {create} from "zustand"

export const useLoadingStore = create((set)=>({
    isLoading: true,
    setIsLoading: (state)=>set({isLoading: state})
}))