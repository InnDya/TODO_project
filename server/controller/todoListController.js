const TodoList = require('../models/todoListModel');
const mongoose = require('mongoose');

exports.allLists = async (req, res) => {
    try {
        const todoLists = await TodoList.find({});
        // console.log(todoLists);
        res.status(200).json(todoLists);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
};

exports.deleteOneList = async (req, res) => {
    // console.log(req.params);
    try {
        await TodoList.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.addNewTask = async (req, res) => {
    console.log(req.params);
    try {
        const taskId = new mongoose.Types.ObjectId()
        const task = { _id: taskId, task: '', status: false };
        await TodoList.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { tasks: task } }
        );
        res.status(200).json(task);
    } catch (err) {
        console.log(err);
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
            }
        });
        res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.deleteTask = async (req, res) => {
    try {
        await TodoList.updateOne({ _id: req.params.listId },
            { $pull: { tasks: { _id: req.params.taskId } } });
        res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}