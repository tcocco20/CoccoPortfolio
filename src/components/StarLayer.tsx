import { type ReactElement } from "react";
import Star from "./Star";

interface StarLayerProps {
  position: "front" | "middle" | "back";
}

const StarLayer = ({ position }: StarLayerProps) => {
  const generateStars = () => {
    const stars: ReactElement[] = [];
    if (position === "front") {
      for (let i = 0; i < innerWidth / 30; i++)
        stars.push(<Star key={`large ${i}`} size="large" />);
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
