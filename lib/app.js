const express = require('express');
const path = require('path');
const app = express();

// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// App routes
app.use('/one', require('./controllers/one'));
app.use('/two', require('./controllers/two'));
app.use('/three', require('./controllers/three'));
app.use('/four', require('./controllers/four'));
app.use('/five', require('./controllers/five'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
