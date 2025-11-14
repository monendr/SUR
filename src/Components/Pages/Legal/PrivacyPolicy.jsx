import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-[#1e3a8a] mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-600 mb-4">
            At SUR Hospital, we are committed to protecting your privacy and personal information.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information necessary to provide you with quality medical care and services.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            Your information is used solely for medical treatment, billing, and healthcare operations.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your personal information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
