
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollectionSearch from "@/components/CollectionSearch";
import { BookOpen } from "lucide-react";

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-museum-navy text-white py-16">
          <div className="museum-container">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-museum-gold" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Collections</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore over two million years of human history and culture through our vast collection of artifacts, 
              artworks, and manuscripts from across the globe.
            </p>
          </div>
        </div>
        
        {/* Collection Search */}
        <CollectionSearch />
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
