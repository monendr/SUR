import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Phone, MapPin, Heart, Shield, Clock } from 'lucide-react';
import bannerImage from '../../assets/banner.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { icon: Heart, number: "5000+", label: "Happy Patients" },
    { icon: Shield, number: "5+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Care" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[700px] bg-gradient-to-r from-blue-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#22c55e]/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-[#60a5fa]/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-[#16a34a]/10 rounded-full animate-ping"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bannerImage} 
          alt="Medical Professional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 flex items-center min-h-[700px]">
        <div className="max-w-2xl">
          {/* Small Tag with Animation */}
          <div className={`inline-block transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition-shadow animate-pulse">
              ✨ Caring For Life
            </span>
          </div>
          
          {/* Main Heading with Stagger Animation */}
          <h1 className={`mt-6 text-4xl md:text-6xl font-bold leading-tight transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="text-[#16a34a] hover:text-[#22c55e] transition-colors duration-300">Leading the Way</span><br />
            <span className="text-[#1e40af] bg-gradient-to-r from-[#1e40af] to-[#60a5fa] bg-clip-text text-transparent animate-pulse">in Medical Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className={`mt-4 text-lg text-gray-600 max-w-lg transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Experience world-class healthcare with our dedicated team of professionals. Your health, our commitment.
          </p>
          
          {/* CTA Buttons with Hover Effects */}
          <div className={`mt-8 flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a 
              href="#services" 
              className="group inline-flex items-center justify-center bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
            
            <a 
              href="#opd-timing" 
              className="group inline-flex items-center justify-center bg-white text-[#16a34a] border-2 border-[#22c55e] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#22c55e] hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <Calendar className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
              Book Appointment
            </a>
            
            <a 
              href="tel:+919876543210" 
              className="group inline-flex items-center justify-center bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg animate-pulse"
            >
              <Phone className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
              Emergency
            </a>
          </div>

          {/* Animated Stats */}
          <div className={`mt-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transform transition-all duration-500 min-w-[140px] ${
                      currentStat === index ? 'scale-110 bg-[#22c55e] text-white' : 'hover:scale-105 hover:bg-white'
                    }`}
                  >
                    <Icon className={`${currentStat === index ? 'text-white animate-bounce' : 'text-[#22c55e]'}`} size={20} />
                    <div>
                      <div className={`font-bold text-base sm:text-lg ${currentStat === index ? 'text-white' : 'text-[#16a34a]'}`}>
                        {stat.number}
                      </div>
                      <div className={`text-xs sm:text-sm ${currentStat === index ? 'text-white/90' : 'text-gray-600'}`}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="/contact"
          className="group flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <MapPin className="group-hover:rotate-12 transition-transform duration-300" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

