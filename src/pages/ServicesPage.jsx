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
      icon: FaVideo,
      title: "AI Animated Videos",
      description:
        "Create engaging animated explainer videos using cutting-edge AI technology to simplify complex concepts and boost audience engagement.",
      features: [
        "Custom character design",
        "Professional voiceover",
        "Script writing included",
        "Multiple revisions",
        "HD quality output",
      ],
      startingPrice: "$2,500",
      duration: "2-3 weeks",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&q=80",
    },
    {
      icon: FaGraduationCap,
      title: "E-Learning Videos",
      description:
        "Educational video content designed to enhance learning experiences with professional production quality and interactive elements.",
      features: [
        "Interactive elements",
        "Custom curriculum design",
        "Multi-format delivery",
        "Assessment integration",
        "Mobile-friendly",
      ],
      startingPrice: "$3,000",
      duration: "3-4 weeks",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80",
    },
    {
      icon: FaBuilding,
      title: "Corporate Videos",
      description:
        "Professional corporate videos that effectively communicate your brand message, company values, and business objectives.",
      features: [
        "Brand storytelling",
        "Professional interviews",
        "Office cinematography",
        "Music and sound design",
        "Multiple format delivery",
      ],
      startingPrice: "$4,000",
      duration: "3-5 weeks",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
    },
    {
      icon: FaTv,
      title: "TV & Digital Films",
      description:
        "High-quality commercials and digital advertisements for television and online platforms that drive results.",
      features: [
        "Concept development",
        "Professional casting",
        "Location scouting",
        "Post-production",
        "Media placement guidance",
      ],
      startingPrice: "$8,000",
      duration: "4-6 weeks",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&q=80",
    },
    {
      icon: FaCamera,
      title: "Product Photography & Videos",
      description:
        "Stunning product visuals that showcase your products in the best light to drive sales and enhance brand image.",
      features: [
        "Studio photography",
        "Lifestyle shots",
        "360-degree videos",
        "E-commerce optimization",
        "Social media formats",
      ],
      startingPrice: "$1,500",
      duration: "1-2 weeks",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80",
    },
    {
      icon: FaShare,
      title: "Social Media Promo Videos",
      description:
        "Eye-catching promotional videos optimized for social media platforms to maximize engagement and reach.",
      features: [
        "Platform optimization",
        "Trending formats",
        "Quick turnaround",
        "Multiple sizes",
        "Engagement analytics",
      ],
      startingPrice: "$800",
      duration: "1 week",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&q=80",
    },
    {
      icon: FaMusic,
      title: "Music & Film Production",
      description:
        "Complete music video and film production services from concept to final delivery with cinematic quality.",
      features: [
        "Creative direction",
        "Professional equipment",
        "Location management",
        "Color grading",
        "Distribution support",
      ],
      startingPrice: "$10,000",
      duration: "6-8 weeks",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&q=80",
    },
    {
      icon: FaHome,
      title: "Real Estate Videos",
      description:
        "Compelling real estate videos that showcase properties and drive potential buyer interest with drone footage.",
      features: [
        "Drone cinematography",
        "Virtual tours",
        "Property highlights",
        "Neighborhood showcases",
        "Quick delivery",
      ],
      startingPrice: "$2,000",
      duration: "1-2 weeks",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80",
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
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
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

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                <p className="text-gray-600 text-sm leading-relaxed">
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
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
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
