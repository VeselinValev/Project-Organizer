import React from 'react';
import {Route} from 'react-router-dom';
import Home from "./components/home/home";
import Support from "./components/navigation/support/support";
import About from "./components/navigation/about/about";
import Careers from "./components/navigation/careers/careers";
import Dashboard from "./hoc/dashboard";
import "./routes.css";


const Routes = () => {
    return (
        <div className="routeWrapper">
            <Route path="/" component={Home}/>
            <Route exact path="/support" component={Support}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/careers" component={Careers}/>
            <Route path="/dashboard" component={Dashboard}/>
        </div>
    )
};

export default Routes;