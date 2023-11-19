// src/pages/info.tsx

import React from 'react';

import Layout from '../../components/layout';

const Info: React.FC = () => {
  return (
    <Layout id='about'>
      <div className="bg-gray-50 py-12 h-full">
        <div className="flex flex-col items-center justify-around h-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
              Meet Your Compassionate Psychologist
            </h2>
          </div>

          <div className="text-center mb-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">
              Hello, I'm [Psychologist's Name], a licensed psychologist dedicated to helping individuals find their path to emotional well-being and personal growth.
            </p>
          </div>

          <div className="text-center mb-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">
              With over [X years] of experience in the field, I specialize in [List of Specialties] and have helped countless clients navigate life's challenges. My approach to therapy is rooted in [Therapeutic Approach], which is known for its effectiveness in promoting lasting change and personal transformation.
            </p>
          </div>

          <div className="text-center mb-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">
              I believe that therapy is a collaborative journey, and I am here to support you every step of the way. Your privacy and well-being are my top priorities, and I adhere to the highest ethical standards.
            </p>
          </div>

          <div className="text-center mb-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">
              I hold [Degrees and Certifications], and I am a proud member of the [Professional Organization], ensuring that you receive the best care.
            </p>
          </div>

          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Contacta-me
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Info;
