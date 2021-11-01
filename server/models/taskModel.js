const mongoose = require('mongoose');

const task = new mongoose.Schema({
      task: {
         type: String,
         require: true,
      },
      description: {
         type: String,
      },
      status: {
         type: Boolean,
      },
});

module.exports = mongoose.model('task', task);