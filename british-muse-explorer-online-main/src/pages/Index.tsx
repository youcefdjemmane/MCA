
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OpeningHours from "@/components/OpeningHours";
import EventsSection from "@/components/EventsSection";
import ReserveVisitPromo from "@/components/ReserveVisitPromo";
import VirtualTourPromo from "@/components/VirtualTourPromo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <OpeningHours />
        <EventsSection />
        <ReserveVisitPromo />
        <VirtualTourPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
