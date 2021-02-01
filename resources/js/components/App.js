import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

import Charts from './AppComponents/Charts';
import Projects from "./AppComponents/Projects";
import Log from "./AppComponents/Log";
import Team from "./AppComponents/Team";

import Project from './ProjectsComponents/Project';
import CreateProject from './ProjectsComponents/CreateProject';
import EditProject from './ProjectsComponents/EditProject';
import CreateBug from './ProjectsComponents/CreateBug';
import EditBug from './ProjectsComponents/EditBug';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
                    <Route path="/projects/create" exact component={CreateProject} />
                    <Route path="/projects/:id/edit" exact component={EditProject} />
                    <Route
                        path="/projects/:id/create"
                        exact
                        component={CreateBug}
                    />
                    <Route
                        path="/projects/:id/:bugId/edit"
                        exact
                        component={EditBug}
                    />
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