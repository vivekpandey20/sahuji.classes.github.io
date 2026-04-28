import React from 'react';

const Associates = () => {
  const associates = Array.from({ length: 48 }, (_, i) => i + 1);

  return (
    <section id="associates" className="max-w-7xl mx-auto my-16 px-8 scroll-mt-32">
      {/* Header Banner */}
      <div className="bg-[#f39c12] text-center py-6 mb-8 border-b-4 border-[#d35400] shadow-md">
        <h2 className="text-4xl font-extrabold text-white tracking-wider uppercase">
          Our Valuable Associates
        </h2>
      </div>

      {/* Grid of Logos */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 border border-gray-200 bg-white p-2">
        {associates.map((item) => (
          <div key={item} className="aspect-video bg-gray-100 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow cursor-pointer p-2 grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={`https://dummyimage.com/200x100/eeeeee/888888.png&text=Associate+${item}`} 
              alt={`Associate ${item}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Associates;
