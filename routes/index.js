const express = require('express');
const router = express.Router();
const request = require('request');

/* GET method that returns a fixed string */
router.get('/', (req, res, next) => {
   res.render('index', { getResponse: 'PS3 hello world!' });
});


/* POST method that returns a JSON object with two key/value pairs,
one for the original string and the second for the length. 
Example of post data: "text=hello" */
router.post('/', (req, res, next) => {
	const str = req.body.text;
	res.render('index', { putResponse: {
		original: str,
		length: str.length }
	});
});


module.exports = router;