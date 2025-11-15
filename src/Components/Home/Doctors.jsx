import React from 'react';
import { User, Award, Clock, Phone } from 'lucide-react';
import drSomenImage from '../../assets/DrSomen.jpeg';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. L. SOMENKUMAR SINGH',
      dept: 'OBS & GYNAE',
      image: drSomenImage,
      experience: '10+ Years',
      availability: 'Mon-Sat'
    },
    { 
      name: 'Dr. L. ZIKPUII', 
      dept: 'OBS & GYNAE',
      image: '/api/placeholder/300/300', // Placeholder for doctor image
      experience: '8+ Years',
      availability: 'Tue-Fri'
    },
    { 
      name: 'Dr. N. MANGANTHOI MEITEI', 
      dept: 'OBS & GYNAE',
      image: '/api/placeholder/300/300', // Placeholder for doctor image
      experience: '12+ Years',
      availability: 'Mon-Sat'
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#22c55e] text-white px-4 py-2 rounded-full mb-4">
            <User size={18} />
            <span className="font-semibold">Our Doctors</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#16a34a] mb-4">
            Meet Our Expert Medical Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced doctors are dedicated to providing the highest quality healthcare with compassion and expertise.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={doctor.name} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Doctor Image */}
              <div className="relative h-64 bg-gradient-to-br from-[#16a34a] to-[#22c55e] overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a colored background with initials if image fails
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback for missing image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#16a34a] to-[#22c55e] flex items-center justify-center text-white text-4xl font-bold" style={{display: 'none'}}>
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Contact Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-[#16a34a] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <Phone size={18} />
                  </button>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#16a34a] mb-2 group-hover:text-[#22c55e] transition-colors duration-300">
                  {doctor.name}
                </h3>
                <p className="text-[#22c55e] font-semibold mb-4">{doctor.dept}</p>
                
                {/* Doctor Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Award className="text-[#16a34a]" size={16} />
                    <span className="text-sm">{doctor.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="text-[#16a34a]" size={16} />
                    <span className="text-sm">Available: {doctor.availability}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#16a34a] to-[#22c55e] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need to Consult Our Doctors?</h3>
            <p className="mb-6 opacity-90">Book an appointment with our experienced medical professionals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-white text-[#16a34a] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <Phone size={20} />
                Call for Appointment
              </a>
              <a
                href="#opd-timing"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#16a34a] transform hover:scale-105 transition-all duration-300"
              >
                <Clock size={20} />
                Check OPD Timings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;

