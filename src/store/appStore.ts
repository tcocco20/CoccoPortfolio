import { create } from "zustand";

interface appState {
  starRefs: HTMLDivElement[];
  addStar: (star: HTMLDivElement) => void;
}

const useAppStore = create<appState>()((set, get) => ({
  starRefs: [],
  addStar: (star) =>
    set(() => {
      const currentStars = get().starRefs;
      currentStars.push(star);
      return { starRefs: currentStars };
    }),
}));

export default useAppStore;
