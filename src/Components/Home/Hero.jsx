import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Phone, Heart, Users, Clock, Stethoscope } from 'lucide-react';
import bannerImage from '../../assets/banner_new.png';
import BookingModal from '../Common/BookingModal';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const stats = [
    { icon: Users, number: "10,000+", label: "Patients Served" },
    { icon: Stethoscope, number: "5+", label: "Specialties" },
    { icon: Clock, number: "24/7", label: "Emergency Care" },
    { icon: Heart, number: "100%", label: "Dedicated Care" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-gradient-radial overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Medical cross pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, currentColor 50px, currentColor 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, currentColor 50px, currentColor 51px)`
        }}></div>
      </div>

      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="SUR Hospital - Medical Excellence in Manipur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 flex items-center min-h-[calc(100vh-80px)]">
        <div className="max-w-3xl">
          {/* Badge with Animation */}
          <div className={`inline-block transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-semibold border border-primary/20 shadow-sm hover:shadow-md transition-all">
              <Heart className="w-4 h-4 fill-current animate-pulse" />
              Leading Maternity & Multi-Specialty Hospital in Manipur
            </span>
          </div>

          {/* Main Heading with Elegant Typography */}
          <h1 className={`mt-8 text-5xl md:text-7xl font-bold leading-tight text-balance transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{fontFamily: "'Playfair Display', serif"}}>
            <span className="text-foreground block">Your Health,</span>
            <span className="text-primary block mt-2">Our Priority</span>
          </h1>

          {/* Subtitle with Better Typography */}
          <p className={`mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Providing comprehensive healthcare services in Khangabok, Thoubal with expert specialists, modern facilities, and compassionate care for the community of Manipur.
          </p>

          {/* CTA Buttons with Refined Design */}
          <div className={`mt-10 flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="group inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Calendar className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <a
              href="tel:+919362655350"
              className="group inline-flex items-center justify-center bg-destructive text-destructive-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-destructive/90 hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg animate-pulse-slow"
            >
              <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Emergency: +91 9362655350
            </a>
          </div>

          {/* Animated Stats with Premium Design - Matching Reference */}
          <div className={`mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isActive = currentStat === index;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-3xl p-6 md:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-700 border border-border/30 ${
                      isActive ? 'scale-105 shadow-2xl ring-2 ring-primary/20' : 'hover:scale-105'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'bg-primary scale-110' : 'bg-primary/10'
                      }`}>
                        <Icon className={`w-8 h-8 transition-all duration-500 ${
                          isActive ? 'text-white animate-bounce' : 'text-primary'
                        }`} />
                      </div>
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-500 ${
                      isActive ? 'text-primary' : 'text-primary'
                    }`} style={{fontFamily: "'Playfair Display', serif"}}>
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </section>
  );
};

export default Hero;

