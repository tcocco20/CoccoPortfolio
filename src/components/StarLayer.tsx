import { createRef, type ReactElement, useEffect } from "react";
import Star, { StarInterface } from "./Star";
import useAppStore from "../store/appStore";
import Utils from "../utils";

interface StarLayerProps {
  position: "front" | "middle" | "back";
}

const StarLayer = ({ position }: StarLayerProps) => {
  const addStar = useAppStore((state) => state.addStar);
  const starRefs = useAppStore((state) => state.starRefs);
  useEffect(() => {
    if (position === "front") {
      window.addEventListener("mousemove", (e) => {
        starRefs.forEach((star) => {
          if (
            star.current?.innerRef.current &&
            Utils.calcDistance(star.current.innerRef.current, e) <
              innerWidth / 18
          ) {
            star.current.highlight(true);
          } else {
            star.current?.highlight(false);
          }
        });
      });
    }
  }, [position, starRefs]);

  const generateStars = () => {
    const stars: ReactElement[] = [];
    if (position === "front") {
      for (let i = 0; i < innerWidth / 30; i++) {
        const ref = createRef<StarInterface>();
        stars.push(<Star key={`large ${i}`} size="large" ref={ref} />);
        addStar(ref);
      }
    } else if (position === "middle") {
      for (let i = 0; i < innerWidth / 15; i++)
        stars.push(<Star key={`medium ${i}`} size="medium" />);
    } else {
      for (let i = 0; i < innerWidth / 5; i++)
        stars.push(<Star key={`small ${i}`} size="small" />);
    }

    return stars;
  };

  return (
    <section className="h-screen w-screen absolute top-0 left-0 pointer-events-none z-50">
      {generateStars()}
    </section>
  );
};

export default StarLayer;
