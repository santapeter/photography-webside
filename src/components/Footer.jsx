const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-cinzel">MIKE MAMUANG</h3>
            <p className="text-white/70 font-spectral italic">
              Adventure photography for those who dare to explore beyond the ordinary.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 font-cinzel">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors font-spectral">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white transition-colors font-spectral">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors font-spectral">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors font-spectral">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors font-spectral">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 font-cinzel">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-spectral">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-spectral">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors font-spectral">
                  Liability Waiver
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 font-spectral">
            © {currentYear} Mike Mamuang Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
