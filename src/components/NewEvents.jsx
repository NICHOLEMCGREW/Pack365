import { YearlyEventsData } from './index.js';

const NewEvents = () => {
  return (
        <section id="events" className="events flex items-center justify-center mt-4">
           
            <div className="image-grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid gap-5 lg:mr-40 mt-8">
              <img src={zoo} alt="Zoo" className="w-[400px] lg:w-[800px] rounded-lg shadow-lg" />
              <img src={hike} alt="hike" className="w-[400px] lg:w-[800px] rounded-lg shadow-lg" />
              <img src={popcorn} alt="Popcorn" className="w-[400px] lg:w-[800px] rounded-lg shadow-lg" />
              <img src={parade} alt="Parade" className="w-[400px] lg:w-[800px] rounded-lg shadow-lg" />
            </div>
        </section>
      );
    };

export default NewEvents;
