import React from 'react';

const PhotoGallery = () => {
  const photos = [
    'https://picsum.photos/800/600?random=11',
    'https://picsum.photos/800/600?random=12',
    'https://picsum.photos/800/600?random=13',
    'https://picsum.photos/800/600?random=14',
    'https://picsum.photos/800/600?random=15',
    'https://picsum.photos/800/600?random=16',
  ];

  return (
    <section id="photos" className="max-w-7xl mx-auto my-16 px-8 scroll-mt-32">
      <h2 className="text-xl font-semibold text-brand-dark tracking-widest uppercase mb-8 border-l-4 border-brand-primary pl-4">
        Photo Gallery
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden group bg-orange-100 shadow-sm border border-orange-200 p-2">
            <img 
              src={photo} 
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
