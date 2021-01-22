import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

import Charts from './Charts';
import Projects from './Projects'


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

                    </Route>
                    <Route path="/team">

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