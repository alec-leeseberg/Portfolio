import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Home from '../components/Home';

class RouterSwitch extends React.Component {
    render() {
        const { theme } = this.props;
        return (
            <Switch>
                <Route path="/" render={props => (<Home {...props} theme={theme} exact={true} />)} />
                <Route path='/contact' component={Contact} />
                <Route path='/portfolio' component={Portfolio} exact={true} />
                <Route path='/portfolio/:id' component={Project} />
                <Route component={NotFoundPage} />
            </Switch>
        );
    }
}
export default RouterSwitch;




/*
const RouterSwitch = () => (
    <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} exact={true} />
        <Route path='/portfolio/:id' component={Project} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default RouterSwitch;



           <Switch>
                <Route path="/" render={props => (<Home {...props} theme={theme} exact={true} />)} />
                <Route path="/contact" render={props => (<Contact/>)} />
                <Route path='/portfolio' component={Portfolio} exact={true} />
                <Route path='/portfolio/:id' component={Project} />
                <Route component={NotFoundPage} />
            </Switch>
*/