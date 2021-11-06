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

exports.deleteOneList = async (req, res) => {
    console.log(req.params);
    try {
        await TodoList.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}