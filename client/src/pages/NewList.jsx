import React from 'react';
import { Plus } from 'react-bootstrap-icons';

export default function NewList() {

    const createNewList = (e) => {
        e.preventDefault();
        console.log('was clicked button for creating new todo list');
    }

    return (
        <div className="text-center mt-5">
            <button className="btn-primary"
            onClick={(e)=> createNewList(e)}
            ><Plus size={20} /></button>
            <h3 className="mt-2">Add List</h3>
        </div>
    )
}