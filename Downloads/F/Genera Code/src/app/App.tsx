import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { EventSection } from './components/EventSection';
import { Footer } from './components/Footer';
import { upcomingEvents, pastEvents } from './data/events';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [joinedEvents, setJoinedEvents] = useState<Set<string>>(new Set());

  const handleJoinToggle = (eventId: string) => {
    setJoinedEvents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const filteredUpcomingEvents = useMemo(() => {
    if (!searchQuery.trim()) return upcomingEvents;
    
    const query = searchQuery.toLowerCase();
    return upcomingEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const filteredPastEvents = useMemo(() => {
    if (!searchQuery.trim()) return pastEvents;
    
    const query = searchQuery.toLowerCase();
    return pastEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-5xl font-semibold uppercase text-black mb-4 tracking-wide">
            Discover What's Happening On Campus
          </h1>
          <p className="text-gray-500 text-base mb-8">
            Explore, register, and never miss out on the latest club activities and student-led experiences
          </p>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div id="upcoming" className="py-16">
        <EventSection
          title="Upcoming Events"
          description="Don't miss out on these exciting happenings"
          events={filteredUpcomingEvents.slice(0, 6)}
          onJoinToggle={handleJoinToggle}
          joinedEvents={joinedEvents}
          onViewAll={() => alert('View all upcoming events')}
        />
      </div>

      {/* Past Events Section */}
      <div id="past" className="py-16">
        <EventSection
          title="Past Events"
          description="Take a look at the events that have already taken place across campus."
          events={filteredPastEvents}
          onViewAll={() => alert('View all past events')}
        />
      </div>

      <Footer />
    </div>
  );
}
