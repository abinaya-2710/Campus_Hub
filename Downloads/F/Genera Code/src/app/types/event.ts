export interface Event {
  id: string;
  title: string;
  organizer: string;
  date: {
    month: string;
    day: string;
  };
  time: string;
  location: string;
  interested: number;
  category: string;
  image: string;
  isPast?: boolean;
}
