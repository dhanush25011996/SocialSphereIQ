import React from 'react';

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-6 justify-center">
        <div className="bg-black rounded-lg shadow-md text-center">
          <div className="p-5">
            <h3 className="text-xl text-white font-semibold mb-4">Influencer Marketing</h3>
            <p className="text-white">We connect brands with top influencers to create powerful marketing campaigns and drive engagement and brand awareness.</p>
          </div>
        </div>
        <div className='bg-black rounded-lg shadow-md text-center'>
          <div className="p-5">
            <h3 className="text-xl text-white font-semibold mb-4">Social Media Management</h3>
            <p className="text-white">We handle the day-to-day management of your social media channels, including content creation, scheduling, and engagement with your audience.</p>
          </div>
        </div>
        <div className="bg-black rounded-lg shadow-md text-center">
          <div className="p-5">
            <h3 className="text-xl text-white font-semibold mb-4">Content Creation</h3>
            <p className="text-white">Our team of talented content creators can produce high-quality photos, videos, and written content to help you tell your brand story effectively.</p>
          </div>
        </div>
        <div className="bg-black rounded-lg shadow-md text-center">
          <div className="p-5">
            <h3 className="text-xl text-white font-semibold mb-4">Campaign Strategy</h3>
            <p className="text-white">We develop comprehensive influencer marketing and social media campaigns tailored to your brand objectives and target audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
