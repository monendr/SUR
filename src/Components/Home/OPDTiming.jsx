import React from 'react';
import { Clock, User, Calendar, Phone } from 'lucide-react';

const OPDTiming = () => {
  const doctors = [
    {
      name: "Dr. L. SOMENKUMAR SINGH",
      specialty: "OBS & GYNAE",
      schedule: [
        { day: "TUESDAY", time: "2 PM TO 5PM" },
        { day: "WEDNESDAY", time: "12 PM TO 5PM" },
        { day: "SATURDAY", time: "12 PM TO 5PM" }
      ]
    },
    {
      name: "Dr. L. ZIKPUII",
      specialty: "OBS & GYNAE",
      schedule: [
        { day: "THURSDAY", time: "12PM TO 5PM" },
        { day: "FRIDAY", time: "12PM TO 3PM" }
      ]
    },
    {
      name: "Dr. N. MANGANTHOI MEITEI",
      specialty: "OBS & GYNAE",
      schedule: [
        { day: "MONDAY", time: "12PM TO 5PM" },
        { day: "FRIDAY", time: "12PM TO 5PM" }
      ]
    }
  ];

  const specialists = [
    {
      specialty: "MEDICINE DOCTOR",
      schedule: [
        { day: "TUESDAY", time: "5pm to 7pm" },
        { day: "THURSDAY", time: "5pm to 7pm" },
        { day: "FRIDAY", time: "5pm to 7pm" }
      ]
    },
    {
      specialty: "PAEDIATRIC DOCTOR",
      schedule: [
        { day: "MONDAY TO FRIDAY", time: "10am to 2pm" }
      ]
    },
    {
      specialty: "SURGERY DOCTOR",
      schedule: [
        { day: "TUESDAY", time: "3pm to 6pm" }
      ]
    },
    {
      specialty: "ORTHO DOCTOR",
      schedule: [
        { day: "MONDAY to SATURDAY", time: "5pm to 7pm" }
      ]
    },
    {
      specialty: "ORTHO & PMR DOCTOR",
      schedule: [
        { day: "MONDAY to SATURDAY", time: "3pm to 6pm" }
      ]
    },
    {
      specialty: "ENT DOCTOR-01",
      schedule: [
        { day: "SUNDAY", time: "11am to 3pm" }
      ]
    },
    {
      specialty: "ENT DOCTOR-02 (on call)",
      schedule: [
        { day: "MONDAY TO SATURDAY", time: "1pm to 4pm" }
      ]
    }
  ];

  return (
    <section id="opd-timing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#16a34a] text-white px-6 py-2 rounded-full mb-4">
            <Clock size={20} />
            <span className="font-semibold">OPD AVAILABLE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#16a34a] mb-4">
            Doctor Availability & Timing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced doctors are available at scheduled times. Please check the timing before your visit.
          </p>
        </div>

        {/* Uniform Doctor Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Named Doctors */}
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border-l-4 border-[#22c55e] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center">
                  <User className="text-[#16a34a]" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#16a34a] text-lg leading-tight">{doctor.name}</h4>
                  <p className="text-[#22c55e] font-semibold text-sm">{doctor.specialty}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {doctor.schedule.map((slot, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-[#16a34a]" />
                        <span className="font-medium text-gray-700 text-sm">{slot.day}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-[#22c55e]" />
                        <span className="font-semibold text-[#16a34a] text-sm">{slot.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Specialist Doctors */}
          {specialists.map((specialist, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border-l-4 border-[#22c55e] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#22c55e]/10 rounded-full flex items-center justify-center">
                  <User className="text-[#16a34a]" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#16a34a] text-lg leading-tight">{specialist.specialty}</h4>
                  {specialist.specialty.includes('on call') && (
                    <div className="flex items-center gap-1 mt-1">
                      <Phone size={12} className="text-[#22c55e]" />
                      <span className="text-xs text-[#22c55e] font-medium">Available on Call</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-3">
                {specialist.schedule.map((slot, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-[#16a34a]" />
                        <span className="font-medium text-gray-700 text-sm">{slot.day}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-[#22c55e]" />
                        <span className="font-semibold text-[#16a34a] text-sm">{slot.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 bg-gradient-to-r from-[#16a34a] to-[#22c55e] rounded-lg p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">EMERGENCY DOCTORS AVAILABLE 24X7</h3>
          <p className="text-green-100">For emergency cases, our doctors are available round the clock. Contact us immediately for urgent medical assistance.</p>
          <div className="mt-4">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 bg-white text-[#16a34a] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              <Phone size={18} />
              Emergency: +91 234 567 8900
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OPDTiming;
