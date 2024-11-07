import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { FlipWords } from "../components/ui/flip-words";
const words = ["Cute", "Creative", "Resourceful", "Imaginative", "Innovative", "Inventive"];
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
       <BackgroundBeamsWithCollision>
       <h2 className="text-5xl relative z-20 md:text-5xl lg:text-8xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
          <span className=""><FlipWords words={words} /> CJBL/\CK </span>
          </div>
        </div>
      </h2>
      </BackgroundBeamsWithCollision>
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3"> 
        <div className="social-icon">
          <a href="https://www.facebook.com/ChrisNoLimit1124" target="_blank" rel="noopener noreferrer">
            <img src="/assets/FB.svg" alt="facebook" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://github.com/CJBLACK24" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/i/flow/single_sign_on" target="_blank" rel="noopener noreferrer">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
        <a href="https://www.linkedin.com/in/cj-black-a5b110335/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/LinkedIn.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Chris Black. All rights reserved.</p>    
    </footer>

  );
};

export default Footer;
