import { useEffect, useState } from "react";
import classes from "./star.module.css";
import Utils from "../utils";

const ShootingStar = ({ xPos }: { xPos: number }) => {
  const [startingRotation, setStartingRotation] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    console.log("ShootingStar useEffect");
    setStartingRotation(Utils.Rand.between(360));
    setRotation(Utils.Rand.between(30, -30));
    setScale(Utils.Rand.between(1.3, 0.5));
    return () => {
      console.log("ShootingStar cleanup");
    };
  }, []);

  return (
    <div
      style={{
        transform: `rotate(${startingRotation}deg) translateX(-60vmax) rotate(${rotation}deg) translateX(${xPos}vmax) scale(${scale})`,
      }}
      className={`${classes.star} ${classes.shooting}`}
    />
  );
};

export default ShootingStar;
