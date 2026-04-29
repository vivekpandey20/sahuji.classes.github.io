import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner.png';

const Hero = () => {
  const slides = [
    banner1,
    'https://picsum.photos/1400/600?random=1',
    'https://picsum.photos/1400/600?random=2'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300); // Reset state after animation
  };

  return (
    <>
      <section id="hero" className="max-w-7xl mx-auto my-12 px-8 flex flex-col lg:flex-row gap-0 shadow-2xl rounded-lg overflow-hidden border border-orange-100 relative">
        {/* Left Column: Banner Slider */}
        <div className="w-full lg:w-[65%] bg-orange-900 text-white p-0 relative min-h-[400px] overflow-hidden group">
          {slides.map((slide, index) => (
            <img 
              key={index}
              src={slide} 
              alt={`SahuJi Classes Banner ${index + 1}`} 
              className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          
          {/* Slider Controls */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-brand-primary w-8' : 'bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Registration Info */}
        <div className="w-full lg:w-[35%] bg-white p-12 flex flex-col justify-center items-center text-center">
          <h3 className="text-brand-dark uppercase tracking-widest text-sm font-bold mb-4">Welcome</h3>
          
          <h2 className="text-3xl font-extrabold text-brand-text uppercase leading-snug mb-6">
            Free Registration For <br />
            SahuJi Classes <br />
            <span className="text-brand-primary">2026</span>
          </h2>
          
          <p className="text-gray-600 italic mb-10 text-sm leading-relaxed px-4">
            Join SahuJi Classes and <br />
            Get Free Career Planning & Admission <br />
            Guidance about Professional Courses.
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-primary hover:bg-brand-dark text-white uppercase font-bold py-4 px-8 w-full transition-colors shadow-lg text-sm tracking-wider rounded-md"
          >
            Click For Free <br /> Register
          </button>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full relative border-t-4 border-brand-primary">
            <button 
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center">Student Registration</h2>
            
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="text-green-500 mb-4 flex justify-center">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Success!</h3>
                <p className="text-gray-600 mb-8">
                  That the form has been filled and our team will contact you shortly.
                </p>
                <button 
                  onClick={handleModalClose}
                  className="bg-brand-primary text-white font-bold py-2 px-8 rounded hover:bg-brand-dark transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input type="text" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-brand-primary" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Academic Details</label>
                  <input type="text" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-brand-primary" placeholder="Current class / Course" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Number</label>
                  <input type="tel" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-brand-primary" placeholder="10-digit number" />
                </div>
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-3 rounded hover:bg-brand-dark transition-colors mt-4">
                  Submit Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
