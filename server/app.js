var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const database = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD, 
);

mongoose
    .connect(database)
    console.log('Connecting to database');

const taskRouter = require('./routes/todoList');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/tasks', taskRouter);

module.exports = app;
