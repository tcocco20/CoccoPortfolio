interface TitleLetterProps {
  char: string;
  highlight: boolean;
}

const TitleLetter = ({ char }: TitleLetterProps) => {
  return <span>{char}</span>;
};

export default TitleLetter;
