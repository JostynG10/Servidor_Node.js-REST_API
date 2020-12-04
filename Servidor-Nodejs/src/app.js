const bodyParser = require ('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const usersRoutes = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DataBase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('db is connected'))
  .catch(err => console.log(err));
 
// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/users', usersRoutes)

// Start the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});