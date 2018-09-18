const express = require('express');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');

const consts = require('./libraries/consts');


const app = express();

/* User in app */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const db = require('./config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
    console.log('Database has connected ! ');
});


//User Router 
const userRoute = require('./routes/users.route')(app);

app.listen(3500, () => {
	console.log(`Server has been running with port 3500` );
});