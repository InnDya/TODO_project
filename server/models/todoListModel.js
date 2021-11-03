const mongoose = require('mongoose');

const todoList = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    last_modified: {
        type: Date
      },
    tasks: [{
      task: {
         type: String,
         require: true,
      },
      status: {
         type: Boolean,
      },
    }]  
});

module.exports = mongoose.model('todoList', todoList);