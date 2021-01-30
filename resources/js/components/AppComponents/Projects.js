import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

const Projects = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8001/api/projects")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoading(false);
                    setProjects(result);
                },
                (error) => {
                    setIsLoading(false);
                    setError(error);
                }
            );
            
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="Projects">
                <h1>Click on a projects title to enter the project</h1>
                <ul>
                    {projects.map((project) => {
                        return (
                            <li className="project">
                                <ul>
                                    <li>
                                        <div className="projectTitle">
                                            <Link to={`projects/${project.id}`}>
                                                Title: {project.title}
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <p>
                                            Description: {project.description}
                                        </p>
                                    </li>
                                    <li>
                                        <p className="bugs">
                                            Bugs: {project.bugs.length}
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default Projects;
