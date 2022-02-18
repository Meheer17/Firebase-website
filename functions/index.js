const functions = require("firebase-functions");
const express = require('express');
const path = require('path');
var cors = require('cors')({origin: true});
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();

const main = require('../public/main');

app.use(cors);
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug')

// app.set('views', path.join(__dirname, 'views'));

app.use(express.static('./public'));

main(app)

exports.app = functions.https.onRequest(app);
