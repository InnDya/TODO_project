import React from 'react';
import { Plus } from 'react-bootstrap-icons';

export default function NewList({ createHandler }) {

    const onCreateList = (e) => {
        const title = prompt('TODO List name: ');
        if (title) {
            const ts = Date.now();
            const data = { title: title, ts: ts };
            fetch(`http://localhost:3000/api/todo`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(list => {
                    createHandler(list);
                })
                .catch((err) => { console.error(err) });
        }
    }

    return (
        <div className="text-center mt-5">
            <button type="button" className="btn-primary" onClick={e => onCreateList(e)}>
                <Plus size={20} />
            </button>
            <h3 className="mt-2">Add List</h3>
        </div>
    )
}