const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();
const request = require('request');
const config = require('../config.json');

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


router.get("/:searchword", async(req, res, next) => {
    try {
        let searchWord = req.params.searchword;
        let match = await existsAsync(searchWord);
        if (match) {
            let gifData = await getAsync(searchWord);
            let response = {
                gifData: JSON.parse(gifData),
                cached: true
            }
            res.send(response);
        } else {
            let data = await fetch(`${config.baseURL}${config.apiKey}&q=${searchWord}`);
            data = await data.json();
            await setAsync(searchWord, JSON.stringify(data));
            let response = {
                gifData: data,
                cached: false
            }
            await expireAsync(searchWord, 15);
            res.send(response);
        }

    } catch (err) {
        console.log(`Caught an error: ${err.message}`);
        res.status(400);
    }
})

module.exports = router;
