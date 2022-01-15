import "./App.css";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./components/AnimatedSphere";

function App() {
  return (
    <Wrapper>
      <Container>
        <Text>Blobber</Text>
      </Container>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} enableDamping={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>

      <section></section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  canvas {
    background-color: black;
    position: relative;
    height: 100vh;
    width: 100vw;
    outline: none;
    mix-blend-mode: hue;
  }
`;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

const Text = styled.h1`
  font-size: 10rem;
  color: whitesmoke;
`;

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Box />
        </Canvas> */
}
