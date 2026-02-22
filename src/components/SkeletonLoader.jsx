import React from 'react';

const SkeletonLoader = ({ type = 'card', className = '' }) => {
  const baseClasses = "animate-pulse bg-gray-200 rounded";
  
  const skeletonTypes = {
    card: "h-64 w-full",
    image: "h-48 w-full",
    text: "h-4 w-full",
    title: "h-6 w-3/4",
    avatar: "h-12 w-12 rounded-full",
    service: "h-48 w-full",
    testimonial: "h-32 w-full",
    line: "h-2 w-full"
  };

  return (
    <div className={`${baseClasses} ${skeletonTypes[type]} ${className}`}></div>
  );
};

export const SectionSkeleton = ({ children, isLoading, skeletonType = 'card' }) => {
  if (isLoading) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          {/* Section Header Skeleton */}
          <div className="text-center mb-16">
            <SkeletonLoader type="text" className="w-32 mx-auto mb-4" />
            <SkeletonLoader type="title" className="w-64 mx-auto mb-6" />
            <SkeletonLoader type="line" className="w-96 mx-auto" />
          </div>
          
          {/* Content Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <SkeletonLoader type={skeletonType} />
                <SkeletonLoader type="title" />
                <SkeletonLoader type="text" />
                <SkeletonLoader type="text" className="w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return children;
};

export default SkeletonLoader;
