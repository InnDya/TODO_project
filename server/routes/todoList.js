const express = require('express');
const { allLists, deleteOneList } = require('../controller/todoListController');

const router = express.Router();

router.get('/', allLists);
router.delete('/:id', deleteOneList);

module.exports = router;