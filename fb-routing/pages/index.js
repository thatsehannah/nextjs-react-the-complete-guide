import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
