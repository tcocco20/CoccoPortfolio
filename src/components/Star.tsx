import {
  forwardRef,
  RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Utils from "../utils";
import classes from "./star.module.css";

interface LargeStarProps {
  size: "large";
}

interface SmallerStarProps {
  size: "small" | "medium";
}

export interface StarInterface {
  highlight: (trigger: boolean) => void;
  innerRef: RefObject<HTMLDivElement>;
}

type StarProps = LargeStarProps | SmallerStarProps;

const colors = ["#F6F0FE", "#DFABCA", "#E9C1D4"];

const Star = forwardRef<StarInterface, StarProps>(({ size }, ref) => {
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

  useImperativeHandle(ref, () => {
    return {
      highlight(trigger) {
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
      },
      innerRef: star,
    };
  });

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
    setSmallSize(sSize);
    setLargeSize(5 + 0.58 * sSize);
    setStarSize(sSize);

    setTop(Utils.Rand.between(101, 0, true) + "%");
    setLeft(Utils.Rand.between(101, 0, true) + "%");

    setAppear(true);
  }, [size]);

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
});

export default Star;
