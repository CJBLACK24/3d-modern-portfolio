import skillOne from '/images/skills/cisco.png'; 
import skillTwo from '/images/skills/mongodb.png'; 
import skillThree from '/images/skills/tailwind.png';
import skillFour from '/images/skills/nextjs.png';
import skillFive from '/images/skills/framer.png'; 
import skillSix from '/images/skills/react.png'; 
import skillSeven from '/images/skills/figma.png'; 


import hobbyOne from '/images/skills/frisbee.png'; 
import hobbyTwo from '/images/skills/guitar.png';
import hobbyThree from '/images/skills/chess.png';
import hobbyFour from '/images/skills/shuttlecock.png';
import hobbyFive from '/images/skills/codmsh.png';
import hobbySix from '/images/skills/mlpro.png';
import hobbySeven from '/images/skills/kawasakiNinja.png';


import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
//VARIANTS  FRAMER MOTION
//import {motion} from 'framer-motion';
//import {fadeIn} from '../components/ui/Variants.jsx'
import { Lens } from "../components/ui/lens";
import { motion } from 'framer-motion';
import { Compare } from "../components/ui/compare";


const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const Leftimages = [skillOne, skillTwo, skillThree, skillFour, skillFive, skillSix, skillSeven,]; 
  const Rightimages = [hobbyOne, hobbyTwo, hobbyThree, hobbyFour, hobbyFive, hobbySix, hobbySeven,]; 
  const handleCopy = () => {
    navigator.clipboard.writeText('duquechristianjohncalderon@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const [hovering, setHovering] = useState(false);
 
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
      <div className="xl:col-span-3 xl:row-span-3">
          <div className="grid-container">
          <Lens hovering={hovering} setHovering={setHovering}>
    <img src="assets/CJBLACKWORKSPACE.png" alt="grid-1" class="w-full sm:w-[100%] h-[500px] rounded-lg " /> </Lens>
            <motion.div
             animate={{
              filter: hovering ? "blur(2px)" : "blur(0px)",
            }}
           > 
              <p className="grid-headtext">Personal Development Space - Innovator`s Desk</p>
              <p className="grid-subtext"> A focused workspace showcases a stylish Acer laptop with a backlit display, complemented by an external DELUX keyboard.
                 This setup embodies a productive atmosphere designed specifically for web development tasks.</p>
            </motion.div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
      
          <div className="grid-container">
          <a href="https://www.facebook.com/photo/?fbid=683985520612764&set=pob.100070039660503" target="_blank" rel="noopener noreferrer">
            <img src="assets/grid1.png" alt="grid-2" className="w-full sm:h-[274px] h-fit object-contain" /> </a>
           <div>  
              <p className="grid-headtext">Hi, your dev, Christian John &lt;/&gt;</p>
              <p className="grid-subtext">
                With 1 year of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.
                 I am enthusiastic about using the latest technologies and creative approaches to deliver effective solutions.
              </p>
            
              <a href="https://steam-dev-portfolio-template.vercel.app/fake_resume.pdf" className="w-fit">
           
             <Button name="Download CV" isBeam containerClass="w-full mt-11" />     
              </a>
          
            </div>
        
          </div>
        
        </div>
       
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
          <Compare
       firstImage="https://assets.aceternity.com/code-problem.png"
       secondImage="https://assets.aceternity.com/code-solution.png"
       firstImageClassName="object-cover object-left-top"
       secondImageClassname="object-cover object-left-top"
        alt="grid-3"
        className="w-full sm:h-[500px] h-fit object-contain h-[250px] md:h-[ 500px] md:w-[310px]"
        slideMode="hover"
      />
            <div>

              <p className="grid-headtext">Visual Harmony</p>
              <p className="grid-subtext">
              Crafting intuitive and aesthetically pleasing interfaces that elevate user experience 
              and engagement.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Iloilo, Philippines', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">
                I&apos;m  Based in Balabag, Pavia, Iloilo, Philippines, I’m open to remote work worldwide and ready to adapt to your schedule.
                 The rotating earth above highlights my global reach and commitment to seamless collaboration. I enjoy connecting with clients from diverse backgrounds.
                  My adaptive communication style ensures that I can effectively engage with you, no matter where you are in the world.
              </p>
              <a href="#contact" className="w-fit">
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> 
              </a>
            </div>

          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <a href="#contact" className="w-fit">
                <p className="grid-subtext text-center">Contact me</p>
              </a>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className=" responsive-text text-base lg:text-base md:text-sm text-2xs font-medium text-gray_gradient text-white">
                  duquechristianjohncalderon@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-3 xl:row-span-2">
          <div className="grid-container">
            <div>
            <p className="grid-headtext text-center">My Hobbies and Skills</p>
            <div className="space-y-8">
      <div className="wrapper">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className={`itemLeft item${index + 1} bg-cover bg-center rounded-lg`}
            style={{ backgroundImage: `url(${Leftimages[index % Leftimages.length]})` }} 
          ></div>
        ))}
      </div>
      <div className="wrapper">

        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className={`itemRight item${index + 1} bg-cover bg-center rounded-lg`}
            style={{ backgroundImage: `url(${Rightimages[index % Rightimages.length]})` }} 
          ></div>
        ))} 
      </div>
    </div>
            </div>
          </div>
        </div> 

      </div>
    </section>
  );
};

export default About;
