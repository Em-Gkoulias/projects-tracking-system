import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Remove = (props) => {
    const history = useHistory();

    const { id, project_id, title, description, created_at, updated_at } = props["bug"];

    const [showRemove, setShowRemove] = useState(true);

    const handleClick = (e) => {
        e.preventDefault();
        setShowRemove(!showRemove);
    };

    const handleRemove = (e) => {
        e.preventDefault();
        console.log(id, title, project_id, description, created_at, updated_at);

        fetch(`http://127.0.0.1:8001/api/bugs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                history.push('/');
                history.replace(`/projects/${project_id}`);
            });
    };

    return (
        <div>
            {showRemove ? (
                <button type="button" onClick={handleClick}>
                    delete
                </button>
            ) : (
                <div>
                    <div className="confirmButtonsBg">
                        <p>Are you sure?</p>

                        <button
                            className="confirmButtons yesBtn"
                            onClick={handleRemove}
                        >
                            yes
                        </button>

                        <button
                            className="confirmButtons"
                            onClick={handleClick}
                        >
                            no
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Remove;
