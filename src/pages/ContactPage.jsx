import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaComments,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const services = [
    "AI Animated Videos",
    "E-Learning Videos",
    "Corporate Videos",
    "TV & Digital Ad Films",
    "Product Photography & Videos",
    "Social Media Promo Videos",
    "Music & Film Production",
    "Real Estate Videos",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "Above $50,000",
    "Let's discuss",
  ];

  const timelineOptions = [
    "ASAP",
    "2-4 weeks",
    "1-2 months",
    "2-3 months",
    "Flexible",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        timeline: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Location",
      details: [
        "121, 122 - Arthik Bhavan, Near Pinevinta Hotel, Gondal Road, Rajkot - 360004 Gujarat India",
      ],
    },
    {
      icon: FaPhone,
      title: "Phone",
      details: ["+91 94269 16374"],
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["thetimescommunication@gmail.com"],
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM IST",
        "Sat: 10:00 AM - 4:00 PM IST",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Get In <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Ready to bring your vision to life? Let's create something amazing
            together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Start Your Project
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours with a detailed proposal.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <div className="relative">
                        <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((timeline, index) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Description *
                    </label>
                    <div className="relative">
                      <FaComments className="absolute left-3 top-3 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      Thank you! Your message has been sent successfully. We'll
                      get back to you within 24 hours.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      Sorry, there was an error sending your message. Please try
                      again or contact us directly.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8 animate-fade-in">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        <info.icon className="text-primary-600 text-xl" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {info.title}
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Quick Contact */}
                <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-4">Need Quick Help?</h3>
                  <p className="mb-6">
                    Call us directly for immediate assistance or urgent
                    projects.
                  </p>
                  <a
                    href="tel:+919426916374"
                    className="btn-outline hover:bg-white hover:text-primary-600 block"
                  >
                    Call Now: +91 94269 16374
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <FaMapMarkerAlt className="text-primary-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Visit Our Offices
            </h3>
            <p className="text-gray-600">
              Interactive map integration would be implemented here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
