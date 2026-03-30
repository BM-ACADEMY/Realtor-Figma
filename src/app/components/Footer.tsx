import { Link } from 'react-router';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { realtorInfo } from '../data/mockData';

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
            >
              <span className="text-[#E63946]">Red</span>
              <span className="text-white">earth properties</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner in finding the perfect property in Chennai.
            </p>
            <div className="flex gap-4">
              <a
                href={realtorInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E63946] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={realtorInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E63946] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={realtorInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E63946] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={realtorInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E63946] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#E63946] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-gray-400 hover:text-[#E63946] transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-gray-400 hover:text-[#E63946] transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/#testimonials"
                  className="text-gray-400 hover:text-[#E63946] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-gray-400 hover:text-[#E63946] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Services
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/properties" className="hover:text-[#E63946] transition-colors">Buy Property</Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-[#E63946] transition-colors">Sell Property</Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-[#E63946] transition-colors">Rent Property</Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-[#E63946] transition-colors">Property Management</Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-[#E63946] transition-colors">Investment Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-1" />
                <a href={`tel:${realtorInfo.phone}`} className="hover:text-white transition-colors">{realtorInfo.phone}</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-1" />
                <a href={`mailto:${realtorInfo.email}`} className="hover:text-white transition-colors">{realtorInfo.email}</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-1" />
                <span>{realtorInfo.address || 'Chennai, Tamil Nadu, India'}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Redearth properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
