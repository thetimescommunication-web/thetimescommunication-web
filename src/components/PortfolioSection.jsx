import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaArrowRight, FaYoutube, FaSpinner, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioSection = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  // Fetch YouTube Playlists
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
          const errorMsg = 'YouTube API key or Channel ID is missing. Please check your .env file and restart the dev server.';
          console.error('Environment variables:', {
            apiKey: YOUTUBE_API_KEY ? 'Present' : 'Missing',
            channelId: CHANNEL_ID ? 'Present' : 'Missing',
            allEnvKeys: Object.keys(import.meta.env).filter(k => k.includes('YOUTUBE') || k.includes('CHANNEL'))
          });
          throw new Error(errorMsg);
        }
        
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${CHANNEL_ID}&maxResults=4&key=${YOUTUBE_API_KEY}`
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
      title: "Corporate Brand Video",
      category: "Corporate Videos",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      client: "Tech Company",
      description:
        "A compelling brand story that showcases company values and culture.",
    },
    {
      id: 2,
      title: "Product Launch Campaign",
      category: "TV & Digital Ad Films",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      client: "Consumer Brand",
      description: "High-impact commercial for major product launch campaign.",
    },
    {
      id: 3,
      title: "Animated Explainer Video",
      category: "Explainer Videos",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      client: "SaaS Startup",
      description:
        "Simplified complex software concepts through engaging animation.",
    },
    {
      id: 4,
      title: "Real Estate Showcase",
      category: "Real Estate Videos",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example4",
      client: "Property Developer",
      description: "Luxury property showcase with drone cinematography.",
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Social Media Promo",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example5",
      client: "Fashion Brand",
      description: "Viral social media content that drove massive engagement.",
    },
    {
      id: 6,
      title: "Training Module Video",
      category: "E-Learning Videos",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example6",
      client: "Educational Institute",
      description: "Interactive learning content for professional development.",
    },
    {
      id: 7,
      title: "Product Photography Session",
      category: "Product Photography",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example7",
      client: "E-commerce Brand",
      description:
        "Studio photography showcasing product details and features.",
    },
    {
      id: 8,
      title: "Music Video Production",
      category: "Music & Film",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example8",
      client: "Independent Artist",
      description: "Creative music video with cinematic storytelling approach.",
    },
  ];

  // Use YouTube playlists if available, otherwise fall back to static items
  const displayItems = playlists.length > 0 ? playlists : portfolioItems;

  return (
    <section className="section-padding bg-white" id="portfolio">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            OUR LATEST <span className="text-gradient">WORK</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful video productions across various
            industries and formats.
          </p>
        </div>

        {/* Portfolio Grid */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <FaSpinner className="animate-spin text-primary-600 text-4xl mb-4" />
            <p className="text-gray-600">Loading YouTube playlists...</p>
          </div>
        )}

        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <p className="text-red-800 font-semibold mb-2">Error loading playlists</p>
            <p className="text-red-600 text-sm">{error}</p>
            <p className="text-gray-600 text-sm mt-4">
              Showing static portfolio items instead.
            </p>
        </div>
        )}

        {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {displayItems.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">No playlists found.</p>
              </div>
            ) : (
              displayItems.map((item, index) => (
            <div
              key={item.id}
              className="card overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
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
                    aria-label={`Play ${item.title} video`}
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
                {item.duration && (
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {item.duration}
                </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  {item.year && (
                    <>
                      <FaCalendarAlt className="mr-2" />
                      <span>{item.year}</span>
                      {item.client && <span className="mx-2">•</span>}
                    </>
                  )}
                  {item.client && <span>{item.client}</span>}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
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

                {/* Action Button */}
                <button 
                  onClick={() => {
                    window.open(item.videoUrl, '_blank');
                  }}
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium group text-sm"
                >
                  <span>Watch Playlist</span>
                  <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300 text-xs" />
                </button>
              </div>
            </div>
              ))
            )}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 btn-primary text-lg group"
          >
            <span>View Full Portfolio</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life with our
            professional video production services.
          </p>
          <Link
            to="/contact"
            className="btn-outline hover:bg-white hover:text-primary-600"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
