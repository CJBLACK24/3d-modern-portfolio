import { useState } from 'react';
import { navLinks } from '../constants/index.jsx';
import { FadeText } from "../components/ui/FadeText";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <FadeText direction="down" text={
          <a href={item.href} className="nav-li_a" onClick={onClick}>
            {item.name}
          </a>
        } />
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="https://chatgpt.com/c/671e04d0-922c-8004-b0b8-aa324ce5c01d" className="flex items-center">
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
              CJBL/\CK &nbsp; 
              <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF69B4] text-transparent bg-clip-text"> | Portfolio </span>
            </p>
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;