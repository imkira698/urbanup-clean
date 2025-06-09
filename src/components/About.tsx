import React from 'react';

const About = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet <span className="text-green-400">UrbanUP.</span>
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              UrbanUP helps you get tasks done in other cities without being 
              there yourself. Post personal tasks like document pickups, site visits, 
              or parcel deliveries. Verified local UrbanMates handle them for you.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              Save time, avoid travel, and get things done 
              remotely, safely, and on your terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;