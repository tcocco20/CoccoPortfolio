interface TitleLetterProps {
  char: string;
  highlight: boolean;
}

const TitleLetter = ({ char, highlight }: TitleLetterProps) => {
  return <span className={highlight ? "highlight" : ""}>{char}</span>;
};

export default TitleLetter;
