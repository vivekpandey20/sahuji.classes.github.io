import React from 'react';

const Header = () => {
  const navItems = [
    { name: 'HOME', link: '#' },
    { 
      name: 'ABOUT US', 
      link: '#founders-message',
      dropdown: [
        { label: 'Founder\'s Message', link: '#founders-message' },
        { label: 'SahuJi Classes', link: '#' }
      ]
    },
    { name: 'STUDENT REG.', link: '#' },
    { 
      name: 'GALLERY', 
      link: '#photos',
      dropdown: [
        { label: 'PHOTOS', link: '#photos' },
        { label: 'VIDEOS', link: '#30-seconds-view' },
        { label: 'Movie Theater Ads', link: '#' },
        { label: '30 Seconds View', link: '#30-seconds-view' },
        { label: 'Advertising Van', link: '#' },
        { label: 'Entry Passes', link: '#' },
        { label: 'Hoarding and Leaflets', link: '#' }
      ]
    },
    { name: 'TEST COURSES', link: '#test-courses' },
    { name: 'NEWS', link: 'https://news.google.com', target: '_blank' },
  ];

  return (
    <header className="w-full pt-8 pb-4 px-8 border-b border-orange-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8 relative">
          <div className="flex-1"></div>
          {/* Logo / Title */}
          <div className="border-2 border-brand-primary px-8 py-3 bg-brand-light inline-block absolute left-1/2 -translate-x-1/2 shadow-sm">
            <h1 className="text-3xl tracking-widest text-brand-dark uppercase font-bold">SahuJi Classes</h1>
          </div>
          {/* Contact Number */}
          <div className="flex-1 text-right">
            <span className="text-xl text-brand-primary font-bold">8448662018</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center space-x-6 text-sm uppercase tracking-wider font-semibold text-brand-text mt-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative group pb-4 cursor-pointer">
              <a href={item.link} target={item.target} className="hover:text-brand-primary transition-colors flex items-center">
                {item.name}
                {item.dropdown && (
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                )}
              </a>
              
              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute left-0 mt-4 w-56 bg-brand-light border border-orange-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <ul className="py-2">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <li key={dropIndex}>
                        <a href={dropItem.link} className="block px-4 py-3 text-sm text-brand-text hover:bg-brand-primary hover:text-white transition-colors capitalize">
                          {dropItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
