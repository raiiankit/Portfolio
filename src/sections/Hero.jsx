import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import DemoComputer from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import pdf from "/assets/Resume.pdf";
import {
  ReactLogo,
  NodeLogo,
  ExpressLogo,
  MongoDbLogo,
} from "../components/Logos.jsx";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        {/* <p className="sm:text-3xl mt-[-11px] text-2xl font-medium text-white text-center font-generalsans">
          Hi ! , I'm Ankit Rai
        </p> */}

        <p className="hero_tag text-gray_gradient">
        Crafting <span className="text-blue-300">Full-Stack</span> &{" "}
          <span className="text-green-300">Web Experiences</span>
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 2, 20]} />

            <HeroCamera isMobile={isMobile}>
              <DemoComputer
                position={sizes.deskPosition}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

        <ReactLogo />
        <NodeLogo />
        <ExpressLogo />
        <MongoDbLogo />
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href={pdf} target="_blank" rel="noreferrer" className="w-fit">
          <Button name="Download Resume" isBeam containerClass="sm:w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
