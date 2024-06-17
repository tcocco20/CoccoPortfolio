// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import StarLayer from "./components/StarLayer";

function App() {
  return (
    <div className="bg-black h-screen w-screen">
      <StarLayer position="front" />
      <StarLayer position="middle" />
      <StarLayer position="back" />
    </div>
  );
}

export default App;
