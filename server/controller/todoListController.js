const TodoList = require('../models/todoListModel');
const mongoose = require('mongoose');

exports.allLists = async (req, res) => {
    try {
        const todoLists = await TodoList.find({});
        res.status(200).json(todoLists);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);

    }
};

exports.deleteOneList = async (req, res) => {
    try {
        await TodoList.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

exports.addNewTask = async (req, res) => {
    try {
        const taskId = new mongoose.Types.ObjectId();
        const task = { _id: taskId, task: '', status: false };
        await TodoList.findOneAndUpdate(
            { _id: req.params.id },
            {
                $push: { tasks: task },
                $set: { 'last_modified': req.body.ts }
            }
        );
        res.status(200).json(task);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

exports.changeTask = async (req, res) => {
    try {
        await TodoList.updateOne({
            _id: req.params.listId,
            'tasks._id': req.params.taskId
        }, {
            $set: {
                'tasks.$.task': req.body.task,
                'last_modified': req.body.ts,
            }
        });
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

exports.deleteTask = async (req, res) => {
    try {
        await TodoList.updateOne({ _id: req.params.listId },
            { $pull: { tasks: { _id: req.params.taskId } } });
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

exports.changeStatus = async (req, res) => {
    try {
        await TodoList.updateOne({
            _id: req.params.listId,
            'tasks._id': req.params.taskId
        }, {
            $set: {
                'tasks.$.status': req.body.status,
                'last_modified': req.body.ts,
            }
        });
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

exports.createNewList = async (req, res) => {
    try {
        const data = {
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            last_modified: req.body.ts,
            tasks: []
        };
        const list = await new TodoList(data);
        list.save();
        res.status(201).json(list);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}
