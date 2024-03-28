import { YearlyEventsData } from './index.js';

const Events = () => {
  return (
    <section id="events" className="events events-content sm:m-2 mt-10 mx-auto text-center min-h-screen lg:ml-10 lg:mr-10">
      <div className="title mb-6">
        <h1 className="text-[#003f87] text-5xl font-semibold mb-4 sm:mt-8 md:mt-4">Events</h1>
        <div className="line mb-7 w-16 border-t-4 border-[#ffb225] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {YearlyEventsData.map((event, index) => (
          <EventCard event={event} key={index} />
        ))}
      </div>
    </section>
  );
};

const EventCard = ({ event }) => (
  <div className="event w-full max-w-[450px] sm:w-[calc(50% - 20px)] md:w-[400px] lg:w-[450px] shadow-md rounded-md bg-gray-100 mx-auto mb-6 sm:mx-2 md:mx-4 lg:mx-0">
    <div className="flex flex-col justify-between h-full">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[200px] sm:h-[250px] md:h-[200px] lg:h-[250px] object-cover object-center rounded-t-md mb-2"
      />
      <div className="p-1">
        <h4 className="text-lg font-bold mb-1">{event.title}</h4>
        <p className="mb-2 text-sm text-gray-600">{event.description}</p>
      </div>
    </div>
  </div>
);

export default Events;
