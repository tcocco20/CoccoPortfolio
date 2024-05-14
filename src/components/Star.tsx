import classes from "./Star.module.css";

interface StarProps {
  size: "small" | "medium" | "large";
}
const Star = ({ size }: StarProps) => {
  return <div className={classes.star}>{size}</div>;
};

export default Star;
