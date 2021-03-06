const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

// template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

app.listen(3000, () => console.log('Listening on port: 3000'));
