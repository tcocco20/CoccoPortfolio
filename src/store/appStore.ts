import { create } from "zustand";

interface appState {
  bears: number;
  increase: (by: number) => void;
}

const useAppStore = create<appState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export default useAppStore;
