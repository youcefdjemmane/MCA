
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard, { EventProps } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays } from "lucide-react";

// Sample events data (expanded)
const eventsData: EventProps[] = [
  {
    id: 1,
    title: "Ancient Egypt: Life and Death in the Valley of the Kings",
    date: "June 20 - September 5, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?egypt,ancient",
    category: "Exhibition",
    shortDescription: "Explore the fascinating world of Ancient Egypt and discover the stories behind the famous Valley of the Kings.",
    isFeatured: true
  },
  {
    id: 2,
    title: "Japanese Woodblock Prints: From Hokusai to the Present",
    date: "July 10 - October 15, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?japan,art",
    category: "Exhibition",
    shortDescription: "This exhibition traces the evolution of Japanese woodblock prints from the iconic works of Hokusai to contemporary interpretations."
  },
  {
    id: 3,
    title: "The Art of the Medieval Manuscript",
    date: "August 5, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?medieval,manuscript",
    category: "Workshop",
    shortDescription: "Join our expert conservator for a hands-on workshop exploring the techniques behind medieval manuscript illumination."
  },
  {
    id: 4,
    title: "Greek Mythology: Gods and Heroes",
    date: "September 12 - December 20, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?greek,statue",
    category: "Exhibition",
    shortDescription: "A spectacular exhibition featuring sculptures, pottery and artifacts that bring to life the gods and heroes of ancient Greek mythology."
  },
  {
    id: 5,
    title: "Curator's Tour: Renaissance Masterpieces",
    date: "July 25, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?renaissance,art",
    category: "Tour",
    shortDescription: "Join our senior curator for an exclusive after-hours tour of our Renaissance collection, with insights into the techniques and stories behind the masterpieces."
  },
  {
    id: 6,
    title: "Family Day: Archaeological Adventure",
    date: "August 15, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?archaeology",
    category: "Family",
    shortDescription: "A fun-filled day for the whole family with hands-on archaeological activities, storytelling, and craft workshops inspired by ancient civilizations."
  },
  {
    id: 7,
    title: "Lecture Series: Indigenous Art of Australia",
    date: "September 8, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?australia,art",
    category: "Lecture",
    shortDescription: "A fascinating talk exploring the rich traditions of Australian Indigenous art, from ancient rock paintings to contemporary expressions."
  },
  {
    id: 8,
    title: "The Vikings: Myth and Reality",
    date: "October 1 - January 15, 2026",
    imageUrl: "https://source.unsplash.com/random/800x600/?viking",
    category: "Exhibition",
    shortDescription: "This major exhibition explores the Vikings' far-reaching influence, separating fact from fiction and revealing new insights from the latest archaeological discoveries."
  },
  {
    id: 9,
    title: "Photography Workshop: Museum Architecture",
    date: "July 18, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?architecture,museum",
    category: "Workshop",
    shortDescription: "Develop your photography skills in this workshop focusing on capturing the stunning neoclassical architecture of the museum building."
  },
  {
    id: 10,
    title: "Chinese Ceramics Through the Ages",
    date: "November 5, 2025 - February 10, 2026",
    imageUrl: "https://source.unsplash.com/random/800x600/?chinese,ceramic",
    category: "Exhibition",
    shortDescription: "Discover the exquisite craftsmanship of Chinese ceramics from the Neolithic period to the present day in this comprehensive exhibition."
  },
  {
    id: 11,
    title: "Members' Preview Evening: New Acquisitions",
    date: "August 28, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?art,gallery",
    category: "Members",
    shortDescription: "An exclusive evening for museum members to preview our newest acquisitions before they go on public display."
  },
  {
    id: 12,
    title: "The Art of Islamic Calligraphy",
    date: "September 15 - November 20, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600/?islamic,calligraphy",
    category: "Exhibition",
    shortDescription: "Explore the beautiful tradition of Islamic calligraphy through rare manuscripts, decorative objects, and contemporary artworks."
  }
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleEvents, setVisibleEvents] = useState(6);
  
  const filterEvents = (category: string) => {
    if (category === "all") {
      return eventsData;
    }
    return eventsData.filter(event => event.category.toLowerCase() === category.toLowerCase());
  };
  
  const filteredEvents = filterEvents(activeFilter);
  
  const showMoreEvents = () => {
    setVisibleEvents(prev => Math.min(prev + 6, filteredEvents.length));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-museum-navy text-white py-16">
          <div className="museum-container">
            <div className="flex items-center gap-3 mb-4">
              <CalendarDays className="h-8 w-8 text-museum-gold" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold">Events</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl">
              Discover our exciting program of exhibitions, events, workshops and activities that bring our collection to life.
            </p>
          </div>
        </div>
        
        {/* Events Listing */}
        <div className="py-12 bg-white">
          <div className="museum-container">
            {/* Filters */}
            <Tabs defaultValue="all" className="mb-10" onValueChange={setActiveFilter}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                <TabsTrigger value="all">All Events</TabsTrigger>
                <TabsTrigger value="exhibition">Exhibitions</TabsTrigger>
                <TabsTrigger value="workshop">Workshops</TabsTrigger>
                <TabsTrigger value="tour">Tours</TabsTrigger>
                <TabsTrigger value="lecture">Lectures</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="exhibition" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="workshop" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tour" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="lecture" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="family" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="members" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Load More Button */}
            {visibleEvents < filteredEvents.length && (
              <div className="text-center mt-10">
                <Button 
                  variant="outline" 
                  className="museum-btn-outline"
                  onClick={showMoreEvents}
                >
                  Load More Events
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
