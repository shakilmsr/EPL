import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-blue rounded-lg">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-brand-gray">EPL</span>
                <span className="text-xl font-bold text-brand-blue">Solutions</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </Link>
                <Link to="/services" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link to="/blog" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                  Blog
                </Link>
                <Link to="/contact" className="bg-brand-orange text-white hover:bg-opacity-90 px-4 py-2 rounded-md text-sm font-medium">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;