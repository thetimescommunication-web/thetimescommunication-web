import React from "react";
import {
  FaAward,
  FaUsers,
  FaProjectDiagram,
  FaHeart,
  FaLightbulb,
  FaTrophy,
} from "react-icons/fa";

const AboutPage = () => {
  const stats = [
    {
      icon: FaAward,
      number: "5+",
      label: "Years Experience",
      color: "text-primary-600",
    },
    {
      icon: FaUsers,
      number: "50+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
    {
      icon: FaProjectDiagram,
      number: "150+",
      label: "Projects Completed",
      color: "text-green-600",
    },
    {
      icon: FaTrophy,
      number: "50+",
      label: "Awards Won",
      color: "text-yellow-600",
    },
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Passion",
      description:
        "We are passionate about creating videos that tell compelling stories and drive results for our clients.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "We stay ahead of industry trends and use cutting-edge technology to deliver exceptional video content.",
    },
    {
      icon: FaAward,
      title: "Quality",
      description:
        "We never compromise on quality and ensure every project meets the highest professional standards.",
    },
  ];

  const team = [
    {
      name: "Ashwani Kumar",
      position: "Founder & Creative Director",
      image: "/api/placeholder/300/300",
      description:
        "With over 10 years of experience in the industry, Ashwani leads our creative vision.",
    },
    {
      name: "Sarah Johnson",
      position: "Head of Production",
      image: "/api/placeholder/300/300",
      description:
        "Sarah ensures every project runs smoothly from concept to final delivery.",
    },
    {
      name: "Michael Chen",
      position: "Lead Video Editor",
      image: "/api/placeholder/300/300",
      description:
        "Michael brings technical expertise and creative flair to every edit.",
    },
    {
      name: "Emily Rodriguez",
      position: "Animation Director",
      image: "/api/placeholder/300/300",
      description:
        "Emily specializes in creating engaging animated content that simplifies complex ideas.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            About{" "}
            <span className="text-yellow-300">The Times Communication</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We are determined for your growth through exceptional video
            production and storytelling.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  The Times Communication is a creative film and media
                  production house based in Rajkot, Gujarat, driven by a passion
                  for powerful visual storytelling. We specialize in crafting
                  corporate films, brand stories, real estate walkthroughs, and
                  institutional videos for hospitals and educational institutes,
                  helping businesses communicate with clarity and impact. With a
                  strong focus on creativity, precision, and global-standard
                  production quality, we approach every project with a
                  filmmaker’s mindset—transforming ideas into engaging visuals
                  that connect with the right audience and leave a lasting
                  impression.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&q=80&auto=format"
                alt="Corporate video interview setup in modern office"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/1200x800/009292/ffffff?text=The+Times+Communication";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that showcase our commitment to excellence and client
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center`}
                >
                  <stat.icon className={`text-2xl ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Vastvik Films.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-2xl text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented professionals who bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x300/009292/ffffff?text=Team";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Let's create something amazing together. Contact us to discuss your
            next video project.
          </p>
          <div className="animate-bounce-in">
            <a
              href="/contact"
              className="btn-outline hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
