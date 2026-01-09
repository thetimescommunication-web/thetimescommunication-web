import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaYoutube,
  FaSpinner,
  FaTimes,
} from "react-icons/fa";

const PortfolioPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Toggle description expansion
  const toggleDescription = (itemId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Truncate description helper
  const truncateDescription = (text, maxLength = 120) => {
    if (!text || text.length <= maxLength) return { text, isLong: false };
    return {
      text: text.substring(0, maxLength).trim() + '...',
      fullText: text,
      isLong: true
    };
  };

  // YouTube API Configuration
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY?.trim();
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID?.trim();

  // Fetch YouTube Playlists
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
          console.error('Environment variables:', {
            apiKey: YOUTUBE_API_KEY ? 'Present' : 'Missing',
            channelId: CHANNEL_ID ? 'Present' : 'Missing',
            allEnv: import.meta.env
          });
          throw new Error('YouTube API key or Channel ID is missing. Please check your .env file and restart the dev server.');
        }
        
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${CHANNEL_ID}&maxResults=100&key=${YOUTUBE_API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`YouTube API error: ${response.status}`);
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          // Transform YouTube playlists to portfolio items format
          const transformedPlaylists = data.items.map((playlist, index) => {
            const snippet = playlist.snippet;
            const contentDetails = playlist.contentDetails;
            
            return {
              id: playlist.id,
              title: snippet.title,
              thumbnail: snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url,
              videoUrl: `https://www.youtube.com/playlist?list=${playlist.id}`,
              embedUrl: `https://www.youtube.com/embed/videoseries?list=${playlist.id}`,
              client: snippet.channelTitle || "The Times Communication",
              year: new Date(snippet.publishedAt).getFullYear().toString(),
              description: snippet.description || snippet.localized?.description || "Check out our video collection on YouTube.",
              tags: snippet.tags || [],
              duration: `${contentDetails.itemCount || 0} videos`,
              publishedAt: snippet.publishedAt,
              viewCount: contentDetails.itemCount || 0,
            };
          });

          setPlaylists(transformedPlaylists);
        } else {
          setPlaylists([]);
        }
      } catch (err) {
        console.error("Error fetching YouTube playlists:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Corporate Brand Story - TechCorp",
      category: "Corporate Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      client: "TechCorp Solutions",
      year: "2024",
      description:
        "A compelling brand story showcasing company values, culture, and vision for the future. This corporate video helped TechCorp connect with their audience on an emotional level.",
      tags: ["Brand Story", "Corporate", "Culture"],
      duration: "3:45",
    },
    {
      id: 2,
      title: "Product Launch Campaign - SmartDevice",
      category: "TV & Digital Ad Films",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      client: "SmartDevice Inc.",
      year: "2024",
      description:
        "High-impact commercial for a revolutionary smart device launch. The campaign achieved 2M+ views and significantly boosted pre-orders.",
      tags: ["Product Launch", "Commercial", "Tech"],
      duration: "1:30",
    },
    {
      id: 3,
      title: "AI Software Explainer - DataFlow",
      category: "Explainer Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      client: "DataFlow Analytics",
      year: "2024",
      description:
        "Animated explainer video that simplified complex AI concepts for a SaaS platform, resulting in 40% increase in trial signups.",
      tags: ["AI", "SaaS", "Animation"],
      duration: "2:15",
    },
    {
      id: 4,
      title: "Luxury Real Estate Showcase - Oceanview Villas",
      category: "Real Estate Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example4",
      client: "Oceanview Properties",
      year: "2024",
      description:
        "Stunning drone cinematography showcasing luxury oceanfront villas. The video helped sell 80% of properties within 3 months.",
      tags: ["Luxury", "Drone", "Property"],
      duration: "4:20",
    },
    {
      id: 5,
      title: "Fashion Brand Social Campaign - StyleCo",
      category: "Social Media Promo",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example5",
      client: "StyleCo Fashion",
      year: "2024",
      description:
        "Viral social media content featuring influencer collaborations. Generated 5M+ impressions across all platforms.",
      tags: ["Fashion", "Influencer", "Viral"],
      duration: "0:45",
    },
    {
      id: 6,
      title: "Online Learning Platform - EduTech",
      category: "E-Learning Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example6",
      client: "EduTech Platform",
      year: "2023",
      description:
        "Interactive learning modules for professional development courses. Improved student engagement by 60%.",
      tags: ["Education", "Interactive", "Professional"],
      duration: "8:30",
    },
    {
      id: 7,
      title: "E-commerce Product Showcase - GadgetStore",
      category: "Product Photography",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example7",
      client: "GadgetStore Online",
      year: "2023",
      description:
        "Dynamic product photography and videography that increased conversion rates by 35% for an e-commerce platform.",
      tags: ["E-commerce", "Product", "Photography"],
      duration: "2:00",
    },
    {
      id: 8,
      title: "Independent Music Video - Rising Star",
      category: "Music & Film",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example8",
      client: "Independent Artist",
      year: "2023",
      description:
        "Cinematic music video with creative storytelling that gained 1M+ views on YouTube and helped launch the artist's career.",
      tags: ["Music Video", "Cinematic", "Storytelling"],
      duration: "4:10",
    },
    {
      id: 9,
      title: "Healthcare Training Series - MedCorp",
      category: "E-Learning Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example9",
      client: "MedCorp Healthcare",
      year: "2023",
      description:
        "Comprehensive training series for healthcare professionals covering new procedures and safety protocols.",
      tags: ["Healthcare", "Training", "Professional"],
      duration: "12:45",
    },
    {
      id: 10,
      title: "Startup Pitch Video - InnovateTech",
      category: "Corporate Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example10",
      client: "InnovateTech Startup",
      year: "2023",
      description:
        "Compelling pitch video that helped a startup secure $2M in Series A funding.",
      tags: ["Startup", "Pitch", "Funding"],
      duration: "5:30",
    },
    {
      id: 11,
      title: "Restaurant Chain Commercial - FoodieHub",
      category: "TV & Digital Ad Films",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example11",
      client: "FoodieHub Restaurants",
      year: "2023",
      description:
        "Mouth-watering commercial showcasing new menu items, resulting in 25% increase in foot traffic.",
      tags: ["Food", "Commercial", "Restaurant"],
      duration: "1:00",
    },
    {
      id: 12,
      title: "Non-Profit Awareness Campaign - GreenEarth",
      category: "Social Media Promo",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example12",
      client: "GreenEarth Foundation",
      year: "2023",
      description:
        "Emotional awareness campaign about climate change that reached 10M+ people and increased donations by 150%.",
      tags: ["Non-Profit", "Awareness", "Climate"],
      duration: "2:30",
    },
  ];

  // Use YouTube playlists if available, otherwise fall back to static items
  const displayItems = playlists.length > 0 ? playlists : portfolioItems;

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Our <span className="text-yellow-300">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Explore our latest video productions and see the quality that sets
            us apart.
          </p>
        </div>
      </section>

      {/* Info Section */}
      {!loading && playlists.length > 0 && (
        <section className="py-8 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
        <div className="container-custom">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 text-primary-600">
                <FaYoutube className="text-xl" />
                <span className="text-lg font-semibold text-gray-900">
                  {displayItems.length}
                </span>
            </div>
              <span className="text-gray-600 font-medium">
                {playlists.length > 0 ? 'Playlists' : 'Projects'} Available
              </span>
          </div>
        </div>
      </section>
      )}

      {/* Portfolio Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <FaSpinner className="animate-spin text-primary-600 text-4xl mb-4" />
              <p className="text-gray-600">Loading YouTube playlists...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <p className="text-red-800 font-semibold mb-2">Error loading playlists</p>
              <p className="text-red-600 text-sm">{error}</p>
              <p className="text-gray-600 text-sm mt-4">
                Showing static portfolio items instead.
              </p>
            </div>
          )}

          {/* Portfolio Grid */}
          {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayItems.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600 text-lg">No playlists found.</p>
                </div>
              ) : (
                displayItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Video Thumbnail */}
                <div className="relative group overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => {
                        window.open(item.videoUrl, '_blank');
                      }}
                      className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
                    >
                      <FaPlay className="text-white text-xl ml-1" />
                    </button>
                  </div>

                  {/* YouTube Badge */}
                  {item.embedUrl && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      <FaYoutube className="text-xs" />
                      <span>YouTube</span>
                    </div>
                  )}

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FaCalendarAlt className="mr-2" />
                    <span>{item.year}</span>
                    <span className="mx-2">•</span>
                    <span>{item.client}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <div className="text-gray-600 text-sm leading-relaxed mb-4">
                    {(() => {
                      const isExpanded = expandedDescriptions[item.id];
                      const truncated = truncateDescription(item.description || '', 120);
                      
                      if (!truncated.isLong) {
                        return <p className="text-justify">{truncated.text}</p>;
                      }
                      
                      return (
                        <div>
                          <p className="mb-1 text-justify">{isExpanded ? truncated.fullText : truncated.text}</p>
                          <div className="flex justify-end">
                            <button
                              onClick={() => toggleDescription(item.id)}
                              className="text-primary-600 hover:text-primary-700 font-medium text-xs transition-colors duration-300"
                            >
                              {isExpanded ? 'Read less' : 'Read more'}
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => {
                      window.open(item.videoUrl, '_blank');
                    }}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    <span>Watch Playlist</span>
                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
                ))
              )}
            </div>
          )}

        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Like What You See?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Let's create something amazing together. Contact us to discuss your
            next video project.
          </p>
          <div className="animate-bounce-in">
            <Link
              to="/contact"
              className="btn-outline hover:bg-white hover:text-primary-600 text-lg px-8 py-4 mr-4"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="btn-outline hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
              aria-label="Close video"
            >
              <FaTimes size={20} />
            </button>

            {/* Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="p-6 bg-gray-900 text-white">
              <h3 className="text-xl font-semibold mb-2">{selectedVideo.title}</h3>
              <div className="text-gray-300 text-sm mb-4">
                {(() => {
                  const isExpanded = expandedDescriptions[`modal-${selectedVideo.id}`];
                  const truncated = truncateDescription(selectedVideo.description || '', 120);
                  
                  if (!truncated.isLong) {
                    return <p className="text-justify">{truncated.text}</p>;
                  }
                  
                  return (
                    <div>
                      <p className="mb-1 text-justify">{isExpanded ? truncated.fullText : truncated.text}</p>
                      <div className="flex justify-end">
                        <button
                          onClick={() => toggleDescription(`modal-${selectedVideo.id}`)}
                          className="text-primary-400 hover:text-primary-300 font-medium text-xs transition-colors duration-300"
                        >
                          {isExpanded ? 'Read less' : 'Read more'}
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{selectedVideo.duration}</span>
                {selectedVideo.year && <span>• {selectedVideo.year}</span>}
              </div>
              <a
                href={selectedVideo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-primary-400 hover:text-primary-300 transition-colors"
              >
                <FaYoutube />
                <span>Watch on YouTube</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
