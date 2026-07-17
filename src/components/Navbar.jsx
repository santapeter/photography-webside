import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { photographerNameUpper } from '../config/site';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Portfolio', 'Services', 'About', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-[#110d0a]/90 backdrop-blur-md z-50 border-b border-[#4a3a1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="block">
              <h2 className="text-2xl font-bold tracking-tight text-[#d8b56a] font-cinzel">
                {photographerNameUpper}
              </h2>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#a88a4a] mt-1 font-cinzel">Field Photographer</p>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-[0.24em] uppercase text-[#bca67b] hover:text-[#e6c26b] transition-colors duration-300 font-cinzel"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 border border-[#7d6430] text-[#d8b56a] text-sm tracking-[0.18em] uppercase hover:bg-[#2b2112] transition-colors duration-300 font-cinzel"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#bca67b] hover:text-[#e6c26b] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#110d0a] border-t border-[#4a3a1c]">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm tracking-[0.2em] uppercase text-[#bca67b] hover:text-[#e6c26b] transition-colors duration-300 font-cinzel"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-4 py-3 border border-[#7d6430] text-[#d8b56a] text-sm tracking-[0.18em] uppercase text-center font-cinzel"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
