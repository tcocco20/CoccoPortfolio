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
  const [starSize, setStarSize] = useState(0);
  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");

  const largeSize = 5 + 0.58 * starSize;

  const flicker = useCallback(() => {
    if (!highlight) {
      if (Utils.Rand.num() > 0.5) {
        if (scale > 0.5) setScale(Utils.Rand.between(0.5));
        else setScale(Utils.Rand.between(1, 0.5));
      }
    }
  }, [highlight, scale]);

  useEffect(() => {
    let sSize = Utils.Rand.between(3, 1);
    if (size === "medium") sSize += 1.5;
    if (size === "large") sSize += 3;
    setStarSize(sSize);

    setTop(Utils.Rand.between(101, 0, true) + "%");
    setLeft(Utils.Rand.between(101, 0, true) + "%");
  }, [size]);

  useEffect(() => {
    const timer = setInterval(flicker, Utils.Rand.between(700, 500));
    return () => clearInterval(timer);
  }, [flicker]);

  const style = {
    top,
    left,
    opacity: 0,
    height: starSize,
    width: starSize,
    backgroundColor: Utils.Rand.choice<string | string[]>(colors),
    transform: `scale(${scale})`,
  } as CSSProperties;

  return (
    <div>
      <div
        style={style}
        className={(classes.star, highlight ? classes.highlight : "")}
      />
    </div>
  );
};

export default Star;
