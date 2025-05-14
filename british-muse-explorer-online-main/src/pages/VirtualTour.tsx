
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VirtualTourViewer from "@/components/VirtualTourViewer";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

// Define available tour locations
const tourLocations = [
  {
    id: "main-hall",
    name: "Main Hall",
    description: "The impressive central hall features the museum's iconic rotunda."
  },
  {
    id: "egyptian-gallery",
    name: "Egyptian Gallery",
    description: "Home to an extensive collection of ancient Egyptian artifacts, including mummies and sarcophagi."
  },
  {
    id: "greek-roman",
    name: "Greek & Roman Gallery",
    description: "Showcasing masterpieces of classical sculpture and artifacts from ancient Greece and Rome."
  },
  {
    id: "asian-gallery",
    name: "Asian Gallery",
    description: "A diverse collection representing the rich cultural heritage of Asia."
  }
];

const VirtualTour = () => {
  const [selectedLocation, setSelectedLocation] = useState(tourLocations[0].id);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen: ${e.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${isFullscreen ? 'fullscreen-mode' : ''}`}>
        {/* Header */}
        <div className="bg-museum-navy text-white py-16">
          <div className="museum-container">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="h-8 w-8 text-museum-gold" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Virtual Tour</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore the British Muse from anywhere in the world with our immersive 
              360° virtual tour experience.
            </p>
          </div>
        </div>
        
        {/* Tour Section */}
        <section className="py-8 bg-white">
          <div className="museum-container">
            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              {/* Location Selector */}
              <div className="flex flex-wrap gap-3">
                {tourLocations.map((location) => (
                  <Button
                    key={location.id}
                    variant={selectedLocation === location.id ? "default" : "outline"}
                    onClick={() => setSelectedLocation(location.id)}
                    className={selectedLocation === location.id ? "bg-museum-navy" : ""}
                  >
                    {location.name}
                  </Button>
                ))}
              </div>
              
              {/* View Controls */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={toggleFullscreen}
                  className="flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={
                        isFullscreen
                          ? "M9 9V6.75m0 0H6.75M9 6.75L3.75 12m0 0l5.25 5.25M3.75 12h16.5m0 0l-5.25-5.25M20.25 12L15 17.25"
                          : "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      }
                    />
                  </svg>
                  {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                </Button>
              </div>
            </div>
            
            {/* Current Location Info */}
            <div className="mb-4">
              <h2 className="text-2xl font-serif font-bold">
                {tourLocations.find(loc => loc.id === selectedLocation)?.name}
              </h2>
              <p className="text-gray-600">
                {tourLocations.find(loc => loc.id === selectedLocation)?.description}
              </p>
            </div>
            
            {/* 360 Viewer */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <VirtualTourViewer />
            </div>
            
            {/* Instructions */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-2">How to Navigate</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-museum-navy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg>
                  <span>Click and drag to look around</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-museum-navy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <span>Scroll to zoom in/out</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-museum-navy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                    <path d="M15 8l-2.879 2.879m0 0a3 3 0 11-4.243 4.243 3 3 0 014.243-4.243z" />
                  </svg>
                  <span>Click on hotspots to interact</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-museum-navy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
                  </svg>
                  <span>Use buttons to change locations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      {!isFullscreen && <Footer />}
      
      <style>
        {`
        .fullscreen-mode {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          background: white;
        }
        
        .fullscreen-mode .museum-container {
          padding: 1rem;
        }
        `}
      </style>
    </div>
  );
};

export default VirtualTour;
