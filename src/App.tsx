// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useCallback, useEffect, useState } from "react";
import StarLayer from "./components/StarLayer";
import Title from "./components/Title";
import useAppStore from "./store/appStore";
import Utils from "./utils";
import ShootingStar from "./components/ShootingStar";

function App() {
  const letters = useAppStore((state) => state.letters);
  const stars = useAppStore((state) => state.stars);
  const [shootingStar, setShootingStar] = useState(false);
  const [shootingStarTimer, setShootingStarTimer] = useState<number>();
  const [shootingStarX, setShootingStarX] = useState(0);

  const moveShootingStar = useCallback(() => {
    setShootingStarX((prev) => ++prev);
  }, []);

  const clearShootingStar = () => {
    setShootingStarX(0);
    setShootingStar(false);
    clearInterval(shootingStarTimer);
  };

  const createShootingStar = useCallback(() => {
    console.log("createShootingStar called");
    console.log("shootingStar: ", shootingStar);
    if (Utils.Rand.num() < 0.6 || !document.hasFocus() || shootingStar) return;
    console.log("shooting star created");
    setShootingStar(true);
    setShootingStarTimer(
      setInterval(() => {
        moveShootingStar();
      }, 500)
    );
  }, [shootingStar, moveShootingStar]);

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

  useEffect(() => {
    const shootingStarInterval = setInterval(() => {
      console.log("createShootingStar if rand num is higher than 0.6");
      createShootingStar();
    }, 2000);

    return () => {
      clearInterval(shootingStarInterval);
    };
  }, []);
  return (
    <div className="bg-black h-screen w-screen">
      <Title />
      <StarLayer position="front" />
      <StarLayer position="middle" />
      <StarLayer position="back" />
      {shootingStar && <ShootingStar xPos={shootingStarX} />}
    </div>
  );
}

export default App;
