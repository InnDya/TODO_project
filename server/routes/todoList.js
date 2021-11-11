const express = require('express');
const { allLists,
    deleteOneList,
    addNewTask,
    changeTask,
    deleteTask,
    changeStatus,
    createNewList } = require('../controller/todoListController');

const router = express.Router();

router.get('/', allLists);
router.delete('/:id', deleteOneList);
router.delete('/:listId/task/:taskId', deleteTask);
router.put('/:id', addNewTask);
router.put('/:listId/task/:taskId', changeTask);
router.put('/:listId/task/:taskId/status', changeStatus);
router.post('/', createNewList);

module.exports = router;