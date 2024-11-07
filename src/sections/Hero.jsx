import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';

import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import { motion } from 'framer-motion';
import {fadeIn} from '../components/ui/Variants.jsx';
import { Cover } from '../components/ui/Cover.jsx';
import { FlipWords } from "../components/ui/flip-words";
import { Tooltip } from '../components/Tooltip';

const words = ["CJBLACK", "BSIT Student", "Full Stack Dev", "UI/UX Designer", "Network Engr", "Fingerstyle Guitarist"];

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
     
      <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space">
        
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am <Cover><FlipWords words={words} /></Cover> <span className="waving-hand">👋</span>
          <span> &lt;👨‍💻/&gt;</span>
        </p>
        <TextGenerateEffect
            words="Developing Products & Designs" 
            className="hero_tag text-gray_gradient"
          />
      </motion.div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <Tooltip content="Working Together: Where Dreams Become Achievements"> 
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
<a href="#about" className="w-fit">
 <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />      
          </a>
      </div>
      </Tooltip>
    </section>
  );
};

export default Hero;
