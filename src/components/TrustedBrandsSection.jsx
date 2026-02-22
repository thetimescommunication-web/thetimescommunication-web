import React from "react";

const TrustedBrandsSection = () => {
  // Define which logos need dark backgrounds (white/light logos)
  const darkBgLogos = [
    "mission-mangalam.png",
    "minister.png",
    "goverment-of-gujarat-logo.png",
  ];

  // Define logos that need colored backgrounds (government logos)
  const coloredBgLogos = ["Swach-Bharat-Abhiyan-Logo-Vector.svg-.png"];

  const getLogoContainerClass = (logoSrc) => {
    const logoFileName = logoSrc.split("/").pop();
    const needsDarkBg = darkBgLogos.some((darkLogo) =>
      logoFileName.includes(darkLogo)
    );
    const needsColoredBg = coloredBgLogos.some((coloredLogo) =>
      logoFileName.includes(coloredLogo)
    );

    if (needsColoredBg) {
      return "flex items-center justify-center w-24 h-16 sm:w-32 sm:h-20 bg-orange-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex-shrink-0";
    } else if (needsDarkBg) {
      return "flex items-center justify-center w-24 h-16 sm:w-32 sm:h-20 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex-shrink-0";
    } else {
      return "flex items-center justify-center w-24 h-16 sm:w-32 sm:h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex-shrink-0";
    }
  };

  // Define all logos in order
  const row1Logos = [
    {
      src: "/images/brnad-logo/653-6539668_smart-citi-logo-rock-werchter-hd-png-download.png",
      alt: "Smart City",
    },
    { src: "/images/brnad-logo/94-fm.png", alt: "94 FM" },
    { src: "/images/brnad-logo/aajivika.png", alt: "Aajivika" },
    { src: "/images/brnad-logo/AATOMIZE.png", alt: "Aatomize" },
    { src: "/images/brnad-logo/ADB-LOGO.png", alt: "ADB" },
    { src: "/images/brnad-logo/agri-science.png", alt: "Agri Science" },
    { src: "/images/brnad-logo/atal-sarovar.png", alt: "Atal Sarovar" },
    { src: "/images/brnad-logo/balaji-wefers.png", alt: "Balaji Wefers" },
    { src: "/images/brnad-logo/clarnigo-logo.png", alt: "Clarnigo" },
    { src: "/images/brnad-logo/collector.png", alt: "Collector" },
    { src: "/images/brnad-logo/Cube.png", alt: "Cube" },
    { src: "/images/brnad-logo/drashti-art-zone.png", alt: "Drashti Art Zone" },
    { src: "/images/brnad-logo/Gopal-namkeen.png", alt: "Gopal Namkeen" },
  ];

  const row2Logos = [
    { src: "/images/brnad-logo/gujarat-fish.png", alt: "Gujarat Fish" },
    { src: "/images/brnad-logo/gujarat-polish.png", alt: "Gujarat Polish" },
    { src: "/images/brnad-logo/gujarat-tourisom.png", alt: "Gujarat Tourism" },
    { src: "/images/brnad-logo/Gurukul-rajkot.png", alt: "Gurukul Rajkot" },
    { src: "/images/brnad-logo/LNT.png", alt: "LNT" },
    { src: "/images/brnad-logo/maahi-milk.png", alt: "Maahi Milk" },
    { src: "/images/brnad-logo/minister.png", alt: "Minister" },
    { src: "/images/brnad-logo/mission-mangalam.png", alt: "Mission Mangalam" },
    { src: "/images/brnad-logo/noble.png", alt: "Noble" },
    { src: "/images/brnad-logo/rmc.png", alt: "RMC" },
    { src: "/images/brnad-logo/sadbhavna.png", alt: "Sadbhavna" },
    { src: "/images/brnad-logo/sport-authority.png", alt: "Sport Authority" },
    {
      src: "/images/brnad-logo/Swach-Bharat-Abhiyan-Logo-Vector.svg-.png",
      alt: "Swach Bharat Abhiyan",
    },
    { src: "/images/brnad-logo/vibrant-gujarat.png", alt: "Vibrant Gujarat" },
  ];

  return (
    <section className="section-padding bg-white" id="trusted-brands">
      <div className="container-custom">
        <div className="text-center mb-12 animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            TRUSTED BY <span className="text-gradient">LEADING BRANDS</span>
          </h3>
          <p className="text-gray-600">Excellence recognized by industry leaders</p>
        </div>

        {/* First Row - Scrolling Left */}
        <div className="relative overflow-hidden mb-8 animate-fade-in h-16 sm:h-20">
          <div className="absolute top-0 left-0 flex items-center space-x-4 sm:space-x-8 min-w-max pr-4 sm:pr-8 animate-marquee-left">
            {row1Logos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className={getLogoContainerClass(logo.src)}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain p-1 sm:p-2"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 flex items-center space-x-4 sm:space-x-8 min-w-max pr-4 sm:pr-8 animate-marquee-left-2">
            {row1Logos.map((logo, index) => (
              <div
                key={`row1-duplicate-${index}`}
                className={getLogoContainerClass(logo.src)}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain p-1 sm:p-2"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="relative overflow-hidden animate-fade-in h-16 sm:h-20">
          <div className="absolute top-0 left-0 flex items-center space-x-4 sm:space-x-8 min-w-max pr-4 sm:pr-8 animate-marquee-right">
            {row2Logos.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className={getLogoContainerClass(logo.src)}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain p-1 sm:p-2"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 flex items-center space-x-4 sm:space-x-8 min-w-max pr-4 sm:pr-8 animate-marquee-right-2">
            {row2Logos.map((logo, index) => (
              <div
                key={`row2-duplicate-${index}`}
                className={getLogoContainerClass(logo.src)}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain p-1 sm:p-2"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;
