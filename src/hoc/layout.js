import React, {Component} from 'react';
import Footer from "../components/footer/footer";
import Body from "./body";

class Layout extends Component {

    render() {
        return (
            <div>
                <Body>
                {this.props.children}
                </Body>
                <Footer/>
            </div>
        );
    }
}

export default Layout;