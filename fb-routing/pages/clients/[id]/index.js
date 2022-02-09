import React from 'react';
import { Router, useRouter } from 'next/router';

//URL
//domain.com/clients/<id>
const ClientProjects = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'elliot', clientprojectid: 'projecta' },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjects;
