import React from 'react';

import EventItem from './EventItem';
import classes from '../../styles/EventList.module.css';

const EventList = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
