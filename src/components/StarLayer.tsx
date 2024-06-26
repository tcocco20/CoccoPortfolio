import { type ReactElement, useEffect } from "react";
import Star from "./Star";
import useAppStore from "../store/appStore";
import Utils from "../utils";

interface StarLayerProps {
  position: "front" | "middle" | "back";
}

const StarLayer = ({ position }: StarLayerProps) => {
  if (position !== "front") {
    const generateStars = () => {
      const stars: ReactElement[] = [];
      if (position === "middle") {
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
  }
  
  const stars: ReactElement[] = [];
  const starRefs = useAppStore((state) => state.starRefs);
  useEffect(() => {
    if (position === "front") {
      window.addEventListener("mousemove", (e) => {
        stars.forEach((s, i) => {
          if (Utils.calcDistance(s, e) < innerWidth / 18) {
          }
        });
      });
    }
  }, [position, stars]);
};

export default StarLayer;
