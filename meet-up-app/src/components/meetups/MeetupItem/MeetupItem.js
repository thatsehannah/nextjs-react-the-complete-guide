import React, { useContext } from 'react';

import Card from '../../ui/Card/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../../store/favorites-context';

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.meetup.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.meetup.id,
        title: props.meetup.title,
        description: props.meetup.description,
        image: props.meetup.image,
        address: props.meetup.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
