const TodoList = require('../models/todoListModel');

exports.allLists = async (req, res) => {
    try {
        const todoLists = await TodoList.find({});
        console.log(todoLists);
        res.status(200).json(todoLists);
    } catch (err) {
        console.log(err);
    }
};