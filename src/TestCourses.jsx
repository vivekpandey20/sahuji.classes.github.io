import React from 'react';

const TestCourses = () => {
  return (
    <section id="test-courses" className="max-w-7xl mx-auto my-16 px-8 scroll-mt-32">
      <h2 className="text-xl font-semibold text-brand-dark tracking-widest uppercase mb-8 border-l-4 border-brand-primary pl-4">
        Test Courses
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video 1 */}
        <div className="w-full aspect-video bg-gray-900 shadow-lg rounded-md overflow-hidden border border-orange-200">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/CwfoyVa980U" 
            title="How Long - Charlie Puth" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="w-full aspect-video bg-gray-900 shadow-lg rounded-md overflow-hidden border border-orange-200">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/Mx92lTYxrJQ" 
            title="One Of The Girls - The Weeknd" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TestCourses;
