// const config = require('./config/config.js');
// const client = new TwitterApi(config);

const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: "",
    appSecret: "",
    accessToken: "",
    accessSecret: "",
});

const rwClient = client.readWrite.v2;

module.exports = rwClient;
