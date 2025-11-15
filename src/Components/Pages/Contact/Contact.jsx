import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Navigation, Star, CheckCircle, Heart, Facebook, Instagram, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full mb-6">
            <MessageCircle size={20} />
            <span className="font-semibold tracking-wide">GET IN TOUCH</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
            Contact SUR Hospital
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            We're here to provide you with exceptional healthcare. Reach out to us for appointments, inquiries, or emergencies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-12 relative z-10">
        
        {/* Quick Action Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <a href="tel:+919362655350" className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300 border border-border/50">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Phone className="text-white animate-pulse" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{fontFamily: "'Playfair Display', serif"}}>
              Emergency Call
            </h3>
            <p className="text-muted-foreground mb-4">24/7 Emergency Support</p>
            <span className="text-destructive font-bold text-lg">+91 9362655350</span>
          </a>

          <a href="/#opd-timing" className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300 border border-border/50">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Calendar className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{fontFamily: "'Playfair Display', serif"}}>
              Book Appointment
            </h3>
            <p className="text-muted-foreground mb-4">Schedule your visit</p>
            <span className="text-primary font-bold text-lg">View OPD Timings</span>
          </a>

          <a href="https://maps.google.com/?q=SUR+Hospital+Khangabok+Thoubal+Manipur" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300 border border-border/50">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Navigation className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{fontFamily: "'Playfair Display', serif"}}>
              Get Directions
            </h3>
            <p className="text-muted-foreground mb-4">Find us on map</p>
            <span className="text-green-600 font-bold text-lg">Open Maps</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-border/50">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3" style={{fontFamily: "'Playfair Display', serif"}}>
              <MessageCircle className="text-primary" size={32} />
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-5 rounded-2xl hover:bg-secondary/50 transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={22} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Emergency Hotline</p>
                  <p className="text-muted-foreground mb-2">Available 24/7 for urgent care</p>
                  <a href="tel:+919362655350" className="text-destructive font-bold text-lg hover:underline">+91 9362655350</a>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-5 rounded-2xl hover:bg-secondary/50 transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={22} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Our Location</p>
                  <p className="text-muted-foreground mb-2">Visit us at our hospital</p>
                  <p className="text-primary font-semibold">Part I, Shanirou, Khangabok<br />Thoubal District, Manipur - 795138</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-5 rounded-2xl hover:bg-secondary/50 transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="text-white" size={22} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Operating Hours</p>
                  <p className="text-muted-foreground mb-2">We're here when you need us</p>
                  <p className="text-green-600 font-semibold">24/7 Emergency Care<br />OPD: Check Doctor Timings</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="font-bold text-foreground text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/sur.hospital.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl text-white hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://gynecologistnearme.in/city/thoubal/sur-hospital-khangabok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl text-white hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label="Website"
                >
                  <Globe size={24} />
                </a>
              </div>
            </div>

            {/* Rating Section */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="text-yellow-300 fill-current" size={22} />
                ))}
                <Star className="text-yellow-300 fill-current opacity-50" size={22} />
                <span className="font-bold ml-2 text-xl">4.5/5</span>
              </div>
              <p className="text-white/95 leading-relaxed font-medium">"Best maternity hospital in Thoubal District. Excellent healthcare with compassionate care!"</p>
              <p className="text-white/70 text-sm mt-3">- Based on verified patient reviews</p>
            </div>
          </div>
          
          {/* Interactive Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#16a34a] mb-8 flex items-center gap-3">
              <Send className="text-[#22c55e]" size={28} />
              Send us a Message
            </h2>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-xl flex items-center gap-3 animate-fade-in">
                <CheckCircle className="text-green-600" size={24} />
                <div>
                  <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                  <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all duration-300 hover:border-[#22c55e]"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all duration-300 hover:border-[#22c55e]"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all duration-300 hover:border-[#22c55e]"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea 
                  rows="5" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all duration-300 hover:border-[#22c55e] resize-none"
                  placeholder="Please describe your inquiry in detail..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:shadow-2xl text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Additional Contact Options */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-center mb-4">Prefer to contact us directly?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center justify-center gap-2 bg-red-100 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a 
                  href="mailto:info@surhospital.com" 
                  className="flex items-center justify-center gap-2 bg-blue-100 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <Mail size={18} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
