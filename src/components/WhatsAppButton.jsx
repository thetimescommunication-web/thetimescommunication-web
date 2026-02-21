import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  
  // Hide on contact page since it already has WhatsApp functionality
  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-end">
      {/* Text that appears on hover */}
      <div 
        className={`mr-3 bg-black text-white px-3 py-2 rounded-lg shadow-lg transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <p className="text-base font-semibold whitespace-nowrap">Chat with us on WhatsApp!</p>
        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black rotate-45"></div>
      </div>
      
      <a
        href="https://wa.me/919426916374?text=Hello%20The%20Times%20Communication!%20I%20would%20like%20to%20discuss%20a%20video%20production%20project%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 hover:rotate-12 animate-pulse"
        aria-label="Contact us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
