import TitleLetter from "./TitleLetter";

interface SubtitleProps {
  text: string;
}

const Subtitle = ({ text }: SubtitleProps) => {
  const textEls = text.split("").map((char, i) => {
    return <TitleLetter key={i} char={char} highlight={false} />;
  });
  return <div>{textEls}</div>;
};

export default Subtitle;
