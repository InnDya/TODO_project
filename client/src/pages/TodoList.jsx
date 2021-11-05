import React from 'react';
import { Trash, Plus } from 'react-bootstrap-icons';

const moment = require('moment');

export default function TodoList({ list }) {

    const editTask = (e) => {
        e.preventDefault();
        console.log(e.target.defaultValue);
    }

    const deleteTodoList = (e) => {
        e.preventDefault();
        console.log('was clicked delete todo list');
    }

    const addNewTaskToList = (e) => {
        e.preventDefault();
        console.log('was clicked button add new task');
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
                <div className="mb-4">
                    <button 
                        className="btn-primary" 
                        onClick={(e) => addNewTaskToList(e)}>
                    <Plus size={20} />
                    </button> Add new task
                </div>
                <div className="position-absolute bottom-0 start-0 text-muted">
                {moment(list.last_modified).fromNow()}
                </div>
            </div>
            <Trash 
                size={26} 
                color="royalblue" 
                className="position-absolute bottom-0 end-0"
                onClick={(e)=> deleteTodoList(e)}
            />
        </div>
    )
}