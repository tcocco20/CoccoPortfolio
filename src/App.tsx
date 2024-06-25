// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import StarLayer from "./components/StarLayer";
import useAppStore from "./store/appStore";

function App() {
  const stars = useAppStore((state) => state.starRefs);
  console.log(stars);
  return (
    <div className="bg-black h-screen w-screen">
      <StarLayer position="front" />
      <StarLayer position="middle" />
      <StarLayer position="back" />
    </div>
  );
}

export default App;
