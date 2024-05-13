import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="bg-blue-400 h-screen w-screen">
      <Parallax pages={4}>
        <ParallaxLayer speed={1} factor={1.5}>
          <div className="h-full w-full bg-black"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <div className="flex gap-5 justify-center">
            <Card>
              <CardHeader>
                <h1>Layer 2 Card</h1>
              </CardHeader>
              <CardBody>
                <p>Layer 2 Card Content</p>
              </CardBody>
              <CardFooter>
                <p>Layer 2 Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h1>Layer 2 Card</h1>
              </CardHeader>
              <CardBody>
                <p>Layer 2 Card Content</p>
              </CardBody>
              <CardFooter>
                <p>Layer 2 Card Footer</p>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h1>Layer 2 Card</h1>
              </CardHeader>
              <CardBody>
                <p>Layer 2 Card Content</p>
              </CardBody>
              <CardFooter>
                <p>Layer 2 Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
