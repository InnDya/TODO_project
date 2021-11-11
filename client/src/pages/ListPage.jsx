import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';


export default function ListPage() {
    const [data, setData] = useState([]);

    function getTodoLists() {
        const url = 'http://localhost:3000/api/todo'
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data));
    }

    useEffect(() => {
        getTodoLists();
    }, []);

    const onListDeleted = (id) => {
        console.log("onListDeleted(" + id + ")");
        setData(data.filter(obj => obj._id !== id));
    };

    return (
        <div>
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