import React, {Component} from 'react';
import Header from "../header/header";
import MenuButton from "./menuButtons/menuButton";
import "./home.css";
import {Route} from "react-router-dom";
import RegisterForm from "../navigation/forms/register";
import LoginForm from "../navigation/forms/login";
import Contact from "../navigation/contact/contact";
import ShowHideMenuButton from "./menuButtons/showHideMenuButton";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalClasses: ["", "", "", "", "", "", ""],
            classes: ["", "", "", "", "", "", "", ""],
            moveAwayClasses: [" active away1", " active away2", " active away3",
                " active away4", " active  away5", " active  away6", " moveAwayTitle"],
            disAppearClasses: [" disAppearHex1", " disAppearHex2", " disAppearHex3", " disAppearHex4",
                " disAppearHex5", " disAppearHex6", " moveAwayTitle"],
            hideHeaderClass: "",
            menu: "",
            menuIcon: () => <i className="fa fa-bars"/>,
            menuClosed: true
        }
    }

    tick() {
        let path = this.props.location.pathname;
        if (path === "/") {
            this.setState({classes: this.state.originalClasses, menu: "", hideHeaderClass: ""})
        } else if (path === "/login" || path === "/register" || path === "/contact") {
            this.setState({classes: this.state.moveAwayClasses, menu: "", hideHeaderClass: ""})
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    hideMenu = () => {
        this.setState({
            hideHeaderClass: " hideHeader"
        });
    };

    onClick = () => {
        this.setState({
            classes: this.state.moveAwayClasses
        });
    };

    onClickDashboard = () => {
        this.setState({menuClosed: true, hideHeaderClass: "  hideHeader", menu: " showHideMenuAppear",
            classes: this.state.originalClasses});
    };

    onClickMenu = () => {
        if (this.state.menuClosed) {
            this.setState({menuIcon: () => <i className="fa fa-close"/>, menuClosed: false, hideHeaderClass: "", classes: this.state.originalClasses})
        }else{
            this.setState({menuIcon: () => <i className="fa fa-bars"/>, menuClosed: true, hideHeaderClass: "  hideHeader" , classes: this.state.originalClasses})
        }
    };

    render() {
        return (
            <div className="homeWrapper">
                <div className={"headerAndMenu" + this.state.hideHeaderClass}>
                    <Route exact path="/register" component={RegisterForm}/>
                    <Route exact path="/login" component={LoginForm}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Header class={this.state.classes[6]}/>
                    <MenuButton classMain={"hex hex1" + this.state.classes[0]} onClick={this.onClick} number="1"
                                path="/login" btnName="Log in"/>
                    <MenuButton classMain={"hex hex2" + this.state.classes[1]} onClick={this.onClick} number="2"
                                path="/register" btnName="Register"/>
                    <MenuButton classMain={"hex hex3" + this.state.classes[2]} onClick={this.onClick} number="3"
                                path="/careers" btnName="careers"/>
                    <MenuButton classMain={"hex hex4" + this.state.classes[3]} onClick={this.onClickDashboard} number="4"
                                path="/dashboard" btnName="projects"/>
                    <MenuButton classMain={"hex hex5" + this.state.classes[4]} onClick={this.onClick} number="5"
                                path="/about" btnName="about us"/>
                    <MenuButton classMain={"hex hex6" + this.state.classes[5]} onClick={this.onClick} number="6"
                                path="/contact" btnName="contact us"/>
                </div>
                <div className={"showHideMenuOuter" + this.state.menu} onClick={this.onClickMenu}>
                    <h3>{this.state.menuIcon()}</h3>
                    <ShowHideMenuButton hasBars={true} number="1"/>
                    <ShowHideMenuButton number="2"/>
                    <ShowHideMenuButton number="3"/>
                    <ShowHideMenuButton number="4"/>
                    <ShowHideMenuButton number="5"/>
                    <ShowHideMenuButton number="6"/>
                    <ShowHideMenuButton number="7"/>
                </div>
            </div>
        );
    }
}

export default Home;