/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const router = require('./routes/index');
const bodyParser = require('body-parser');

/**
 * App Variables
 */

const app = express();
const port = 3000;

/**
 *  App Configuration
 */
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Routes Definitions
 */

app.use('/ps3', router);

/**
 * Server Activation
 */

app.listen(port, () => console.log(`Listening on port ${port}!`))