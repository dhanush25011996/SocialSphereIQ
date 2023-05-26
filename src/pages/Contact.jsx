import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10">
      <div className="max-w-sm px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form className='w-[335px]'>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
            <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none h-32 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </form>
      </div>
      <div className="mt-8 text-center text-gray-700">
        <p className="mb-2">Mail: socialsphereiq@gmail.com</p>
        <p className="mb-2">Phone: +91-9750206706</p>
        <p className="mb-2">Instagram: <a href="https://www.instagram.com/socialsphereiq/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">https://www.instagram.com/socialsphereiq/</a></p>
      </div>
    </div>
  );
}

export default Contact;
