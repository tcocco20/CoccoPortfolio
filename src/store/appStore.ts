import { StarInterface } from "../components/Star";
import { RefObject } from "react";
import { create } from "zustand";

interface appState {
  starRefs: RefObject<StarInterface>[];
  addStar: (star: RefObject<StarInterface>) => void;
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
