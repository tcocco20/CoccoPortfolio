import { useEffect, type CSSProperties } from "react";
import Utils from "../utils";
import classes from "./Star.module.css";

interface StarProps {
  size: "small" | "medium" | "large";
}

const colors = ["#F6F0FE", "#DFABCA", "#E9C1D4"];

const Star = ({ size }: StarProps) => {
  let starSize = Utils.Rand.between(3, 1);
  if (size === "medium") starSize += 1.5;
  if (size === "large") starSize += 3;

  const largeSize = 5 + 0.58 * starSize;

  const style = {
    top: Utils.Rand.between(101, 0, true) + "%",
    left: Utils.Rand.between(101, 0, true) + "%",
    opacity: 0,
    height: size,
    width: size,
    backgroundColor: Utils.Rand.choice<string | string[]>(colors),
    transform: "scale(1)",
  } as CSSProperties;

  useEffect(() => {
    const timer = setInterval(flicker(), Utils.Rand.between(700, 500));
    return () => clearInterval(timer);
  }, []);

  const flicker = () => {
    if (!star.hasClass("highlight")) {
      if (Utils.Rand.num() > 0.5) {
        const scale = +star.style.transform.split("scale(")[1].split(")")[0];
        if (scale > 0.5) star.style.transform = `scale(${Rand.between(0.5)})`;
        else star.style.transform = `scale(${Rand.between(1, 0.5)})`;
      }
    }
  };

  return (
    <div style={style} className={classes.star}>
      {size}
    </div>
  );
};

export default Star;
