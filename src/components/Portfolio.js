import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = (props) => (
  <div>
    <h1>My Work</h1>
    <Link to="/portfolio/1" >Project 1</Link> 
    <Link to="/portfolio/2" >Project 2</Link>
  </div>
);

export default Portfolio;