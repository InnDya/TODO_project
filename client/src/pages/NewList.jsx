import React from 'react';
import { Plus } from 'react-bootstrap-icons';
const { callApi } = require('../api/api');

export default function NewList({ createHandler }) {

    const onCreateList = (e) => {
        const title = prompt('TODO List name: ');
        if (title) {
            const ts = Date.now();
            const data = { title: title, ts: ts };
            callApi('', 'POST', data)
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