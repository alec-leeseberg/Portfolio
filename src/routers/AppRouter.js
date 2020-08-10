import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Contact from '../components/Contact'
import Home from '../components/Home';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import NotFoundPage from '../components/NotFoundPage';
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';



const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <div className="sqone"></div>
      <div className="sqtwo"></div>
      <div className="sqthree"></div>
      <div className="sqfour">
        <Navbar/>
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