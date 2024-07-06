import { useEffect } from "react";
import Subtitle from "./Subtitle";
import classes from "./title.module.css";
import Utils from "../utils";
import useAppStore from "../store/appStore";

const Title = () => {
  const letters = document.querySelectorAll(
    ".letter"
  ) as NodeListOf<HTMLSpanElement>;

  useEffect(() => {
    useAppStore;
    window.addEventListener("mousemove", (e) => {
      letters.forEach((letter) => {
        console.log(Utils.calcDistance(letter, e));
        if (Utils.calcDistance(letter, e) < window.innerWidth / 18) {
          console.log("highlight");
          letter.classList.add("highlight");
        } else {
          letter.classList.remove("highlight");
        }
      });
    });
  }, []);
  return (
    <div className={classes.title}>
      <Subtitle text="Theo R. Cocco" typeOfSubtitle="name" />
      <Subtitle text="Software Engineer" typeOfSubtitle="subtitle" />
    </div>
  );
};

export default Title;
