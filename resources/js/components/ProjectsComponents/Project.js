import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Project = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [project, setProject] = useState({});
    const [bugs, setBugs] = useState([]);

    const params = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:8001/api/projects/${params.id}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setBugs(result.bugs);
                    setIsLoading(false);
                    setProject(result);
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
            <div className="projectShow">
                <div className="projectHeader">
                    <div className="headers">
                        <h1>{project.title}</h1>
                        <h3>Bugs to be fixed: {bugs.length}</h3>
                    </div>
                    <div className="addBug">add new bug</div>
                </div>

                <ul className="projectsBugs">
                    {bugs.map((bug) => {
                        return (
                            <li className="bug">
                                <div className="bugsProperties">
                                    <div>
                                        <h4>{bug.title}</h4>
                                    </div>
                                    <div>{bug.description}</div>
                                </div>
                                <div className="bugsCrud">
                                    <div>remove</div>
                                    <div>edit</div>
                                    <div>status</div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default Project;
