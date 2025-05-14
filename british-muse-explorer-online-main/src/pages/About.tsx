
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-museum-navy text-white py-16">
          <div className="museum-container">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-8 w-8 text-museum-gold" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold">About Us</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl">
              The British Muse is dedicated to human history, art and culture, 
              with a permanent collection of over eight million works.
            </p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="museum-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To preserve, protect and promote the world's cultural heritage for the benefit and 
                education of humanity, both now and in the future. We strive to be a museum of the world, for the world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Museum History */}
        <section className="py-16 bg-museum-cream">
          <div className="museum-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Our History</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Founded in 1753, the British Muse was the first national public museum in the world. 
                    From the beginning it granted free admission to all 'studious and curious persons'.
                  </p>
                  <p>
                    The Museum opened to the public on 15 January 1759 in Montagu House, on the site of the current building. 
                    Entry was initially by written application only, in order to control visitor numbers.
                  </p>
                  <p>
                    The original collection was based on that of the Irish physician and scientist Sir Hans Sloane, 
                    who wanted it to be preserved after his death. He bequeathed his collection of 71,000 objects to King George II.
                  </p>
                  <p>
                    Over the centuries, the museum's collection has grown enormously through acquisitions, donations, and 
                    sponsored archaeological expeditions, making it one of the most comprehensive collections in existence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://source.unsplash.com/random/800x600/?british,museum,building" 
                  alt="Historical photograph of the British Museum"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-2 text-sm rounded">
                  The British Muse building, circa 1890
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Facts */}
        <section className="py-16 bg-white">
          <div className="museum-container">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center">Key Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-5xl font-serif font-bold text-museum-navy">8M+</p>
                    <p className="text-gray-500 mt-2">Objects in our collection</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-5xl font-serif font-bold text-museum-navy">6M</p>
                    <p className="text-gray-500 mt-2">Annual visitors</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-5xl font-serif font-bold text-museum-navy">270</p>
                    <p className="text-gray-500 mt-2">Years of history</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Leadership */}
        <section className="py-16 bg-museum-cream">
          <div className="museum-container">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Director */}
              <div className="flex flex-col items-center text-center">
                <img 
                  src="https://source.unsplash.com/random/300x300/?portrait,woman" 
                  alt="Dr. Eleanor Phillips"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-serif font-bold">Dr. Eleanor Phillips</h3>
                <p className="text-museum-navy font-medium">Director</p>
                <p className="text-gray-600 mt-2 max-w-sm">
                  Leading the museum since 2018, with a background in Classical Archaeology and Museum Studies.
                </p>
              </div>
              
              {/* Deputy Director */}
              <div className="flex flex-col items-center text-center">
                <img 
                  src="https://source.unsplash.com/random/300x300/?portrait,man" 
                  alt="Dr. Marcus Chen"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-serif font-bold">Dr. Marcus Chen</h3>
                <p className="text-museum-navy font-medium">Deputy Director</p>
                <p className="text-gray-600 mt-2 max-w-sm">
                  Overseeing operations and research with expertise in Asian art history and cultural heritage.
                </p>
              </div>
              
              {/* Chief Curator */}
              <div className="flex flex-col items-center text-center">
                <img 
                  src="https://source.unsplash.com/random/300x300/?portrait,person" 
                  alt="Prof. James Okonkwo"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-serif font-bold">Prof. James Okonkwo</h3>
                <p className="text-museum-navy font-medium">Chief Curator</p>
                <p className="text-gray-600 mt-2 max-w-sm">
                  Internationally recognized expert in African and Mediterranean archaeology with over 30 years of experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Visit Information */}
        <section className="py-16 bg-white">
          <div className="museum-container">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center">Visit Information</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Map */}
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7657364866815!2d-0.1294319!3d51.5194133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sThe%20British%20Museum!5e0!3m2!1sen!2suk!4v1716406115592!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* Info */}
              <div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">Opening Hours</h3>
                    <p className="text-gray-700">10:00–17:00 (Monday to Sunday)</p>
                    <p className="text-gray-700">Last entry: 16:00</p>
                    <p className="text-gray-500 text-sm mt-1">Closed 24-26 December and 1 January</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">Admission</h3>
                    <p className="text-gray-700">Free entry to the museum</p>
                    <p className="text-gray-700">Some exhibitions and events may charge a fee</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">Address</h3>
                    <address className="not-italic text-gray-700">
                      <p>Great Russell Street</p>
                      <p>London WC1B 3DG</p>
                      <p>United Kingdom</p>
                    </address>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-xl font-serif font-medium mb-2">Contact</h3>
                    <p className="text-gray-700">Phone: +44 (0)20 7323 8299</p>
                    <p className="text-gray-700">Email: information@britishmuse.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
