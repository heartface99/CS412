const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config.json');
const giphy = require('giphy-api')(config.GIPHY_API_KEY);


/* GET method that renders the default form to search for GIF*/
router.get('/', (req, res, next) => {
	res.render('indexform');
});


/* POST method that returns a GIF based on user input */
router.post('/', (req, res, next) => {
	function getGiphy() {
        return new Promise(function(resolve, reject) {
        	giphy.search(req.body.keyword).then(function (apiRes, err) {
        		if (err) {
        			reject(err);
        		} else {
				    res.render('giphyResults', { src: apiRes.data[0].images.looping.mp4 });
				}
			});
        });
    }
    getGiphy().then(function(data) {
        next();
    });
});


module.exports = router;
