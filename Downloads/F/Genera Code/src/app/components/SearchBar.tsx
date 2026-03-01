import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-[625px] mx-auto">
      <input
        type="text"
        placeholder="Search for events...."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 pl-12 pr-4 rounded-2xl border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
      />
      <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3a5b22]" />
    </div>
  );
}
