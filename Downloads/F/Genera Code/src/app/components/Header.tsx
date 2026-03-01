import { useState } from 'react';
import { ChevronDown, Bell } from 'lucide-react';

export function Header() {
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [showClubsDropdown, setShowClubsDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-16 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-10">
            <button className="font-medium text-sm text-black hover:text-gray-600 transition-colors">
              Home
            </button>
            
            <div className="relative">
              <button
                className="flex items-center gap-1 font-medium text-sm text-gray-900 hover:text-gray-600 transition-colors"
                onMouseEnter={() => setShowEventsDropdown(true)}
                onMouseLeave={() => setShowEventsDropdown(false)}
              >
                Events
                <ChevronDown size={16} />
              </button>
              {showEventsDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[160px]"
                  onMouseEnter={() => setShowEventsDropdown(true)}
                  onMouseLeave={() => setShowEventsDropdown(false)}
                >
                  <a href="#upcoming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Upcoming Events</a>
                  <a href="#past" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Past Events</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center gap-1 font-medium text-sm text-gray-900 hover:text-gray-600 transition-colors"
                onMouseEnter={() => setShowClubsDropdown(true)}
                onMouseLeave={() => setShowClubsDropdown(false)}
              >
                Clubs
                <ChevronDown size={16} />
              </button>
              {showClubsDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[160px]"
                  onMouseEnter={() => setShowClubsDropdown(true)}
                  onMouseLeave={() => setShowClubsDropdown(false)}
                >
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">All Clubs</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Join a Club</a>
                </div>
              )}
            </div>

            <button className="font-medium text-sm text-gray-900 hover:text-gray-600 transition-colors">
              About Us
            </button>
          </nav>

          <div className="flex items-center gap-6">
            <button className="relative hover:opacity-70 transition-opacity">
              <Bell size={24} className="text-gray-900" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-600 rounded-full" />
            </button>
            <button className="w-9 h-9 rounded-full bg-gray-300 hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </div>
    </header>
  );
}
