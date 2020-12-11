/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const router = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors')

/**
 * App Variables
 */

const app = express();
const port = 3000;
app.use(cors())

/**
 *  App Configuration
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Routes Definitions
 */

app.use('/', router);


/**
 * Handle 404 and 500 error
 */

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

/**
 * Server Activation
 */
app.listen(port, () => console.log(`Listening on port ${port}!`))
