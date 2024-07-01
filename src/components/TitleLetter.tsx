interface TitleLetterProps {
  char: string;
  highlight: boolean;
}

const TitleLetter = ({ char, highlight }: TitleLetterProps) => {
  return (
    <span className={highlight ? "letter highlight" : "letter"}>{char}</span>
  );
};

export default TitleLetter;
