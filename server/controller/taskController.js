const Task = require('../models/taskModel');

exports.getList = async (req, res) => {
    try {
        const listOfTasks = await Task.find({});
        console.log(listOfTasks);
        res.status(200).json({ data: listOfTasks });
    } catch (err) {
        console.log(err);
    }
};