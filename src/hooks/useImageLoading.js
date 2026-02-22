import { useState, useEffect } from 'react';

export const useImageLoading = (imageSources = []) => {
  const [loadingStates, setLoadingStates] = useState({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    if (imageSources.length === 0) {
      setAllImagesLoaded(true);
      return;
    }

    // Initialize loading states
    const initialStates = {};
    imageSources.forEach((src, index) => {
      initialStates[src] = false;
    });
    setLoadingStates(initialStates);

    // Track image loading
    let loadedCount = 0;
    const totalImages = imageSources.length;

    imageSources.forEach((src) => {
      const img = new Image();
      
      img.onload = () => {
        setLoadingStates(prev => ({
          ...prev,
          [src]: true
        }));
        loadedCount++;
        
        if (loadedCount === totalImages) {
          setAllImagesLoaded(true);
        }
      };

      img.onerror = () => {
        // Count as loaded even on error to prevent infinite loading
        setLoadingStates(prev => ({
          ...prev,
          [src]: true
        }));
        loadedCount++;
        
        if (loadedCount === totalImages) {
          setAllImagesLoaded(true);
        }
      };

      img.src = src;
    });
  }, [imageSources]);

  return { loadingStates, allImagesLoaded };
};

export const useSectionImageLoading = (sectionImages) => {
  // Extract image sources from different section structures
  const imageSources = [];
  
  if (Array.isArray(sectionImages)) {
    sectionImages.forEach(item => {
      if (typeof item === 'string') {
        imageSources.push(item);
      } else if (item.image) {
        imageSources.push(item.image);
      } else if (item.url) {
        imageSources.push(item.url);
      }
    });
  }

  return useImageLoading(imageSources);
};
