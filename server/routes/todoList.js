const express = require('express');
const { allLists } = require('../controller/todoListController');

const router = express.Router();

router.get('/', allLists);

module.exports = router;