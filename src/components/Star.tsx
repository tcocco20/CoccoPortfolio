import { useCallback, useEffect, useState, type CSSProperties } from "react";
import Utils from "../utils";
import classes from "./Star.module.css";

interface StarProps {
  size: "small" | "medium" | "large";
}

const colors = ["#F6F0FE", "#DFABCA", "#E9C1D4"];

const Star = ({ size }: StarProps) => {
  const [highlight, setHighlight] = useState(false);
  const [scale, setScale] = useState(1);

  let starSize = Utils.Rand.between(3, 1);
  if (size === "medium") starSize += 1.5;
  if (size === "large") starSize += 3;

  const largeSize = 5 + 0.58 * starSize;

  const style = {
    top: Utils.Rand.between(101, 0, true) + "%",
    left: Utils.Rand.between(101, 0, true) + "%",
    opacity: 0,
    height: starSize,
    width: starSize,
    backgroundColor: Utils.Rand.choice<string | string[]>(colors),
    transform: `scale(${scale})`,
  } as CSSProperties;

  const flicker = useCallback(() => {
    if (!highlight) {
      if (Utils.Rand.num() > 0.5) {
        if (scale > 0.5) setScale(Utils.Rand.between(0.5));
        else setScale(Utils.Rand.between(1, 0.5));
      }
    }
  }, [highlight, scale]);

  useEffect(() => {
    const timer = setInterval(flicker, Utils.Rand.between(700, 500));
    return () => clearInterval(timer);
  }, [flicker]);

  return (
    <div style={style} className={classes.star}>
      {size}
    </div>
  );
};

export default Star;
