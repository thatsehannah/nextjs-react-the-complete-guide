import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList/MeetupList';

import FavoritesContext from '../store/favorites-context';

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You do not have any favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite Meetups</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
