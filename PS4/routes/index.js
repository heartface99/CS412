const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config.json');
const giphy = require('giphy-api')(config.GIPHY_API_KEY);


/* GET method that renders the default form to search for GIF*/
router.get('/', (req, res, next) => {
	res.render('indexform');
});


/* Returns the gif mp4 url */
const getGiphy = (keyword) => {
	return new Promise(function(resolve, reject) {
    	giphy.search(keyword).then(function (res) {
    		if (res.data.length > 0 && res.data[0].images !== null) {
    			resolve(res.data[0].images.looping.mp4);
    		}
    		else {
    			reject('results are null');
    		}
		});
    });
}

/* POST method that returns a GIF based on user input */
router.post('/', (req, res, next) => {
	getGiphy(req.body.keyword)
		.then(function(data) {
			res.render('giphyResults', { src: data });
			next();
		})
		.catch(error => {
			console.log(`Caught an error: ${error.message}`);
		})
		.finally(_ => {
			console.log(`Done!`);
		});
});


module.exports = router;
