import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimationContainer from '../animations/AnimationContainer';
import Navbar from '../components/Navbar';
import RouterSwitch from '../components/RouterSwitch';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <div className="mainpage"> 
        <Navbar/>
        <RouterSwitch/>
      </div>
    </div>
  </BrowserRouter >
);


export default AppRouter;


/* Fallback
      <AnimationContainer />

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <div className="mainpage">
        <Navbar/>
        <RouterSwitch/>
      </div>
    </div>
  </BrowserRouter >
);

export default AppRouter;

*/