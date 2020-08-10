import React from 'react';

const Project = (props) => (
  <div>
    <h1>This is my Project</h1>
    <p>This is my project with an id of {props.match.params.id}</p>
  </div>
);

export default Project;