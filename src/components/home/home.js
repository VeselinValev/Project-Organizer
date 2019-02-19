import React, {Component} from 'react';
import Header from "../header/header";
import MenuButton from "./menuButtons/menuButton";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalClasses: ["", "", "", "", "", "", ""],
            classes: ["", "", "", "", "", "", "", ""],
            moveAwayClasses: [" active away1", " active away2", " active away3",
                " active away4", " active  away5", " active  away6", " moveAwayTitle"],
            dashBoardClasses: [" dash1", " dash2", " dash3", " dash4", " dash5", " dash6", " moveAwayTitle"]
        }
    }

    tick() {
        let path = this.props.location.pathname;
        if (path === "/") {
            this.setState({classes: this.state.originalClasses})
        } else if (path === "/login" || path === "/register" || path === "/contact") {
            this.setState({classes: this.state.moveAwayClasses})
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onClick = () => {
        this.setState({
            classes: this.state.moveAwayClasses
        });
    };

    render() {
        return (
            <div>
                <Header class={this.state.classes[6]}/>
                <MenuButton classMain={"hex hex1" + this.state.classes[0]} onClick={this.onClick} number="1" path="/login"  btnName="Log in"/>
                <MenuButton classMain={"hex hex2" + this.state.classes[1]} onClick={this.onClick} number="2" path="/register" btnName="Register"/>
                <MenuButton classMain={"hex hex3" + this.state.classes[2]} onClick={this.onClick} number="3" path="/careers" btnName="careers"/>
                <MenuButton classMain={"hex hex4" + this.state.classes[3]} onClick={this.onClick} number="4" path="/dashboard" btnName="projects"/>
                <MenuButton classMain={"hex hex5" + this.state.classes[4]} onClick={this.onClick} number="5" path="/about" btnName="about us"/>
                <MenuButton classMain={"hex hex6" + this.state.classes[5]} onClick={this.onClick} number="6" path="/contact" btnName="contact us"/>
            </div>
        );
    }
}

export default Home;