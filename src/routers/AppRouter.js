import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AnimationContainer from '../animations/AnimationContainer';
import Navbar from '../components/Navbar';
import RouterSwitch from '../components/RouterSwitch';




const AppRouter = () => (
  <BrowserRouter>
    <div>
      <AnimationContainer />
      <div className="mainpage">
        <Navbar/>
        <RouterSwitch/>
      </div>
    </div>
  </BrowserRouter >
);

export default AppRouter;


/* Fallback

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <div className="sqone"></div>
      <div className="sqtwo"></div>
      <div className="sqthree"></div>
      <AnimationContainer />
      <div className="sqfour">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path='/contact' component={Contact} />
          <Route path='/portfolio' component={Portfolio} exact={true} />
          <Route path='/portfolio/:id' component={Project} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter >
);


export default AppRouter;
*/