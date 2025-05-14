
import { Compass, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VirtualTourPromo = () => {
  return (
    <section className="py-16 bg-museum-navy text-white">
      <div className="museum-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img 
              src="https://source.unsplash.com/random/800x600/?museum,gallery" 
              alt="Virtual Tour of the British Muse"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-museum-gold text-museum-navy p-6 rounded-lg shadow-lg hidden md:flex items-center">
              <Compass className="h-10 w-10 mr-4" />
              <div>
                <p className="text-lg font-bold">360° Virtual Tour</p>
                <p className="text-sm">Explore at your own pace</p>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Experience the Museum from Anywhere
            </h2>
            <p className="text-gray-300 text-lg">
              Our virtual tour gives you unprecedented access to the British Muse's galleries and exhibits. 
              Navigate through our hallowed halls and get up close with artifacts from around the world.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-museum-gold rounded-full p-1">
                  <svg className="h-3 w-3 text-museum-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Explore each gallery in immersive 360° detail</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-museum-gold rounded-full p-1">
                  <svg className="h-3 w-3 text-museum-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Zoom in on artifacts to see intricate details</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-museum-gold rounded-full p-1">
                  <svg className="h-3 w-3 text-museum-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Access expert commentary and information</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-museum-gold rounded-full p-1">
                  <svg className="h-3 w-3 text-museum-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Visit areas not accessible to regular visitors</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild className="bg-museum-gold hover:bg-[#c9a42d] text-museum-navy">
                <Link to="/virtual-tour" className="flex items-center gap-2">
                  Start Virtual Tour
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourPromo;
