import React, {Component} from 'react';
import "./style.css";

class Body extends Component {
    render() {
        return (
            <div className="mainContainer">
                {this.props.children}
            </div>
        );
    }
}

export default Body;