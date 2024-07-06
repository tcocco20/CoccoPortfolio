import TitleLetter from "./TitleLetter";
import classes from "./title.module.css";

interface SubtitleProps {
  text: string;
  typeOfSubtitle: "name" | "subtitle";
}

const Subtitle = ({ text, typeOfSubtitle }: SubtitleProps) => {
  const textEls = text.split("").map((char, i) => {
    return <TitleLetter key={i} char={char} />;
  });
  return (
    <div
      className={typeOfSubtitle === "name" ? classes.name : classes.subtitle}
    >
      {textEls}
    </div>
  );
};

export default Subtitle;
