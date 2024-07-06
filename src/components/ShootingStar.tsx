import { useEffect, useState } from "react";
import classes from "./star.module.css";

const ShootingStar = () => {
  useEffect(() => {}, []);

  return <div className={`${classes.star} ${classes.shooting}`} />;
};

export default ShootingStar;
