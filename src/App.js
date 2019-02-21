import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./routes";
import Layout from "./hoc/layout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Routes/>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
