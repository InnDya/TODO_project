import React from 'react';
const moment = require('moment');

export default function List(props) {
    const list = props.list;
    //console.log(list);
    return (
        <div id="card" className="card mt-5 border border-primary">
            <div className="card-body">
                <h5 className="card-title text-center text-primary">{list.title}</h5>
                    <ul className="list-group mb-4">
                    {list.tasks.map((task) =>
                        <li className="list-group-item" key={task._id}>
                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." /> 
                            {task.task}  
                        </li>
                    )}    
                    </ul>
                {moment(list.last_modified).fromNow()}        
            </div>
        </div>
    )
}