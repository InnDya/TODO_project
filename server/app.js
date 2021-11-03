const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config({ path: './config.env' });
const database = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD, 
);

mongoose
    .connect(database)
    console.log('Connecting to database');

const todoListRouter = require('./routes/todoList');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/todo', todoListRouter);

module.exports = app;
