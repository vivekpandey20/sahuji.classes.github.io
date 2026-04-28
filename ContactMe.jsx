import React from 'react';

const ContactMe = () => {
  return (
    <section id="contact-me" className="max-w-7xl mx-auto my-16 flex flex-col md:flex-row shadow-lg border border-orange-200 scroll-mt-32">
      {/* Left Column: Contact Details */}
      <div className="w-full md:w-1/2 bg-[#dfd6d1] p-12 flex flex-col justify-center">
        <h3 className="text-brand-dark uppercase tracking-widest text-sm font-bold mb-6">Contact Me</h3>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How can We help?</h2>
        
        <p className="text-gray-700 leading-relaxed mb-8 text-sm">
          To Communicate with You: We may use your contact information to respond to your inquiries, provide educational support, share important service-related updates, and—if you consent—deliver relevant announcements, event-related updates, and offers via SMS, RCS, email, WhatsApp, and voice notifications.
        </p>

        <button className="bg-[#2c3e50] text-white font-semibold py-3 px-6 rounded w-fit flex items-center space-x-2 mb-10 hover:bg-[#1a252f] transition-colors shadow-md">
          <span>Message us on WhatsApp</span>
        </button>

        <h4 className="text-lg font-bold text-gray-800 mb-4">SAHUJI CLASSES Pioneer EduTech Media Services</h4>
        
        <p className="text-gray-700 text-sm mb-6">
          RBL Bank Ltd - Alpha-1, Greater Noida Branch, TRADX TOWER-II, Alpha-I Commercial Belt, Block E, Be, Greater Noida, Uttar Pradesh, India
        </p>
        
        <p className="text-brand-dark font-medium text-sm mb-6">
          304, Tradex Tower -2<br />
          Alpha -1 Commercial Belt Greater Noida, Up 201310.<br />
          MOB- 8448662018
        </p>

        <p className="text-gray-700 text-sm mb-8">
          We can contact you via email, whatsapp.SMS. RCS or call
        </p>

        <button className="bg-brand-dark hover:bg-brand-primary text-white font-bold py-3 px-8 rounded w-fit uppercase tracking-wider transition-colors shadow-md">
          Get In Touch
        </button>
      </div>

      {/* Right Column: Map */}
      <div className="w-full md:w-1/2 bg-gray-200 min-h-[400px] relative">
        <iframe 
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.772591696016!2d77.50290075!3d28.4209559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1b7a2d6402d%3A0xb35359b8eb7c56!2sAlpha-I%20Commercial%20Belt%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310%2C%20India!5e0!3m2!1sen!2sus!4v1714412345678!5m2!1sen!2sus" 
          frameBorder="0" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="0"
          title="Google Map Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMe;
