import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Utils from "../utils";
import classes from "./star.module.css";
import useAppStore from "../store/appStore";

type StarProps = { size: "small" | "medium" | "large" };

const colors = ["#F6F0FE", "#DFABCA", "#E9C1D4"];

const Star = ({ size }: StarProps) => {
  const [scale, setScale] = useState(1);
  const [highlight, setHighlight] = useState(false);
  const [smallSize, setSmallSize] = useState(0);
  const [largeSize, setLargeSize] = useState(0);
  const [starSize, setStarSize] = useState(0);
  const [transition, setTransition] = useState(false);
  const [appear, setAppear] = useState(false);
  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");
  const color = useRef<string>(Utils.Rand.choice(colors));
  const star = useRef<HTMLDivElement>(null);
  const addStar = useAppStore((state) => state.addStar);

  const handleHighlight = (trigger: boolean) => {
    if (trigger) {
      if (!highlight) {
        setScale(1);
        setHighlight(true);
        setStarSize(largeSize);
      }
    } else {
      setTransition(true);
      setHighlight(false);
      setStarSize(smallSize);

      setTimeout(() => setTransition(false), 1000);
    }
  };

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
    if (size === "large") {
      sSize += 3;
      addStar({ ref: star, setHighlight: handleHighlight });
    }
    setSmallSize(sSize);
    setLargeSize(5 + 0.58 * sSize);
    setStarSize(sSize);

    setTop(Utils.Rand.between(101, 0, true) + "%");
    setLeft(Utils.Rand.between(101, 0, true) + "%");

    setAppear(true);
  }, [addStar, size]);

  useEffect(() => {
    const timer = setInterval(flicker, Utils.Rand.between(700, 500));
    return () => clearInterval(timer);
  }, [flicker]);

  const starInitialStyle = {
    top,
    left,
    opacity: 0,
    height: starSize,
    width: starSize,
    backgroundColor: color.current,
    transform: `scale(${scale})`,
  } as CSSProperties;

  return (
    <div
      ref={star}
      style={starInitialStyle}
      className={`${classes.star}${highlight ? " " + classes.highlight : ""}${
        transition ? " " + classes.trans : ""
      }${appear ? " " + classes.appear : ""}`}
    />
  );
};

export default Star;
