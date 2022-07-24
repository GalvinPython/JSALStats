/**
 * A Twitter Bot For Jack Massey Welsh's YouTube Statistics
 * Check CHANGELOG.md for updates
 *
 * Version 4.0.2.1 (Unreleased)
 */
/* REQUIRED MODULES */

// eslint-disable-next-line no-unused-vars
const { access } = require("fs");
// eslint-disable-next-line no-unused-vars
const fs = require('fs');

// Needed to communicate with Twitter API
const Twit = require("twit");

// Abort a fetch. May not be necessary, but wise to :/
const AbortController = require("abort-controller");

// Convert numbers into user-friendly format
const numeral = require('numeral');

// required to fetch data
const fetch = require("node-fetch");

const config = require('./config/config.js');

/* AUTHENTICATION */

const T = new Twit(config);

// stuff required for authentication
T.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false,
}, onAuthenticated);
// sends authentication request
function onAuthenticated(err) {
    if (err) {
        console.log(err);
    } else {
    console.log('Authentication successful.');
}}

// sends authentication request then sends tweet
function onAuthenticated(err) {
    sendAuthMSG();
}

// message to be sent that auth worked
function sendAuthMSG() {
    console.log("Bot Restarted! Should be working :)");
    // loop(); <-- TO TEST LATER
}

/* MAIN PART */

// Variables and Constants
const baseURL = 'https://mixerno.space/api/youtube-channel-counter/user';

let JSALSubCount, JSALViewCount, JSASSubCount, JSASViewCount, JMWSubCount, JMWViewCount, JSAGSubCount, JSAGViewCount, NCJSALSubCount, NCJSALViewCount;

function loop() {

    const controller = new AbortController();
    const signal = controller.signal;

    /**
     * NOTE ABOUT USING THE ESTIMATED API
     * counts[0] is for Subscribers
     * counts[3] is for Views
     */

    // JackSucksAtLife
    const JSAL = 'UCewMTclBJZPaNEfbf-qYMGA';
    let JSALData = () => {

        fetch(`${baseURL}/${JSAL}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSALSubCount = numeral(data.counts[0].count).format('0,0');
            JSALViewCount = numeral(data.counts[3].count).format('0,0');
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
            JSASSubCount = numeral(data.counts[0].count).format('0,0');
            JSASViewCount = numeral(data.counts[3].count).format('0,0');
            console.log(`💛 JSAS! Subs: ${JSASSubCount}, Views: ${JSASViewCount}`);
        });
    };

    // Jack Massey Welsh
    const JMW = 'UCyktGLVQchOpvKgL7GShDWA';

    let JMWData = () => {

        fetch(`${baseURL}/${JMW}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JMWSubCount = numeral(data.counts[0].count).format('0,0');
            JMWViewCount = numeral(data.counts[3].count).format('0,0');
            console.log(`💙 JMW! Subs: ${JMWSubCount}, Views: ${JMWViewCount}`);
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
            JSAGSubCount = numeral(data.counts[0].count).format('0,0');
            JSAGViewCount = numeral(data.counts[3].count).format('0,0');
            console.log(`💚 JSAG! Subs: ${JSAGSubCount}, Views: ${JSAGViewCount}`);
        });
    };

    // No Context JackSucksAtLife
    const NCJSAL = 'UCrZKnWgOaYTTc7sc1KsVXZw';

    let NCJSALData = () => {

        fetch(`${baseURL}/${NCJSAL}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            NCJSALSubCount = numeral(data.counts[0].count).format('0,0');
            NCJSALViewCount = numeral(data.counts[3].count).format('0,0');
            console.log(`🖤 NCJSAL! Subs: ${NCJSALSubCount}, Views: ${NCJSALViewCount}`);
        });
    };

    signal.addEventListener("abort", () => {
        console.log("aborted!");
    });
    controller.abort();

    /* Call Functions */
    JSALData();
    JSASData();
    JMWData();
    JSAGData();
    NCJSALData();

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

    if (dateHour < 10) {
        dateHour = "0" + dateHour;
    }
    if (dateMinute < 10) {
    dateMinute = "0" + dateMinute;
    }

    let dateandtime = `${todayDate}/${todayMonth}/${todayYear} ${dateHour}:${dateMinute}`;

    T.post('statuses/update', { status:'🕒 ' + dateandtime +
        '\n\n❤ JSAL:\nSubs: ' + JSALSubCount + '\nViews: ' + JSALViewCount +
        '\n\n💛 JSAS:\nSubs: ' + JSASSubCount + '\nViews: ' + JSASViewCount +
        '\n\n💙 JMW:\nSubs: ' + JMWSubCount + '\nViews: ' + JMWViewCount +
        '\n\n💚 JSAG:\nSubs: ' + JSAGSubCount + '\nViews: ' + JSAGViewCount +
        '\n\n🖤 i:\nSubs: ' + NCJSALSubCount + '\nViews ' + NCJSALViewCount });
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
 * Yes, this code looks ugly. There will be a cleanup :)
 * END OF CODE
 */
