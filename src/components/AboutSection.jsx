import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaAward,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";

const AboutSection = () => {
  const stats = [
    { icon: FaAward, number: "10+", label: "Years Experience" },
    { icon: FaUsers, number: "500+", label: "Happy Clients" },
    { icon: FaProjectDiagram, number: "1000+", label: "Projects Completed" },
  ];

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                About The Times Communication
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
                WE ARE DETERMINED FOR YOUR{" "}
                <span className="text-gradient">GROWTH</span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="leading-relaxed">
                We are a group of passionate and experienced{" "}
                <strong>Filmmakers</strong> who decided to start a new journey
                and help medium-sized businesses to grow with videos and
                marketing by reaching the right audience.
              </p>
              <p className="leading-relaxed">
                With over <strong>10+ years</strong> of industry experience
                working with global brands and many big video production houses
                in Mumbai like VIACOM 18 MOTION PICTURE, SALAM BOMBAY
                FOUNDATION, and MTV to produce commercials and videos with
                sky-high production value, we came together to make our dream of
                producing enterprise-grade videos come true with the aim to make
                artistic videos by putting in a filmmaker's ideology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-primary-600 text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 btn-primary group"
            >
              <span>Learn More</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main Image - Replace with your actual image */}
              <img
                src="/api/placeholder/600/500"
                alt="Professional video production team at work"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="lazy"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-gray-100 animate-bounce-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full flex items-center justify-center">
                    <FaAward className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Award Winning</div>
                    <div className="text-lg font-semibold text-gray-900">
                      Production House
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full opacity-20 -z-10"></div>
            <div className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
