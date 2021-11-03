import React, { useState } from 'react';
const moment = require('moment');

export default function TodoList({list}) {
    const [editMode, setEditMode] = useState(false);

    const enableEditMode = (e) => {
        e.preventDefault();
        setEditMode(true);
        console.log("edit mode activated");
    }

    const disableEditMode = (e) => {
        e.preventDefault();
        setEditMode(false);
        console.log("edit mode deactivated");
    }

    return (
        <div id="card" className="card mt-5 mx-5 border border-primary">
            <div className="card-body">
                <h5 className="card-title text-center text-primary">{list.title}</h5>
                    <ul className="list-group mb-4">
                    {list.tasks.map((task) =>
                        <li className="list-group-item" key={task._id}>
                            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <div onDoubleClick={(e) => enableEditMode(e)}>
                                {editMode ? <input type="text" className="textInput" value={`${task.task}`} onBlur={(e) => disableEditMode(e) } /> : task.task }
                            </div>
                        </li>
                    )}
                    </ul>
                {moment(list.last_modified).fromNow()}
            </div>
        </div>
    )
}