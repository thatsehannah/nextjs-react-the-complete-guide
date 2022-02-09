import React from 'react';
import { useRouter } from 'next/router';

const SelectedClientProject = () => {
  console.log(useRouter().query); //{id: '<value>', clientprojectid: '<value>'}
  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
};

export default SelectedClientProject;
