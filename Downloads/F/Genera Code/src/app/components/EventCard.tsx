import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '../types/event';

interface EventCardProps {
  event: Event;
  onJoinToggle?: (eventId: string) => void;
  isJoined?: boolean;
}

export function EventCard({ event, onJoinToggle, isJoined }: EventCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Date Badge */}
        <div className="absolute top-3 left-3 bg-white rounded-lg shadow-lg px-2 pt-2 pb-1 w-[60px] text-center">
          <div className="text-xs font-semibold text-gray-600 uppercase">{event.date.month}</div>
          <div className="text-2xl font-bold text-gray-900">{event.date.day}</div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-gray-900 px-3 py-1 rounded-lg">
          <span className="text-xs font-medium text-white">{event.category}</span>
        </div>

        {/* Overlay for past events */}
        {event.isPast && (
          <div className="absolute inset-0 bg-black/30" />
        )}
      </div>

      <div className="p-4 relative">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-6">{event.organizer}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} className="text-gray-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} className="text-gray-500" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={16} className="text-gray-500" />
            <span>{event.interested} interested</span>
          </div>
        </div>

        {!event.isPast && onJoinToggle && (
          <button
            onClick={() => onJoinToggle(event.id)}
            className={`w-full py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
              isJoined
                ? 'bg-[#2a4718] text-white hover:bg-[#1f3312]'
                : 'bg-[#3a5b22] text-white hover:bg-[#2a4718]'
            }`}
          >
            {isJoined ? 'Joined' : 'Join Now'}
          </button>
        )}
      </div>
    </div>
  );
}
