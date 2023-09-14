import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg mb-6">
            Unique Piped Gas specializes in various aspects of energy solutions.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Unique Piped Gas was co-founded in 1985 by Mr. Kirti Kamble, the director. It was established with the dream of "providing energy through quality and safety" to help the customers.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Bharat Petroleum came forward to participate and support this noble motive. Over the years, Unique Piped Gas has grown into an essential supplier of Bharat Petroleum products and is equipped with the necessary engineering and transportation solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
