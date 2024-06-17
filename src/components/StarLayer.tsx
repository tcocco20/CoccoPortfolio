import Star from "./Star";

interface StarLayerProps {
  position: "front" | "middle" | "back";
}

const StarLayer = ({ position }: StarLayerProps) => {
  const generateStars = () => {
    const stars = [];
    if (position === "front") {
      for (let i = 0; i < innerWidth / 30; i++)
        stars.push(<Star size="large" />);
    } else if (position === "middle") {
      for (let i = 0; i < innerWidth / 15; i++)
        stars.push(<Star size="medium" />);
    } else {
      for (let i = 0; i < innerWidth / 5; i++)
        stars.push(<Star size="small" />);
    }

    return stars;
  };

  return <section>{generateStars()}</section>;
};

export default StarLayer;
