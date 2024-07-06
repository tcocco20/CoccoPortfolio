import useAppStore from "../store/appStore";
import { useEffect, useRef, useState } from "react";

interface TitleLetterProps {
  char: string;
}

const TitleLetter = ({ char }: TitleLetterProps) => {
  const [highlight, setHighlight] = useState(false);
  const addLetter = useAppStore((state) => state.addLetter);
  const letterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    addLetter({
      ref: letterRef,
      setHighlight,
    });
  }, [addLetter]);

  return (
    <span ref={letterRef} className={highlight ? "highlight" : ""}>
      {char}
    </span>
  );
};

export default TitleLetter;
