import { EventCard } from './EventCard';
import { Event } from '../types/event';

interface EventSectionProps {
  title: string;
  description: string;
  events: Event[];
  onJoinToggle?: (eventId: string) => void;
  joinedEvents?: Set<string>;
  onViewAll?: () => void;
}

export function EventSection({ 
  title, 
  description, 
  events, 
  onJoinToggle, 
  joinedEvents,
  onViewAll 
}: EventSectionProps) {
  return (
    <section className="w-full max-w-[1327px] mx-auto px-4">
      <div className="flex items-center justify-between mb-11">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <button 
          onClick={onViewAll}
          className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onJoinToggle={onJoinToggle}
            isJoined={joinedEvents?.has(event.id)}
          />
        ))}
      </div>
    </section>
  );
}
