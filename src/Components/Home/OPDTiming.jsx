import React from 'react';
import { Clock, Calendar, Phone, Stethoscope } from 'lucide-react';
import drSomenImage from '../../assets/DrSomen.jpeg';

const OPDTiming = () => {
  const doctors = [
    {
      name: "Dr. L. Somenkumar Singh",
      degree: "MD - Gynae",
      specialty: "Obstetrics & Gynecology",
      schedule: [
        { day: "Tuesday", time: "2:00 PM - 5:00 PM" },
        { day: "Wednesday", time: "5:00 PM - 12:00 PM" },
        { day: "Sunday", time: "9:00 AM - 12:00 PM" }
      ],
      featured: true
    }
  ];

  const specialists = [
    {
      specialty: "Paediatric Doctor",
      icon: "👶",
      availability: "Available",
      schedule: [
        { day: "Tuesday, Friday", time: "Monday to Saturday" }
      ]
    },
    {
      specialty: "Dermatologist (Skin Doctor)",
      icon: "🔬",
      availability: "Available",
      schedule: [
        { day: "1st Sunday", time: "10:00 AM - 12:00 PM" },
        { day: "3rd Sunday", time: "10:00 AM - 12:00 PM" }
      ]
    },
    {
      specialty: "Surgery Doctor",
      icon: "⚕️",
      availability: "Available",
      schedule: [
        { day: "Every Sunday", time: "2:00 PM - 5:00 PM" }
      ]
    },
    {
      specialty: "Ortho and Physio",
      icon: "🦴",
      availability: "Available",
      schedule: [
        { day: "Monday to Saturday", time: "2:00 PM - 3:30 PM" }
      ]
    }
  ];

  return (
    <section id="opd-timing" className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full mb-6 shadow-lg">
            <Clock size={20} className="animate-pulse" />
            <span className="font-semibold text-sm tracking-wide">OPD TIMINGS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            Doctor Availability Schedule
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our experienced specialists are available at scheduled times. Book your appointment today.
          </p>
        </div>

        {/* Featured Doctor - Larger Card */}
        {doctors.map((doctor, index) => (
          <div key={index} className="mb-12 bg-gradient-to-br from-primary/5 to-white rounded-3xl shadow-xl p-8 md:p-10 border border-primary/20">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg">
                  <img
                    src={drSomenImage}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                    {doctor.name}
                  </h3>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {doctor.degree}
                  </span>
                </div>
                <p className="text-primary font-semibold text-lg mb-1">{doctor.specialty}</p>
                <p className="text-muted-foreground text-sm">Senior Consultant • 10+ Years Experience</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {doctor.schedule.map((slot, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-primary w-5 h-5" />
                    <span className="font-semibold text-foreground">{slot.day}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary/60 w-4 h-4" />
                    <span className="text-sm font-medium text-muted-foreground">{slot.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Specialist Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((specialist, index) => (
            <div key={index} className="medical-card group">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {specialist.icon}
                </div>
                <h4 className="font-bold text-foreground text-lg mb-2 leading-tight">
                  {specialist.specialty}
                </h4>
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {specialist.availability}
                </span>
              </div>

              <div className="space-y-3">
                {specialist.schedule.map((slot, idx) => (
                  <div key={idx} className="bg-secondary/50 rounded-xl p-3 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Calendar className="text-primary w-4 h-4" />
                      <span className="font-medium text-foreground text-sm">{slot.day}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="text-muted-foreground w-4 h-4" />
                      <span className="text-xs font-medium text-muted-foreground">{slot.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Notice */}
        <div className="mt-16 bg-gradient-to-r from-primary via-primary to-primary/90 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <Phone className="w-5 h-5 animate-pulse" />
              <span className="font-semibold text-sm">24/7 Emergency</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{fontFamily: "'Playfair Display', serif"}}>
              Emergency Services Available Round the Clock
            </h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Our dedicated medical team is available 24/7 for emergencies. Don't hesitate to reach out.
            </p>
            <a
              href="tel:+919362655350"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-foreground/95 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone size={22} />
              <span>Call Now: +91 9362655350</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OPDTiming;
