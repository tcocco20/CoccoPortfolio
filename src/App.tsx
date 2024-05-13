import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="bg-blue-400 h-screen w-screen">
      <Parallax pages={1}>
        <ParallaxLayer speed={1}>
          
        </ParallaxLayer>
        <ParallaxLayer speed={0.67}></ParallaxLayer>
        <ParallaxLayer speed={0.34}></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
