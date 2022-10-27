/**
 * A Twitter Bot For Jack Massey Welsh's YouTube Statistics
 *
 * Version 5
 * Updated to Twitter API V2
 */
/* REQUIRED MODULES */

const rwClient = require('./utils/twitterClient');
console.log("Bot using API V2 should be online!");

// eslint-disable-next-line no-unused-vars
const { access } = require("fs");
// eslint-disable-next-line no-unused-vars
const fs = require('fs');

// Abort a fetch. May not be necessary, but wise to :/
const AbortController = require("abort-controller");

// Convert numbers into user-friendly format
const numeral = require('numeral');

// required to fetch data
const fetch = require("node-fetch");

// const config = require('./config/config.js'); <-- Config is bugged on latest version

/* MAIN PART */

// Variables and Constants
const baseURL = 'https://livecounts.xyz/api/youtube-live-subscriber-count/live';

let JSALSubCount, JSALViewCount, JSASSubCount, JSASViewCount, JSAGSubCount, JSAGViewCount, GSSubCount, GSViewCount;

function loop() {

    const controller = new AbortController();
    const signal = controller.signal;

    /**
     * NOTE ABOUT USING THE NEW ESTIMATED API
     * counts[0] is for Subscribers
     * counts[1] is for Views
     */

    // JackSucksAtLife
    const JSAL = 'UCewMTclBJZPaNEfbf-qYMGA';
    let JSALData = () => {

        fetch(`${baseURL}/${JSAL}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSALSubCount = numeral(data.counts[0]).format('0,0');
            JSALViewCount = numeral(data.counts[1]).format('0,0');
            console.log(`❤ JSAL! Subs: ${JSALSubCount}, Views: ${JSALViewCount}`);
        });
    };

    // JackSucksAtStuff
    const JSAS = 'UCxLIJccyaRQDeyu6RzUsPuw';
    let JSASData = () => {

        fetch(`${baseURL}/${JSAS}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSASSubCount = numeral(data.counts[0]).format('0,0');
            JSASViewCount = numeral(data.counts[1]).format('0,0');
            console.log(`💛 JSAS! Subs: ${JSASSubCount}, Views: ${JSASViewCount}`);
        });
    };

    // JackSucksAtGeography
    const JSAG = 'UCd15dSPPT-EhTXekA7_UNAQ';

    let JSAGData = () => {

        fetch(`${baseURL}/${JSAG}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSAGSubCount = numeral(data.counts[0]).format('0,0');
            JSAGViewCount = numeral(data.counts[1]).format('0,0');
            console.log(`💚 JSAG! Subs: ${JSAGSubCount}, Views: ${JSAGViewCount}`);
        });
    };

    // Geography Stuff 🌎
    const GS = 'UC_7K5gOJJ3urQR53ltIck8w';

    let GSData = () => {

        fetch(`${baseURL}/${GS}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            GSSubCount = numeral(data.counts[0]).format('0,0');
            GSViewCount = numeral(data.counts[1]).format('0,0');
            console.log(`🖤 GS! Subs: ${GSSubCount}, Views: ${GSViewCount}`);
        });
    };

    signal.addEventListener("abort", () => {
        console.log("aborted!");
    });
    controller.abort();

    /* Call Functions */
    JSALData();
    JSASData();
    JSAGData();
    GSData();

}
setInterval(loop, 1000 * 60 * 59.95);

function sendTweet() {

    /* Get Date & Time */

    let d = new Date();

    let todayDate = d.getUTCDate();
    let todayMonth = (d.getUTCMonth() + 1);
    let todayYear = d.getUTCFullYear();

    // Time
    let dateHour = d.getHours();
    let dateMinute = d.getMinutes();

    if (dateHour < 10) { dateHour = "0" + dateHour; }
    if (dateMinute < 10) { dateMinute = "0" + dateMinute; }

    let dateandtime = `${todayDate}/${todayMonth}/${todayYear} ${dateHour}:${dateMinute}`;

    const tweet = async () => {
        try {
            await rwClient.tweet(`📅 ${dateandtime}
            \n\n❤ JSAL:\nSubs: ${JSALSubCount}\nViews: ${JSALViewCount}
            \n\n💛 JSAS:\nSubs: ${JSASSubCount}\nViews: ${JSASViewCount}
            \n\n💚 JSAG:\nSubs: ${JSAGSubCount}\nViews: ${JSAGViewCount}
            \n\n💙 GS🌎:\nSubs: ${GSSubCount}\nViews ${GSViewCount}`);
        } catch (e) {
            console.error(e);
        }
    };

    tweet();
    console.log("Tweet has been sent!");
}

// Send the tweet after one hour
setInterval(sendTweet, 1000 * 60 * 60);

/**
 * JSALStats Twitter Account: https://www.twitter.com/jsalstats
 * JSALStats GitHub: https://www.github.com/galvinpython/jsalstats
 *
 * JSALStats is licensed under the MIT License
 * By GalvinPython 2021, 2022
 *
 * Note: V5 is using V4 code with new API endpoints
 * V5 script can be found in app_new.js
 * END OF CODE
 */
