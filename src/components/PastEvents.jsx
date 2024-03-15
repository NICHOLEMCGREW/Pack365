// Events.jsx
import React from 'react';
import { FaceBookEventsData } from './index';

const EventCard = ({ event }) => (
  <div style={{ maxWidth: '500px' }} className="mb-6 p-4 bg-white rounded-lg shadow-md">
    <p className="text-lg font-bold mb-2">{event.date}</p>
    <img src={event.image} alt={event.title} className="w-full h-40 object-cover mb-2" />
    <p className="text-lg mb-2">{event.title}</p>
    <p className="text-sm mb-4">{event.location}</p>
    <a href={event.infoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      View Facebook Event
    </a>
  </div>
);

const PastEvents = () => {
  const currentDate = new Date();
  const pastEventsData = FaceBookEventsData.filter((event) => new Date(event.date) < currentDate);

  return (
    <div className="p-6">
      {/* Display past events */}
      <div className="past-events h-full">
        
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEventsData.map((event) => (
            <EventCard event={event} key={event.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
