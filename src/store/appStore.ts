import { StarInterface } from "../components/Star";
import { RefObject } from "react";
import { create } from "zustand";

// interface StarRef {} Will update to this if letter implementation succeeds

interface LetterRef {
  ref: RefObject<HTMLSpanElement>;
  setHighlightHandler: (newValue: boolean) => void;
}

interface appState {
  starRefs: RefObject<StarInterface>[];
  addStar: (star: RefObject<StarInterface>) => void;
  letters: LetterRef[];
  addLetter: (letter: LetterRef) => void;
}

const useAppStore = create<appState>()((set, get) => ({
  starRefs: [],
  addStar: (star) =>
    set(() => {
      const currentStars = get().starRefs;
      currentStars.push(star);
      return { starRefs: currentStars };
    }),
  letters: [],
  addLetter: (letter) =>
    set(() => {
      const currentLetters = get().letters;
      currentLetters.push(letter);
      return { letters: currentLetters };
    }),
}));

export default useAppStore;
