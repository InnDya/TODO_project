import React, { useEffect, useState } from 'react';
import List from '../pages/OneList';

export default function ListPage() {
    const [todoLists, setTodoLists] = useState([]);

    function getTodoLists() {
        const url = 'http://localhost:3000/api/todo'
        fetch(url)
            .then(res => res.json())
            .then(data => setTodoLists(data));
    }

    useEffect(() => {
        getTodoLists();
    }, []);

    console.log(todoLists);

    return (
        <div>
            {!todoLists && (<div>Loading...</div>)}
                <div className="row">
                    {todoLists && todoLists.map((list) => {
                        return (
                            <List key={list._id} list={list}/>
                        )
                    })}
                </div>
        </div>
    )
}