import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import BookingModal from '../Common/BookingModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[hsl(var(--medical-teal))] to-[hsl(var(--medical-teal-dark))] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-2">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <span className="flex items-center gap-2 font-medium">
              <Phone size={16} className="animate-pulse-slow" />
              <span className="font-semibold">Emergency:</span> +91 9362655350
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              24/7 Emergency Services
            </span>
          </div>
          <div>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Khangabok, Thoubal, Manipur - 795138
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="SUR Hospital Logo"
              className="h-14 w-14 md:h-16 md:w-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-foreground leading-none" style={{fontFamily: "'Playfair Display', serif"}}>
                SUR Hospital
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                Khangabok, Thoubal District, Manipur
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 text-sm font-medium text-foreground">
            <li>
              <Link to="/" className="hover:text-primary cursor-pointer transition-colors duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/#services" className="hover:text-primary cursor-pointer transition-colors duration-300 relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/#specialties" className="hover:text-primary cursor-pointer transition-colors duration-300 relative group">
                Specialties
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/#opd-timing" className="hover:text-primary cursor-pointer transition-colors duration-300 relative group">
                OPD Timing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary cursor-pointer transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Calendar size={18} />
              Book Appointment
            </button>
            <button
              onClick={toggleMenu}
              className="lg:hidden cursor-pointer hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t pt-6 animate-in slide-in-from-top">
            <ul className="flex flex-col gap-4 text-base font-medium text-foreground">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-primary cursor-pointer transition-colors py-2 block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-primary cursor-pointer transition-colors py-2 block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#specialties"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-primary cursor-pointer transition-colors py-2 block"
                >
                  Specialties
                </Link>
              </li>
              <li>
                <Link
                  to="/#opd-timing"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-primary cursor-pointer transition-colors py-2 block"
                >
                  OPD Timing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-primary cursor-pointer transition-colors py-2 block"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg"
            >
              <Calendar size={18} />
              Book Appointment
            </button>
          </div>
        )}
      </nav>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </header>
  );
};

export default Navbar;