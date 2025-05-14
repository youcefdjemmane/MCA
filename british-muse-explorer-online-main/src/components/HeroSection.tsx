
import { Video } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source 
            src="https://cdn.pixabay.com/vimeo/149197113/museum-5017.mp4?width=1280&hash=dc757f001e1e885f8301157d4e4698c45a3d3d0e" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <Video className="h-12 w-12 mb-6 text-museum-gold animate-pulse" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 max-w-3xl">
          The British Muse
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl text-museum-cream">
          Discover two million years of human history and culture
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
