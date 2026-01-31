import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Corporate Film",
    "Documentary Film",
    "Government Documentaries",
    "Brand Story Video Film",
    "Real Estate Walkthrough & Property Films",
    "Hospital & Healthcare Institutional Videos",
    "Educational Institution Film",
    "Promotional & Marketing Videos",
    "Social Media Video Content",
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="/images/white-logo.png"
                  alt="The Times Communication Logo"
                  className="h-12 w-auto mb-4"
                  loading="lazy"
                />
                <p className="text-gray-300 leading-relaxed">
                  The Times Communication means REAL. We place transparency at
                  the center of everything we do. We are known for the fact that
                  we never compromise on quality, and we speak the truth.
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to="/services"
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      • {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>
                      121, 122 - Arthik Bhavan, Near Pinevinta Hotel, Gondal
                      Road, Rajkot - 360004 Gujarat India
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary-400 flex-shrink-0" />
                  <a
                    href="tel:+919426916374"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    +91 94269 16374
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:films@thetimescommunication.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    films@thetimescommunication.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} The Times Communication. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
