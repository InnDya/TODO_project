import React from 'react';
import { Trash, Plus, XLg } from 'react-bootstrap-icons';

const moment = require('moment');

export default function TodoList({ list, deleteHandler, newTaskHandler, deleteTaskHandler }) {

    const saveTask = (e, listId, taskId) => {
        e.preventDefault();
        const ts = Date.now();
        const data = {task: e.target.value, ts: ts};
        fetch(`http://localhost:3000/api/todo/${listId}/task/${taskId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => console.log(res))
        .catch((err) => {console.log(err)});
    }

    const deleteTask = (e, listId, taskId) => {
        e.preventDefault();
        console.log('was clicked button delete task');
        const ts = Date.now();
        const data = {ts: ts};
        fetch(`http://localhost:3000/api/todo/${listId}/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            console.log(res);
            deleteTaskHandler(listId, taskId);
        })
        .catch((err) => {console.log(err)});
    }

    const deleteTodoList = (e, id) => {
        e.preventDefault();
        console.log('was clicked delete todo list');
        console.log(id);

        fetch(`http://localhost:3000/api/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            console.log(res);
            deleteHandler(id);
        })
        .catch((err) => {console.log(err)});
    }

    const addNewTask = (e, id) => {
        e.preventDefault();
        console.log('was clicked button add new task');

        fetch(`http://localhost:3000/api/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(task => {
            console.log(task);
            newTaskHandler(id, task);
        })
        .catch((err) => {console.log(err)});
    }

    return (
        <div id="card" className="card mt-5 mx-5 border border-primary">
            <div className="card-body px-1">
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
                                    onBlur={(e) => saveTask(e, list._id, task._id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            saveTask(e, list._id, task._id)
                                        }
                                    }}
                                />
                                <button className="btn btn-outline" onClick={(e) => deleteTask(e, list._id, task._id)}>
                                    <XLg color="royalblue" size={16} />
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
                <div className="mb-4">
                    <button 
                        className="btn-primary" 
                        onClick={(e) => addNewTask(e, list._id)}>
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
                onClick={(e)=> deleteTodoList(e, list._id)}
            />
        </div>
    )
}