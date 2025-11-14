import React, { useState } from 'react';
import { Heart, Stethoscope, Users, Activity, Shield, Clock, ArrowRight, Star } from 'lucide-react';

const Service = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    { 
      icon: Clock,
      title: '24/7 Emergency', 
      desc: 'Round-the-clock emergency care with expert staff and advanced equipment.',
      features: ['Trauma Care', 'Critical Care', 'Ambulance Service'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      link: '/emergency'
    },
    { 
      icon: Activity,
      title: 'Advanced Diagnostics', 
      desc: 'State-of-the-art imaging and laboratory services for accurate diagnosis.',
      features: ['X-Ray & CT Scan', 'Blood Tests', 'ECG & Echo'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      link: '/diagnostics'
    },
    { 
      icon: Stethoscope,
      title: 'Outpatient Care', 
      desc: 'Comprehensive consultations and follow-ups with experienced doctors.',
      features: ['General Medicine', 'Specialist Consultation', 'Health Checkups'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      link: '/outpatient'
    },
    { 
      icon: Heart,
      title: 'Surgical Services', 
      desc: 'Advanced surgical procedures with modern equipment and expert surgeons.',
      features: ['General Surgery', 'Orthopedic Surgery', 'Minor Procedures'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      link: '/surgery'
    },
    { 
      icon: Users,
      title: 'Maternity Care', 
      desc: 'Complete maternal and child healthcare services with dedicated support.',
      features: ['Prenatal Care', 'Delivery Services', 'Postnatal Care'],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      link: '/maternity'
    },
    { 
      icon: Shield,
      title: 'Preventive Care', 
      desc: 'Health screening and vaccination programs for disease prevention.',
      features: ['Health Screening', 'Vaccinations', 'Wellness Programs'],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      link: '/preventive'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#22c55e] text-white px-4 py-2 rounded-full mb-4">
            <Heart size={18} />
            <span className="font-semibold">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#16a34a] mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of medical services with state-of-the-art facilities and experienced healthcare professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-2xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#16a34a] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="text-[#22c55e]" size={14} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={service.link}
                    className={`group/btn inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                  </a>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.color} rounded-2xl transition-all duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#16a34a] to-[#22c55e] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Medical Attention?</h3>
            <p className="mb-6 opacity-90">Our emergency team is available 24/7 for urgent medical care.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-white text-[#16a34a] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <Clock size={20} />
                Call Emergency: +91 98765 43210
              </a>
              <a
                href="#opd-timing"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#16a34a] transform hover:scale-105 transition-all duration-300"
              >
                <Activity size={20} />
                View OPD Timings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

