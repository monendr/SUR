import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} SUR Hospital. All rights reserved.</span>
        <span>Built with care.</span>
      </div>
    </footer>
  );
};

export default Footer;

