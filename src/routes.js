import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from "./hoc/layout";
import Home from "./components/home/home";
import RegisterForm from "./components/navigation/forms/register";
import LoginForm from "./components/navigation/forms/login";
import Support from "./components/navigation/support/support";
import About from "./components/navigation/about/about";
import Contact from "./components/navigation/contact/contact";
import Careers from "./components/navigation/careers/careers";
import Dashboard from "./hoc/dashboard";


const Routes = () => {
    return (
        <div>
            <Route path="/" component={Home}/>
            <Route exact path="/register" component={RegisterForm}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/support" component={Support}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/careers" component={Careers}/>
            <Route path="/dashboard" component={Dashboard}/>
        </div>
    )
};

export default Routes;