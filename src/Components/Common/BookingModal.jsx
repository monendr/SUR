import React from 'react';
import { X, Phone, Calendar, Clock } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
            <Calendar className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3" style={{fontFamily: "'Playfair Display', serif"}}>
          Online Booking Coming Soon!
        </h3>

        {/* Message */}
        <p className="text-center text-muted-foreground mb-6 leading-relaxed">
          We're working on bringing you online appointment booking. For now, please call us directly to schedule your visit.
        </p>

        {/* Call to Action */}
        <div className="space-y-3">
          <a
            href="tel:+919362655350"
            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call: +91 9362655350
          </a>

          <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Available 24/7 for emergencies</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            You can also check our{' '}
            <a href="#opd-timing" onClick={onClose} className="text-primary font-semibold hover:underline">
              OPD timings
            </a>
            {' '}for doctor availability
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
