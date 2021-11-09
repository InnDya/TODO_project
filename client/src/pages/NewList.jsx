import React from 'react';
import { Plus } from 'react-bootstrap-icons';

export default function NewList() {

    const createNewList = (e) => {
        e.preventDefault();
        console.log('was clicked button for creating new todo list');
    }

    return (
        <div className="text-center mt-5">
            <button type="button" className="btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"
            onClick={(e)=> createNewList(e)}
            ><Plus size={20} /></button>
            <h3 className="mt-2">Add List</h3>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">TODO List name</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="todo-list" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}