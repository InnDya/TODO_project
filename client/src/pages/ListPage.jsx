import React, { useEffect, useState } from 'react';

export default function ListPage() {
    const [taskList, setTaskList] = useState([]);

    function getTaskList() {
        const url = 'http://localhost:3000/api/tasks'
        fetch(url)
            .then(res => res.json())
            .then(data => setTaskList(data));
    }

    useEffect(() => {
        getTaskList();
    }, []);

    console.log(taskList);

    return (
        <div>
        {!taskList && (<div>Loading...</div>)}
        <ul>
            {taskList && taskList.map((item) => (
                <li key={item._id}>
                    {item.task}
                </li>
            ))
            }
        </ul>
        </div>
    )
}