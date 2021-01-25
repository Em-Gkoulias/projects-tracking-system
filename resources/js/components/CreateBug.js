import React from 'react';
import {useParams} from 'react-router-dom'

const CreateBug = () => {
    let id = useParams()['id'];
    // console.log(id)
    return (
        <div className="CreateBug">
            <h1 className="createBugHeader">Add new bug to project</h1>
            <form method="POST" action={`/api/projects/${id}`} className="addBugForm">
                <label>
                    Title:
                    <input className="addInputs" type="text" name="title" id="addBugTitle" />
                </label>
                <label htmlFor="">
                    Description:
                    <textarea className="addInputs" name="description" id="addBugDescription" cols="30" rows="3"></textarea>
                </label>

                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateBug;