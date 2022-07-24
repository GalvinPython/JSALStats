/**
 * Version 5
 */

const { access } = require("fs");
const fs = require('fs');
const Twit = require("twit");
const AbortController = require("abort-controller");
const numeral = require('numeral');
const fetch = require('node-fetch');

const config = require('./config/config.js');
const tweet = require('./utils/tweet');

const ytKey = config.yt_api_key;
const baseURLA = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id';
const baseURLB = '';

const T = new Twit(config);

T.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false,
}, onAuthenticated);

// function onAuthenticated(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Authentication successful!');
//     }
// }

function onAuthenticated(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(sendAuthMSG());
    }
}

function sendAuthMSG() {
    return 'Authentication successful ✔';
}

const channelAbbr = [
    // NULL = NOT TWEETING ABOUT
    "JSAL",
    "JSAS",
    "null",
    "JSAG",
    "null",
    "i",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
];
const channelId = [
    "UCewMTclBJZPaNEfbf-qYMGA",
    "UCxLIJccyaRQDeyu6RzUsPuw",
    "UCyktGLVQchOpvKgL7GShDWA",
    "UCd15dSPPT-EhTXekA7_UNAQ",
    "UCUXNOmIdsoyd5fh5TZHHO5Q",
    "UCrZKnWgOaYTTc7sc1KsVXZw",
    "UCqx-my2rOoQuEOHKNNgNppw",
    "UCpCJRHoggwXQhuFbW4gjM_w",
    "UCF9R3Ln-u52vUdSO-pFdETw",
    "UCbu2qTa75eyjwCKOugX8F6A",
    "UChLNLQ6r-aGrIFWo_1A9tKQ",
    "UCJ4w2lMYOnBwsgQdFgbLqIg",
    "UCgKbwxXkz95TYVcpvpkCjag",
    "UCwhiRo2CSPODulancVnWopQ",
    "UCBCuUUPr6Lo8RmmhVFySoiQ",
];

// a = Actual, e = Estimated | s = subs, v = views

let arr_as = [];
let arr_av = [];
let arr_es = [];
let arr_ev = [];

async function getData() {

    emptyArrays();

    for (let i = 0; i < channelId.length; i++) {
        const element = channelId[i];
        if (channelAbbr[i] != "null") {
            await fetch(`${baseURLA}=${element}&key=${ytKey}`, {
                timeout: 2000,
            }).then(response => response.json())
            .then(data => {
                let subCount = parseInt(data.items[0].statistics.subscriberCount);
                subCount = numeral(subCount).format('0,0');
                arr_as.push(subCount);
                let viewCount = parseInt(data.items[0].statistics.viewCount);
                viewCount = numeral(viewCount).format('0,0');
                arr_av.push(viewCount);
            });
        } else {
            // Get estimated data (unavailable right now)
        }
    }

    function emptyArrays() {
        arr_as = [];
        arr_av = [];
        arr_es = [];
        arr_ev = [];
    }
}

// Get data every hour
setInterval(() => {
    getData();
}, 60 * 60 * 1000);

/**
 * JSALStats Twitter Account: https://www.twitter.com/jsalstats
 * JSALStats GitHub: https://www.github.com/galvinpython/jsalstats
 *
 * JSALStats is licensed under the MIT License
 * By GalvinPython 2021, 2022
 *
 * END OF CODE
 */
