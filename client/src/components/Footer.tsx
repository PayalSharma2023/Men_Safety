import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="relative w-full bg-black text-white px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Tagline */}
        <div className="flex flex-col gap-2">
            <img src="/logo.png" alt="" className='w-20 object-cover p-2'/>
          <h1 className="text-2xl font-bold">Armer</h1>
          <p className="text-gray-400 text-sm max-w-xs">
            Creating a safe space where men can speak up and get the support they deserve.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold mb-1">Quick Links</h2>
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/stories" className="hover:text-gray-300">Stories</Link>
          <Link to="/community" className="hover:text-gray-300">Community</Link>
          <Link to="/therapist" className="hover:text-gray-300">Therapists</Link>
        </div>

        {/* Contact / Social */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold mb-1">Connect</h2>
          <a href="mailto:support@yoursite.com" className="hover:text-gray-300">support@armer.com</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Armer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
