import { useEffect } from "react";

const TestShootingStar = () => {
  useEffect(() => {
    console.log("Shooting Star would shoot now");
  }, []);
  return <div style={{ display: "none" }}>TestShootingStar</div>;
};

export default TestShootingStar;
