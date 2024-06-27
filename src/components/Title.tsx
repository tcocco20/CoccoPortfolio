import Subtitle from "./Subtitle";
import classes from "./title.module.css";

const Title = () => {
  return (
    <div className={classes.title}>
      <Subtitle text="Theo R. Cocco" />
      <Subtitle text="Software Engineer" />
    </div>
  );
};

export default Title;
