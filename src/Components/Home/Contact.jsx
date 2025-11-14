import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[#22c55e] text-sm font-semibold mb-2 uppercase">Get in Touch</p>
        <h2 className="text-4xl font-bold text-[#16a34a] mb-12">Contact</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#dcfce7] p-8 rounded-lg">
            <Phone className="mx-auto mb-4 text-[#16a34a]" size={40} />
            <h3 className="font-bold text-[#16a34a] mb-2">EMERGENCY</h3>
            <p className="text-sm text-gray-700">(234) 123 456 7890<br/>(234) 123 456 7890</p>
          </div>
          <div className="bg-[#16a34a] p-8 rounded-lg text-white">
            <MapPin className="mx-auto mb-4" size={40} />
            <h3 className="font-bold mb-2">LOCATION</h3>
            <p className="text-sm">Khangabok Awang Leikai<br/>Thoubal, Manipur-795138</p>
          </div>
          <div className="bg-[#dcfce7] p-8 rounded-lg">
            <Mail className="mx-auto mb-4 text-[#16a34a]" size={40} />
            <h3 className="font-bold text-[#16a34a] mb-2">EMAIL</h3>
            <p className="text-sm text-gray-700">info@surhospital.com<br/>support@surhospital.com</p>
          </div>
          <div className="bg-[#dcfce7] p-8 rounded-lg">
            <Clock className="mx-auto mb-4 text-[#16a34a]" size={40} />
            <h3 className="font-bold text-[#16a34a] mb-2">WORKING HOURS</h3>
            <p className="text-sm text-gray-700">Mon-Sat 09:00-20:00<br/>Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;