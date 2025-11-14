import React from 'react';

const Specialties = () => {
  const items = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Oncology',
    'Dermatology',
  ];

  return (
    <section id="specialties" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#16a34a]">Our Specialties</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((name) => (
            <div key={name} className="bg-white rounded-xl shadow p-6 text-gray-700 font-medium">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;

