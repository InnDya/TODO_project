const express = require('express');
const { allLists, deleteOneList, addNewTask, changeTask } = require('../controller/todoListController');

const router = express.Router();

router.get('/', allLists);
router.delete('/:id', deleteOneList);
router.put('/:id', addNewTask);
router.put('/:listId/task/:taskId', changeTask);

module.exports = router;