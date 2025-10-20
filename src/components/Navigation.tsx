import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-taiwo-ogunpaimo.pdf';
    link.download = 'Taiwo-Ogunpaimo-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-[#0A4D5C]">Taiwo</span>
            <span className="text-[#FF6B6B]">.</span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-[#0A4D5C] font-medium transition-colors duration-300 relative group"
                style={{
                  animation: `fadeInDown 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B6B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-[#0A4D5C] text-white px-6 py-2.5 rounded-full hover:bg-[#083d49] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download size={18} />
              <span className="font-medium">Download CV</span>
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-700 hover:text-[#0A4D5C] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-700 hover:text-[#0A4D5C] font-medium transition-colors duration-300 py-2"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-[#0A4D5C] text-white px-6 py-2.5 rounded-full hover:bg-[#083d49] transition-all duration-300 w-full justify-center"
            >
              <Download size={18} />
              <span className="font-medium">Download CV</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
