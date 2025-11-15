import React from 'react';
import { MapPin, Phone, Clock, Heart, Facebook, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="SUR Hospital Logo" className="h-16 w-16 object-contain" />
              <div>
                <h3 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>
                  SUR Hospital
                </h3>
                <p className="text-sm text-white/70">Khangabok, Thoubal District, Manipur</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Leading maternity and multi-specialty hospital in Manipur, providing comprehensive healthcare services with compassion and excellence. Rated 4.5/5 stars by our patients.
            </p>
            <div className="flex items-center gap-2 text-sm mb-6">
              <Heart className="w-4 h-4 fill-current text-primary" />
              <span className="text-white/90 font-medium">Caring for the community since 2015</span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/sur.hospital.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://gynecologistnearme.in/city/thoubal/sur-hospital-khangabok/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-primary rounded-xl text-white transition-all duration-300 hover:scale-110"
                aria-label="Website Listing"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors duration-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#specialties" className="text-white/70 hover:text-primary transition-colors duration-300">
                  Specialties
                </a>
              </li>
              <li>
                <a href="#opd-timing" className="text-white/70 hover:text-primary transition-colors duration-300">
                  OPD Timings
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm leading-relaxed">
                  Part I, Shanirou, Khangabok,<br />
                  Thoubal, Manipur - 795138
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="tel:+919362655350" className="text-white/80 hover:text-primary transition-colors">
                    +91 9362655350
                  </a>
                  <p className="text-white/60 text-xs mt-1">Emergency 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  24/7 Emergency Services<br />
                  <span className="text-white/60 text-xs">OPD: Check Timings</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© {currentYear} SUR Hospital, Khangabok. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <Heart className="w-4 h-4 fill-current text-red-500" /> for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

