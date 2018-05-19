var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var socketio = require('socket.io')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.io = socketio()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/staff', require('./routes/staff'))
app.use('/student', require('./routes/student'))
app.use('/parent', require('./routes/parent'))

module.exports = app;
