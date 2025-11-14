import React from 'react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-[#1e3a8a] mb-8">Terms & Conditions</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-600 mb-4">
            Welcome to SUR Hospital. These terms and conditions outline the rules and regulations for the use of our services.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Medical Services</h2>
          <p className="text-gray-600 mb-4">
            Our hospital provides medical services subject to these terms. By using our services, you agree to these conditions.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Privacy</h2>
          <p className="text-gray-600">
            We respect your privacy and are committed to protecting your personal information in accordance with applicable laws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
