const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config.json');
const giphy = require('giphy-api')(config.GIPHY_API_KEY);

/**
* Redis
*/
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

const getAsync = promisify(client.get).bind(client);
const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.set).bind(client);
const expireAsync = promisify(client.expire).bind(client);


client.flushdb((err, success) => {
    if (err) {
        throw new Error(err)
    }
});


/* GET method that renders the default form to search for GIF*/
router.get('/', (req, res, next) => {
	res.render('indexform');
});


/* Returns the gif mp4 url */
const returnGiphy = (keyword) => {
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
router.post('/', async (req, res, next) => {
	let searchWord = req.body.keyword;
	let match = await existsAsync(searchWord);

	if (match) {
        let gifData = await getAsync(searchWord);
        let response = {
            gifData: gifData,
            cached: true
        }
        res.send(response);

    } else {
    	returnGiphy(searchWord)
    	.then(async function(data) {
    		await setAsync(searchWord, data);
	        let response = {
	            gifData: data,
	            cached: false
	        }
	        await expireAsync(searchWord, 15);
	        res.send(response)
		})
		.catch(error => {
			console.log(`Caught an error: ${error.message}`);
		})
		.finally(_ => {
			console.log(`Done!`);
		});
    }
});

module.exports = router;
