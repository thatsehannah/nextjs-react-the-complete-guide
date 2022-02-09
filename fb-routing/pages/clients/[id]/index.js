import React from 'react';
import { useRouter } from 'next/router';

const ClientProjects = () => {
  console.log(useRouter().query);

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
    </div>
  );
};

export default ClientProjects;
