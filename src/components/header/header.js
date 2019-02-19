import React, {Component} from 'react';
import "./header.css";

class Header extends Component {

    render() {
        return (
            <div className={"headerWrapper" + this.props.class}>
                <div className="titleBarOuter">
                    <div className="titleBarInner titleBarInner1">

                    </div>
                </div>
                <div className="titleBarOuter">
                    <div className="titleBarInner titleBarInner2">

                    </div>
                </div>
                <div className="titleOuter">
                    <div className="title">
                        <h2 className="text">The project house</h2>
                        <h4 className="text">a simple organizer</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;