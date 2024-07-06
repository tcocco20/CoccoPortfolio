// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import StarLayer from "./components/StarLayer";
import Title from "./components/Title";
import useAppStore from "./store/appStore";
import Utils from "./utils";

function App() {
  const letters = useAppStore((state) => state.letters);
  const stars = useAppStore((state) => state.stars);
  useEffect(() => {
    if (letters.length > 0) {
      window.addEventListener("mousemove", (e) => {
        letters.forEach((letter) => {
          if (letter.ref.current !== null) {
            if (
              Utils.calcDistance(letter.ref.current, e) <
              window.innerWidth / 18
            ) {
              letter.setHighlight(true);
            } else {
              letter.setHighlight(false);
            }
          }
        });

        stars.forEach((star) => {
          if (star.ref.current !== null) {
            if (
              Utils.calcDistance(star.ref.current, e) <
              window.innerWidth / 18
            ) {
              star.setHighlight(true);
            } else {
              star.setHighlight(false);
            }
          }
        });
      });
    }
  }, [letters, stars]);
  return (
    <div className="bg-black h-screen w-screen">
      <Title />
      <StarLayer position="front" />
      <StarLayer position="middle" />
      <StarLayer position="back" />
    </div>
  );
}

export default App;
