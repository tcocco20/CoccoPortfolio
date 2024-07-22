// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { type ReactElement, useCallback, useEffect, useState } from "react";
import StarLayer from "./components/StarLayer";
import Title from "./components/Title";
import useAppStore from "./store/appStore";
import Utils from "./utils";
import ShootingStar from "./components/ShootingStar";

function App() {
  const letters = useAppStore((state) => state.letters);
  const stars = useAppStore((state) => state.stars);
  const [shootingStar, setShootingStar] = useState<ReactElement>();
  const [shootingStarX, setShootingStarX] = useState(0);

  const moveShootingStar = useCallback(() => {
    const moveStarTimer = setInterval(() => {
      setShootingStarX((prev) => ++prev);
      if (shootingStarX > 120) {
        setShootingStarX(0);
        setShootingStar(undefined);
        clearInterval(moveStarTimer);
      }
    }, 1000 / 60);
  }, [shootingStarX]);

  const createShootingStar = useCallback(() => {
    if (Utils.Rand.num() < 0.6 || !document.hasFocus() || shootingStar) return;
    setShootingStar(<ShootingStar xPos={shootingStarX} />);
    moveShootingStar();
  }, [shootingStar, shootingStarX, moveShootingStar]);

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

    const shootingStarInterval = setInterval(() => {
      console.log("createShootingStar if rand num is higher than 0.6");
      createShootingStar();
    }, 2000);

    return () => {
      if (shootingStarInterval) clearInterval(shootingStarInterval);
    };
  }, [letters, stars, createShootingStar]);

  useEffect(() => {}, []);
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
