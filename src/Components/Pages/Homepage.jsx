import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Home/Hero';
import Service from '../Home/Service';
import Specialties from '../Home/Specialties';
import Doctors from '../Home/Doctors';
import OPDTiming from '../Home/OPDTiming';
import Contact from '../Home/Contact';
import Footer from '../Footer/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Service />
        <Specialties />
        <Doctors />
        <OPDTiming />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;

