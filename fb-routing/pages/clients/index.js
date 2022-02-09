import React from 'react';
import Link from 'next/link';

//URL
//domain.com/clients
const Clients = () => {
  const clients = [
    { id: 'elliot', name: 'Elliot' },
    { id: 'wilma', name: 'Wilma' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
