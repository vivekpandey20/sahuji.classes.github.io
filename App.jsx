import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import FounderMessage from './components/FounderMessage'
import ReportCard from './components/ReportCard'
import ContactMe from './components/ContactMe'
import PhotoGallery from './components/PhotoGallery'
import TestCourses from './components/TestCourses'

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg font-sans pb-20">
      <Header />
      <main>
        {hash === '#test-courses' ? (
          <TestCourses />
        ) : (
          <>
            <Hero />
            <FounderMessage />
            <VideoSection />
            <PhotoGallery />
            <ReportCard />
            <ContactMe />
          </>
        )}
      </main>
    </div>
  )
}

export default App
