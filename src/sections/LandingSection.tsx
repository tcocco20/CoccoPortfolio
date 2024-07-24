import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import ShootingStar from "../components/ShootingStar";
import StarLayer from "../components/StarLayer";
import Title from "../components/Title";
import useAppStore from "../store/appStore";
import Utils from "../utils";

const LandingSection = () => {
  const letters = useAppStore((state) => state.letters);
  const stars = useAppStore((state) => state.stars);
  const [shootingStar, setShootingStar] = useState(false);
  const [shootingStarTimer, setShootingStarTimer] = useState<number>();
  const [shootingStarX, setShootingStarX] = useState(0);

  const moveShootingStar = useCallback(() => {
    setShootingStarX((prev) => ++prev);
  }, []);

  const clearShootingStar = useCallback(() => {
    setShootingStarX(0);
    setShootingStar(false);
    clearInterval(shootingStarTimer);
  }, [shootingStarTimer]);

  const createShootingStar = useCallback(() => {
    console.log("createShootingStar called");
    if (Utils.Rand.num() < 0.6 || !document.hasFocus() || shootingStar) return;
    console.log("shooting star created");
    setShootingStar(true);
    setShootingStarTimer(
      setInterval(() => {
        moveShootingStar();
      }, 1000 / 60)
    );
  }, [shootingStar, moveShootingStar]);

  const mouseMoveHandler = (e: MouseEventHandler<HTMLDivElement>) => {
    // if (letters.length > 0) {
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
        if (Utils.calcDistance(star.ref.current, e) < window.innerWidth / 18) {
          star.setHighlight(true);
        } else {
          star.setHighlight(false);
        }
      }
    });
    // }
  };

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
  }, [createShootingStar]);

  useEffect(() => {
    console.log("shootingStarX use effect. current val: ", shootingStarX);
    if (shootingStarX >= 100) {
      clearShootingStar();
    }
  }, [shootingStarX, clearShootingStar]);
  return (
    <div className="bg-black h-screen w-screen" onMouseMove={mouseMoveHandler}>
      <Title />
      <StarLayer position="front" />
      <StarLayer position="middle" />
      <StarLayer position="back" />
      {shootingStar && <ShootingStar xPos={shootingStarX} />}
    </div>
  );
};

export default LandingSection;
