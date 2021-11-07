const express = require('express');
const { allLists, deleteOneList, addNewTask } = require('../controller/todoListController');

const router = express.Router();

router.get('/', allLists);
router.delete('/:id', deleteOneList);
router.put('/:id', addNewTask);

module.exports = router;