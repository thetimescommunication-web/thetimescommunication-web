import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set initial scroll state
    setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always use dark text and white background for better visibility
  const shouldUseLightText = false;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-60 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 shadow-md">
        <div className="container-custom">
          {/* Desktop Version */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <a
                href="tel:+919426916374"
                className="flex items-center space-x-2 hover:text-primary-200 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <FaPhone className="text-sm" />
                </div>
                <span className="font-medium">+91 94269 16374</span>
              </a>
              <a
                href="mailto:thetimescommunication@gmail.com"
                className="flex items-center space-x-2 hover:text-primary-200 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <FaEnvelope className="text-sm" />
                </div>
                <span className="font-medium">
                  thetimescommunication@gmail.com
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-white/80 text-sm font-medium mr-2">
                Follow Us:
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <a
                  href="tel:+919426916374"
                  className="flex items-center space-x-1 hover:text-primary-200 transition-colors duration-300"
                >
                  <FaPhone className="text-sm" />
                  <span className="text-sm font-medium">Call</span>
                </a>
                <a
                  href="mailto:thetimescommunication@gmail.com"
                  className="flex items-center space-x-1 hover:text-primary-200 transition-colors duration-300"
                >
                  <FaEnvelope className="text-sm" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                {socialLinks.slice(0, 3).map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all duration-300"
                  >
                    <social.icon className="text-xs" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="fixed left-0 right-0 top-[60px] z-50 bg-white shadow-lg transition-all duration-300">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/color-logo.png"
                alt="The Times Communication Logo"
                className="h-10 md:h-12 w-auto transition-all duration-300"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                    location.pathname === item.path
                      ? "text-primary-600"
                      : shouldUseLightText
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className={`btn-primary ${
                  shouldUseLightText
                    ? "bg-primary-600 hover:bg-primary-700"
                    : ""
                }`}
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                shouldUseLightText ? "text-white" : "text-gray-900"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible transform translate-y-0"
              : "opacity-0 invisible transform -translate-y-4"
          }`}
        >
          <div className="container-custom py-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-2 transition-colors duration-300 hover:text-primary-600 ${
                    location.pathname === item.path
                      ? "text-primary-600"
                      : "text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="btn-primary block text-center w-full"
                >
                  Get Quote
                </Link>
              </div>
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
