import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-6 pb-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">About ParkVue</h4>
            <p className="text-sm">ParkVue is a platform that connects hosts with guests, providing a seamless experience for renting parking spaces.</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">123 Park Avenue, City Name</p>
            <p className="text-sm">Email: info@parkvue.com</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gray-400 transition duration-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-300 hover:text-gray-400 transition duration-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-300 hover:text-gray-400 transition duration-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
