const express = require('express');
const { allLists, deleteOneList, addNewTask, changeTask, deleteTask } = require('../controller/todoListController');

const router = express.Router();

router.get('/', allLists);
router.delete('/:id', deleteOneList);
router.delete('/:listId/task/:taskId', deleteTask);
router.put('/:id', addNewTask);
router.put('/:listId/task/:taskId', changeTask);

module.exports = router;