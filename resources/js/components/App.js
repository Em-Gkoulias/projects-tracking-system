import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Charts from './Charts';
import Footer from './Footer';

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
                    <Route path="/projects"></Route>
                    <Route path="/log"></Route>
                    <Route path="/team"></Route>
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