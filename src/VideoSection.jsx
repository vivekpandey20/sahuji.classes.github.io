import React from 'react';

const VideoSection = () => {
  return (
    <section id="30-seconds-view" className="max-w-7xl mx-auto my-16 px-8 flex flex-col items-center scroll-mt-32">
      <h2 className="w-full text-left text-brand-dark uppercase tracking-widest text-sm font-bold mb-8 pl-4">
        SahuJi Classes 30 Seconds View
      </h2>
      
      <div className="w-full max-w-5xl aspect-video bg-gray-900 shadow-xl overflow-hidden rounded-sm relative border-4 border-orange-100">
        <iframe 
          className="w-full h-full absolute top-0 left-0"
          src="https://www.youtube.com/embed/g5qU7p7yOY8?autoplay=0&controls=1&rel=0" 
          title="Love Me Harder - Ariana Grande & The Weeknd" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
