import React, { useState } from 'react';
import { Phone, MapPin, Clock, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#16a34a] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-2">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} /> EMERGENCY: (+234) 123 456 7890
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} /> WORK HOUR: 09:00 - 20:00 Everyday
            </span>
          </div>
          <div>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> LOCATION: Khangabok Awang Leikai, Thoubal, Manipur-795138
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-[#16a34a]">SUR</span>
            <span className="text-[#22c55e]"> Hospital</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <li><a href="/" className="hover:text-[#22c55e] cursor-pointer transition">Home</a></li>
            <li><a href="#services" className="hover:text-[#22c55e] cursor-pointer transition">Services</a></li>
            <li><a href="#specialties" className="hover:text-[#22c55e] cursor-pointer transition">Specialties</a></li>
            <li><a href="#doctors" className="hover:text-[#22c55e] cursor-pointer transition">Doctors</a></li>
            <li><a href="#opd-timing" className="hover:text-[#22c55e] cursor-pointer transition">OPD Timing</a></li>
            <li><a href="/contact" className="hover:text-[#22c55e] cursor-pointer transition">Contact</a></li>
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Search className="cursor-pointer hover:text-[#22c55e] transition" size={20} />
            <button className="hidden md:block bg-[#22c55e] text-white px-6 py-2 rounded-full text-sm hover:bg-[#16a34a] transition">
              Let's Connect
            </button>
            <button 
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-[#22c55e] transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">
              <li><a href="/" className="hover:text-[#22c55e] cursor-pointer transition py-2">Home</a></li>
              <li><a href="#services" className="hover:text-[#22c55e] cursor-pointer transition py-2">Services</a></li>
              <li><a href="#specialties" className="hover:text-[#22c55e] cursor-pointer transition py-2">Specialties</a></li>
              <li><a href="#doctors" className="hover:text-[#22c55e] cursor-pointer transition py-2">Doctors</a></li>
              <li><a href="#opd-timing" className="hover:text-[#22c55e] cursor-pointer transition py-2">OPD Timing</a></li>
              <li><a href="/contact" className="hover:text-[#22c55e] cursor-pointer transition py-2">Contact</a></li>
            </ul>
            <button className="w-full mt-4 bg-[#22c55e] text-white px-6 py-2 rounded-full text-sm hover:bg-[#16a34a] transition">
              Let's Connect
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;