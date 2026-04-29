import React from 'react';

const FounderMessage = () => {
  return (
    <section id="founders-message" className="max-w-7xl mx-auto my-16 px-8 scroll-mt-32">
      <div className="bg-[#f0e6dd] border border-orange-200 p-8 shadow-md rounded-lg flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center relative mt-4">
          <div className="bg-brand-primary text-white text-2xl font-bold py-3 px-6 shadow-lg transform -rotate-2 absolute -top-8 z-10 w-[80%] text-center">
            Founder's<br/>Message
          </div>
          <img 
            src="https://picsum.photos/400/400?random=10" 
            alt="Ravindra Sahu - Founder" 
            className="w-full h-auto object-cover border-4 border-white shadow-xl rounded-sm mt-8"
          />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 text-brand-text leading-relaxed">
          <h3 className="text-brand-dark font-bold text-xl mb-4">Dear Exhibitor,</h3>
          <div className="space-y-4 text-[15px]">
            <p>
              Getting children into right school and college / university is the closest parents can come to a magic bullet which will shoot down all our development woes. Everyone knows that right education at the right time is the basic need that has to be met if future opportunities are to be seized, not just for better livelihoods but for better nutrition, health, civic and social consciousness. The investments in education and training can thus help reduce inequality while expanding economic opportunity.
            </p>
            <p>
              The Exhibition across <span className="text-brand-dark font-bold">3 potential cities</span> is an earnest effort towards bringing together the aspiring talent pool and the Educational Institutions under one roof for interactions to make the best choice keeping in the view the required parameters.
            </p>
            <p>
              The Exhibition centres are strategically chosen keeping in mind the number of aspirants for professional courses vis-à-vis availability of seats in the state. In all our endeavors, we would continue to give the best to all our exhibitors, whether it is our services, hospitality and number of students at each location. I eagerly look forward to your association and experience with <span className="text-brand-dark font-bold">"SahuJi Classes"</span>.
            </p>
          </div>

          <div className="mt-8 text-[15px]">
            <p className="text-brand-dark font-bold mb-1">With Warm Personal Regards,</p>
            <p className="font-bold text-lg">Ravindra Sahu</p>
            <p className="text-gray-600">Founder - SahuJi Classes</p>
            <p className="text-gray-600">Motivator & Author - Happiness @ Success</p>
            <p className="text-gray-600 mt-2">FB followers -171,000 , www.fb.com/ravindrasahufanpage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
