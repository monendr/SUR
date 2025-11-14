import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Navigation, Star, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#16a34a] to-[#22c55e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <MessageCircle size={20} />
            <span className="font-semibold">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact SUR Hospital</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're here to help you with all your healthcare needs. Reach out to us anytime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-10">
        
        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a href="tel:+919876543210" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-500 transition-colors duration-300">
              <Phone className="text-red-500 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Call</h3>
            <p className="text-gray-600 mb-4">24/7 Emergency Support</p>
            <span className="text-red-500 font-semibold">+91 98765 43210</span>
          </a>
          
          <a href="#opd-timing" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-500 transition-colors duration-300">
              <Calendar className="text-blue-500 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Book Appointment</h3>
            <p className="text-gray-600 mb-4">Schedule your visit</p>
            <span className="text-blue-500 font-semibold">View OPD Timings</span>
          </a>
          
          <a href="https://maps.google.com" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-500 transition-colors duration-300">
              <Navigation className="text-green-500 group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Get Directions</h3>
            <p className="text-gray-600 mb-4">Find us on map</p>
            <span className="text-green-500 font-semibold">Open Maps</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#16a34a] mb-8 flex items-center gap-3">
              <MessageCircle className="text-[#22c55e]" size={28} />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                  <Phone className="text-red-500 group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Emergency Hotline</p>
                  <p className="text-gray-600 mb-1">Available 24/7 for urgent care</p>
                  <a href="tel:+919876543210" className="text-red-500 font-semibold hover:underline">+91 98765 43210</a>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <Phone className="text-blue-500 group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">General Inquiries</p>
                  <p className="text-gray-600 mb-1">For appointments and information</p>
                  <a href="tel:+919876543211" className="text-blue-500 font-semibold hover:underline">+91 98765 43211</a>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <Mail className="text-green-500 group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email Support</p>
                  <p className="text-gray-600 mb-1">Send us your queries</p>
                  <a href="mailto:info@surhospital.com" className="text-green-500 font-semibold hover:underline">info@surhospital.com</a>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                  <MapPin className="text-purple-500 group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Our Location</p>
                  <p className="text-gray-600 mb-1">Visit us at our hospital</p>
                  <p className="text-purple-500 font-semibold">Khangabok Awang Leikai<br />Thoubal, Manipur-795138</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                  <Clock className="text-teal-500 group-hover:text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Operating Hours</p>
                  <p className="text-gray-600 mb-1">We're here when you need us</p>
                  <p className="text-teal-500 font-semibold">24/7 Emergency Care<br />9:00 AM - 8:00 PM General OPD</p>
                </div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#16a34a] to-[#22c55e] rounded-xl text-white">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-300 fill-current" size={20} />
                ))}
                <span className="font-semibold ml-2">4.9/5</span>
              </div>
              <p className="text-white/90">"Excellent healthcare services with compassionate care. Highly recommended!"</p>
              <p className="text-white/70 text-sm mt-2">- Based on 500+ patient reviews</p>
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
