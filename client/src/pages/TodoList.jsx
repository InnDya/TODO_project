import React, { useState } from 'react';
import { Trash, Plus, XLg } from 'react-bootstrap-icons';

const moment = require('moment');

export default function TodoList({ data, deleteHandler }) {
    const [list] = useState(data);
    const [tasks, setTasks] = useState(data.tasks);
    const [lastModified, setLastModified] = useState(data.last_modified);

    const saveTask = (e, taskId) => {
        e.preventDefault();
        const ts = Date.now();
        const data = { task: e.target.value, ts: ts };
        fetch(`http://localhost:3000/api/todo/${list._id}/task/${taskId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.ok) {
                    list.last_modified = ts;
                    setLastModified(ts);
                }
            })
            .catch((err) => { console.error(err) });
    }

    const saveTaskStatus = (e, taskId) => {
        const ts = Date.now();
        const data = { status: e.target.checked, ts: ts };
        fetch(`http://localhost:3000/api/todo/${list._id}/task/${taskId}/status`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.ok) {
                    list.last_modified = ts;
                    setLastModified(ts);
                }
            })
            .catch((err) => { console.error(err) });
    }

    const deleteTask = (e, taskId) => {
        e.preventDefault();
        const ts = Date.now();
        const data = { ts: ts };
        fetch(`http://localhost:3000/api/todo/${list._id}/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.ok) {
                    list.tasks = tasks.filter(task => task._id !== taskId);
                    setTasks(list.tasks);
                    list.last_modified = ts;
                    setLastModified(ts);
                }
            })
            .catch((err) => { console.error(err) });
    }

    const deleteTodoList = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/api/todo/${list._id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    deleteHandler(list._id);
                }
            })
            .catch((err) => { console.error(err) });
    }

    const addNewTask = (e) => {
        e.preventDefault();
        const ts = Date.now();
        const data = { ts: ts };

        fetch(`http://localhost:3000/api/todo/${list._id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(task => {
                const newTasks = [...tasks];
                newTasks.push(task);
                setTasks(newTasks);
                list.last_modified = ts;
                setLastModified(ts);
            })
            .catch((err) => { console.error(err) });
    }

    return (
        <div id="card" className="card mt-5 mx-5 border border-primary">
            <div className="card-body px-1">
                <h5 className="card-title text-center text-primary">{list.title}</h5>
                <ul className="list-group mb-4">
                    {tasks.map((task) =>
                        <li className="list-group list-group-flush" key={task._id}>
                            <div className="input-group mb-3">
                                <div className="input-group-text">
                                    <input
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                        defaultChecked={task.status}
                                        aria-label="Checkbox for following text input"
                                        onChange={(e) => {
                                            task.status = !task.status;
                                            saveTaskStatus(e, task._id)
                                        }}
                                    />
                                </div>
                                <input type="text"
                                    className="form-control"
                                    aria-label="Text input with checkbox"
                                    defaultValue={task.task}
                                    onBlur={(e) => saveTask(e, task._id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            saveTask(e, task._id)
                                        }
                                    }}
                                    style={{ textDecorationLine: task.status ? 'line-through' : 'none' }}
                                />
                                <button className="btn btn-outline" onClick={(e) => deleteTask(e, task._id)}>
                                    <XLg color="royalblue" size={16} />
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
                <div className="mb-4">
                    <button
                        className="btn-primary"
                        onClick={(e) => addNewTask(e)}>
                        <Plus size={20} />
                    </button> Add new task
                </div>
                <div className="position-absolute bottom-0 start-0 text-muted">
                    {moment(lastModified).fromNow()}
                </div>
            </div>
            <Trash
                size={26}
                color="royalblue"
                className="position-absolute bottom-0 end-0"
                onClick={(e) => deleteTodoList(e)}
            />
        </div>
    )
}