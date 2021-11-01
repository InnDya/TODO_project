const express = require('express');
const { getList } = require('../controller/taskController');

const router = express.Router();

router.get('/', getList);

module.exports = router;