import React from "react";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Projects = () => {
    // <li className="project">
    //     <ul>
    //         <li>
    //             <div className="projectTitle">
    //                 <Link to="/">Title: {item.title}</Link>
    //             </div>
    //         </li>
    //         <li>
    //             <p>Description: {item.description}</p>
    //         </li>
    //         <li>
    //             <p className="bugs">Bugs: {item.bugs}</p>
    //         </li>
    //     </ul>
    // </li>;


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8001/api/projects")
            .then(res => console.log(res))
            .then(console.log)
    }, []);
    return <div></div>





    // const data = [
    //     { name: "project1", description: "description for project1", bugs: 1 },
    //     { name: "project2", description: "description for project2", bugs: 2 },
    //     { name: "project3", description: "description for project3", bugs: 3 },
    // ];

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8001/api/projects')
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    //     console.log(items);
    //     return (
    //         <div className="Projects">
    //         <ul>
    //             {items.map((item) => {
    //                 return (
                        
    //                 );
    //             })}
    //         </ul>
    //     </div>
    //     );
    // }
};

export default Projects;
