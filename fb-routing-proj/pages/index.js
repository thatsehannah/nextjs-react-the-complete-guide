import React from 'react';

import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/eventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
