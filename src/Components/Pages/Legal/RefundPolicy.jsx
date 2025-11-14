import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-[#1e3a8a] mb-8">Refund Policy</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-600 mb-4">
            SUR Hospital's refund policy ensures fair treatment for all patients regarding medical service payments.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Medical Services</h2>
          <p className="text-gray-600 mb-4">
            Refunds for medical services are considered on a case-by-case basis and subject to medical ethics guidelines.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Consultation Fees</h2>
          <p className="text-gray-600 mb-4">
            Consultation fees are generally non-refundable once the service has been provided.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            For refund requests, please contact our billing department with your case details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
