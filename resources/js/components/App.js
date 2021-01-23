import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

import Charts from './Charts';
import Projects from './Projects';
import Log from './Log';
import Team from './Team';


import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// import './index.css';
import './style.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Navbar />
                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/log">
                        <Log />
                    </Route>
                    <Route path="/team">
                        <Team />
                    </Route>
                    <Route path="/">
                        <Charts />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}