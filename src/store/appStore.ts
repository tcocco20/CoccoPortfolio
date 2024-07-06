import { RefObject } from "react";
import { create } from "zustand";

interface StarRef {
  ref: RefObject<HTMLDivElement>;
  setHighlight: (newValue: boolean) => void;
}

interface LetterRef {
  ref: RefObject<HTMLSpanElement>;
  setHighlight: (newValue: boolean) => void;
}

interface appState {
  stars: StarRef[];
  addStar: (star: StarRef) => void;
  letters: LetterRef[];
  addLetter: (letter: LetterRef) => void;
}

const useAppStore = create<appState>()((set, get) => ({
  stars: [],
  addStar: (star) =>
    set(() => {
      const currentStars = get().stars;
      currentStars.push(star);
      return { stars: currentStars };
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
