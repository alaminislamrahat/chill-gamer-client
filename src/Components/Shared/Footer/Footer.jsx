import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-white p-10 flex flex-col lg:flex-row justify-between items-center gap-6">
      {/* Logo and Branding Section */}
      <aside className="flex items-center gap-4">
        
        <div>
          <h2 className="text-3xl font-bold text-teal-500">Chill Gamer</h2>
          <p className="text-gray-400">
            Your ultimate destination for all things gaming.
          </p>
        </div>
      </aside>

      {/* Quick Links Section */}
      <nav>
        <h6 className="footer-title text-lg mb-4 text-teal-400 uppercase">Explore</h6>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="hover:text-teal-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-reviews" className="hover:text-teal-500 transition">
              All Reviews
            </Link>
          </li>
          <li>
            <Link to="/my-reviews" className="hover:text-teal-500 transition">
              My Reviews
            </Link>
          </li>
          <li>
            <Link to="/game-watchlist" className="hover:text-teal-500 transition">
              Game WatchList
            </Link>
          </li>
        </ul>
      </nav>

      {/* Address Section */}
      <div>
        <h6 className="footer-title text-lg mb-4 text-teal-400 uppercase">Contact Us</h6>
        <p className="text-gray-400">
          123 Gaming Street, Chill City, USA
        </p>
        <p className="text-gray-400">Email: contact@chillgamer.com</p>
      </div>

      {/* Social Media Section */}
      <div className="mt-6 flex gap-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-teal-500 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-teal-500 transition"
        >
          <FaYoutube />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-teal-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-teal-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-teal-500 transition"
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
