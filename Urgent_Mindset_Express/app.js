require('dotenv').config();
const express = require('express');
const app = express();
const mainRoutes = require('./routes/index');
const busboy = require('connect-busboy');


app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.use('/static',express.static(__dirname+'/public'));
app.use(busboy());
app.use(mainRoutes);
app.set("views",__dirname + "/views");
app.set('view engine', 'pug');




//Start server
app.listen(3000); 