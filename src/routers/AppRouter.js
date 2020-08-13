import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import AnimationContainer from '../animations/AnimationContainer';
import Navbar from '../components/Navbar';
import RouterSwitch from '../components/RouterSwitch';


const store = createStore((state = { theme: "Dark", hamburgeractive: "inactive" }) => {
  return state;
});

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
    this.handleToggleHamburger = this.handleToggleHamburger.bind(this);
    this.state = {
      theme: "Light",
      hamburgeractive: "inactive"
    };
  }

  handleToggleTheme() {
    this.setState((prevState) => {
      if (prevState.theme == "Dark")
        return {
          theme: "Light"
        };
      else if (prevState.theme == "Light")
        return {
          theme: "Dark"
        };
    });
  }

  handleToggleHamburger() {
    this.setState((prevState) => {
      if(prevState.hamburgeractive == "inactive")
        return {
          hamburgeractive: "is-active",
        };
        else if (prevState.hamburgeractive == "is-active")
        return {
          hamburgeractive: "inactive"
        };
    });
  }

  render() {
    console.log(this.state.theme);
    console.log(this.state.hamburgeractive);
    return (
      <BrowserRouter>
        <div>
        <AnimationContainer />
          <div className="mainpage" theme={this.state.theme}>
            <Navbar theme={this.state.theme} hamburgeractive={this.state.hamburgeractive} //Pass in state components, then handles
                    handleToggleTheme={this.handleToggleTheme} handleToggleHamburger={this.handleToggleHamburger}/>  
            <RouterSwitch theme={this.state.theme}/>
          </div>
        </div>
      </BrowserRouter >
    );
  }
}


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