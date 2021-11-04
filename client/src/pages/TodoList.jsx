import React from 'react';
const moment = require('moment');

export default function TodoList({ list }) {

    const editTask = (e) => {
        e.preventDefault();
        console.log(e.target.defaultValue);
    }

    return (
        <div id="card" className="card mt-5 mx-5 border border-primary">
            <div className="card-body">
                <h5 className="card-title text-center text-primary">{list.title}</h5>
                <ul className="list-group mb-4">
                    {list.tasks.map((task) =>
                        <li className="list-group list-group-flush" key={task._id}>
                            <div className="input-group mb-3">
                                <div className="input-group-text">
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                </div>
                                <input type="text" 
                                    className="form-control" 
                                    aria-label="Text input with checkbox" 
                                    defaultValue={task.task}
                                    onClick={(e)=> editTask(e)}
                                />
                            </div>
                        </li>
                    )}
                </ul>
                {moment(list.last_modified).fromNow()}
            </div>
        </div>
    )
}