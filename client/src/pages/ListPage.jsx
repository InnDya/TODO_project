import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import NewList from './NewList';
const { callApi } = require('../api/api');

export default function ListPage() {
    const [data, setData] = useState([]);

    function getTodoLists() {
        callApi('', 'GET')
            .then(res => res.json())
            .then(data => setData(data));
    }

    useEffect(() => {
        getTodoLists();
    }, []);

    const onListDeleted = (id) => {
        setData(data.filter(obj => obj._id !== id));
    };

    const onListCreated = (list) => {
        const newData = [...data];
        newData.push(list);
        setData(newData);
    }

    return (
        <div>
            <NewList
                createHandler={onListCreated}
            />
            {!data && (<div>Loading...</div>)}
            <div className="row justify-content-md-center">
                {data && data.map((todoList) => {
                    return (
                        <TodoList
                            key={todoList._id}
                            data={todoList}
                            deleteHandler={onListDeleted}
                        />
                    )
                })}
            </div>
        </div>
    )
}