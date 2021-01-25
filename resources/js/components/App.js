import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

import Charts from './Charts';
import Projects from './Projects';
import Log from './Log';
import Team from './Team';

import Project from './ProjectsComponents/Project';
import CreateBug from './CreateBug';


import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import './style.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Charts} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/projects/:id/create" exact component={CreateBug} />
                    <Route path="/projects/:id" component={Project} />
                    <Route path="/log" component={Log} />
                    <Route path="/team" component={Team} />
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