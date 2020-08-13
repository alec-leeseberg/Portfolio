import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimationContainer from '../animations/AnimationContainer';
import Navbar from '../components/Navbar';
import RouterSwitch from '../components/RouterSwitch';


class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
    this.state = {
      theme: "Dark"
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
  render() {
    console.log(this.state.theme);
    return (
      <BrowserRouter>
        <div>
          <div className="mainpage">
            <Navbar theme={this.state.theme} handleToggleTheme={this.handleToggleTheme}/>
            <RouterSwitch />
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