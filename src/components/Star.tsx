interface StarProps {
  size: "small" | "medium" | "large";
}
const Star = ({ size }: StarProps) => {
  return <div>{size}</div>;
};

export default Star;
