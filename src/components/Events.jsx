import { YearlyEventsData } from './index.js';

const Events = () => {
  return (
    <section id="events" className="events events-content text-center min-h-screen m-20">
      <div className="title mb-6">
        <h1 className="text-[#003f87] text-5xl font-semibold mb-4 sm:mt-8 md:mt-4">Events</h1>
        <div className="line mb-7 w-16 border-t-4 border-[#ffb225] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {YearlyEventsData.map((event, index) => (
          <EventCard event={event} key={index} />
        ))}
      </div>
    </section>
  );
};

const EventCard = ({ event }) => (
  <div className="event shadow-md rounded-md bg-gray-100 w-[400px]">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-[250px] object-cover object-center rounded-t-md mb-2"
    />
    <div className="p-1">
      <h4 className="text-lg font-bold mb-1">{event.title}</h4>
      <p className="mb-2 text-sm text-gray-600">{event.description}</p>
    </div>
  </div>
);

export default Events;
