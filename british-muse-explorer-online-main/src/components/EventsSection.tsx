
import { useState } from "react";
import { Button } from "@/components/ui/button";
import EventCard, { EventProps } from "./EventCard";

// Sample events data
const events: EventProps[] = [
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
  }
];

const EventsSection = () => {
  const [visibleEvents, setVisibleEvents] = useState(3);
  
  const showMoreEvents = () => {
    setVisibleEvents(Math.min(visibleEvents + 3, events.length));
  };
  
  return (
    <section className="py-16 bg-museum-cream">
      <div className="museum-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Current and Upcoming Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exciting program of exhibitions, events, and activities that bring our collection to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, visibleEvents).map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        {visibleEvents < events.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="museum-btn-outline"
              onClick={showMoreEvents}
            >
              Show More Events
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
