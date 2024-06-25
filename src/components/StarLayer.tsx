import { useEffect } from "react";
import Star from "./Star";
import useAppStore from "../store/appStore";

interface StarLayerProps {
  position: "front" | "middle" | "back";
}

const StarLayer = ({ position }: StarLayerProps) => {
  const stars = useAppStore((state) => state.starRefs);
  useEffect(() => {
    if (position === "front") {
      console.log(stars);
    }
  }, [position, stars]);

  const generateStars = () => {
    const stars = [];
    if (position === "front") {
      for (let i = 0; i < innerWidth / 30; i++)
        stars.push(<Star lightStar={false} key={`large ${i}`} size="large" />);
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
