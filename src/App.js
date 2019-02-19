import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import Routes from "./routes";
import Layout from "./hoc/layout";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Routes/>
                </Layout>
            </HashRouter>
        );
    }
}

export default App;
