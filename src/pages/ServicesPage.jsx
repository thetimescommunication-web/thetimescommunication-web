import React from "react";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaGraduationCap,
  FaBuilding,
  FaTv,
  FaCamera,
  FaShare,
  FaMusic,
  FaHome,
  FaCheck,
  
} from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      icon: FaBuilding,
      title: "Corporate Film",
      description:
        "Create professional corporate films that communicate your company profile, culture, strengths, and vision with clarity and impact.",
      features: [
        "Company profile & messaging",
        "Storyboarding & scripting support",
        "Professional cinematography",
        "Interviews & voiceover integration",
        "HD / 4K final delivery",
      ],
      image: "/images/services/corporate.jpeg",
    },
    {
      icon: FaVideo,
      title: "Documentary Film",
      description:
        "Craft compelling documentary films that tell authentic stories with depth, emotion, and cinematic storytelling.",
      features: [
        "Concept development & research",
        "Scriptwriting & narrative structuring",
        "Professional cinematography",
        "Interview & voiceover integration",
        "HD / 4K final delivery",
      ],
      image: "/images/services/documentry.PNG",
    },
    {
      icon: FaGraduationCap,
      title: "Government Documentaries",
      description:
        "Produce informative and impactful government documentaries that communicate public initiatives with clarity and credibility.",
      features: [
        "Policy-focused storytelling",
        "Scriptwriting & content research",
        "Professional voiceover support",
        "On-location shooting",
        "Broadcast-quality output",
      ],
      image: "/images/services/goverment_documentries.png",
    },
    {
      icon: FaTv,
      title: "Brand Story Video Film",
      description:
        "Bring your brand's journey to life through powerful story-driven films that connect emotionally with your audience.",
      features: [
        "Brand strategy & story development",
        "Scriptwriting & creative direction",
        "Cinematic filming & lighting",
        "Professional voiceover & music",
        "Multiple revisions included",
      ],
      image: "/images/services/brand_story1.PNG",
    },
    {
      title: "Real Estate Walkthrough & Property Films",
      description:
        "Create immersive property walkthrough films that showcase spaces, design, and lifestyle with cinematic precision.",
      icon: FaHome,
      features: [
        "Property walkthrough filming",
        "Aerial drone shots (if required)",
        "Professional editing & color grading",
        "Background music & titles",
        "HD / 4K quality output",
      ],
      image: "/images/services/real_estate.PNG",
    },
    {
      icon: FaCamera,
      title: "Hospital & Healthcare Institutional Videos",
      description:
        "Develop trust-building healthcare films that highlight expertise, infrastructure, and patient-centric care.",
      features: [
        "Institutional story planning",
        "Doctor & patient interview filming",
        "Scriptwriting & voiceover support",
        "Clean, professional visual treatment",
        "Multiple revision rounds",
      ],
      image: "/images/services/hosptal_helthcare.png",
    },
    {
      icon: FaShare,
      title: "Educational Institution Film",
      description:
        "Produce engaging institutional films that showcase academic excellence, campus life, and educational values.",
      features: [
        "Campus & classroom coverage",
        "Scriptwriting & concept planning",
        "Student & faculty interviews",
        "Professional editing & graphics",
        "High-definition final delivery",
      ],
      image: "/images/services/educational.PNG",
    },
    {
      icon: FaMusic,
      title: "Promotional & Marketing Videos",
      description:
        "Design high-impact promotional videos that boost visibility, engagement, and brand recall across platforms.",
      features: [
        "Creative concept & scripting",
        "Brand-aligned visuals",
        "Motion graphics & music",
        "Platform-ready formats",
        "Multiple revisions included",
      ],
      image: "/images/services/promotional_marketing.PNG",
    },
    {
      icon: FaHome,
      title: "Social Media Video Content",
      description:
        "Create scroll-stopping social media videos optimized for reach, engagement, and platform performance.",
      features: [
        "Short-form video creation",
        "Trend & platform optimization",
        "Motion graphics & captions",
        "Fast turnaround time",
        "HD vertical & horizontal formats",
      ],
      image: "/images/services/social_media.png",
    },
    {
      icon: FaVideo,
      title: "Digital Media Ad Film",
      description:
        "Produce digital-first ad films crafted for online platforms to capture attention fast and drive strong performance.",
      features: [
        "Digital-first creative & scripting",
        "Platform-specific durations (6s / 15s / 30s)",
        "High-impact edits & motion graphics",
        "Subtitles / captions optimized for mobile",
        "Multiple revision rounds",
      ],
      image: "/images/services/tv_digital_add.png",
    },
    {
      icon: FaHome,
      title: "Product Photography & Video",
      description:
        "Create stunning product visuals and videos that enhance appeal and drive purchasing decisions.",
      features: [
        "Product-focused lighting setup",
        "Creative angles & compositions",
        "Studio-quality photography",
        "Promotional product videos",
        "Retouched HD images & videos",
      ],
      image: "/images/services/product_photography.png",
    },
    {
      icon: FaTv,
      title: "TV Ad Film",
      description:
        "Produce impactful TV ad films designed to capture attention and deliver strong brand messaging with broadcast-ready quality.",
      features: [
        "TVC concept & script development",
        "Professional filming & direction",
        "Studio / on-location production",
        "Voiceover, music & sound design",
        "Broadcast-ready master delivery",
      ],
      image: "/images/services/tv_digital_add.png",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start with understanding your goals, target audience, and project requirements.",
    },
    {
      step: "02",
      title: "Concept Development",
      description:
        "Our creative team develops concepts and scripts tailored to your brand message.",
    },
    {
      step: "03",
      title: "Production",
      description:
        "Professional filming with state-of-the-art equipment and experienced crew.",
    },
    {
      step: "04",
      title: "Post-Production",
      description:
        "Expert editing, color grading, sound design, and visual effects to bring your vision to life.",
    },
    {
      step: "05",
      title: "Delivery & Support",
      description:
        "Final delivery in your preferred formats with ongoing support for any additional needs.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in text-justify break-words" 
            style={{ hyphens: 'auto', WebkitHyphens: 'auto', msHyphens: 'auto' }}
          >
            Comprehensive video production services to help your business grow
            and engage with your audience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="text-2xl text-primary-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>

                  <p 
                    className="text-lg text-gray-600 mb-6 leading-relaxed text-justify break-words" 
                    style={{ hyphens: 'auto', WebkitHyphens: 'auto', msHyphens: 'auto' }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  

                  
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.target.src = `https://via.placeholder.com/600x400/009292/ffffff?text=${encodeURIComponent(service.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Production Process
            </h2>
            <p 
              className="text-lg text-gray-600 max-w-2xl mx-auto text-justify break-words" 
              style={{ hyphens: 'auto', WebkitHyphens: 'auto', msHyphens: 'auto' }}
            >
              A streamlined approach that ensures quality results and client
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p 
                  className="text-gray-600 text-sm leading-relaxed text-justify break-words" 
                  style={{ hyphens: 'auto', WebkitHyphens: 'auto', msHyphens: 'auto' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Ready to Get Started?
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in text-justify break-words" 
            style={{ hyphens: 'auto', WebkitHyphens: 'auto', msHyphens: 'auto' }}
          >
            Let's discuss your project and create a video that drives results
            for your business.
          </p>
          <div className="animate-bounce-in">
            <Link
              to="/contact"
              className="btn-outline hover:bg-white hover:text-primary-600 text-lg px-8 py-4 mr-4"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="btn-outline hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
