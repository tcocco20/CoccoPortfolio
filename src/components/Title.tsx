import Subtitle from "./Subtitle";
import classes from "./title.module.css";

const Title = () => {
  return (
    <div className={classes.title}>
      <Subtitle text="Theo R. Cocco" typeOfSubtitle="name" />
      <Subtitle text="Software Engineer" typeOfSubtitle="subtitle" />
    </div>
  );
};

export default Title;
