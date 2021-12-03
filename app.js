// A Twitter Bot For Jack Massey Welsh's YouTube Statistics
// Check CHANGELOG.md for updates

/* REQUIRED MODULES */

const { access } = require("fs");
const fs = require('fs');

// Needed to communicate with Twitter API
var Twit = require("twit");

// Abort a fetch. May not be necessary, but wise to :/
const AbortController = require("abort-controller");

// Convert numbers into user-friendly format
var numeral = require('numeral');

// required to fetch data
const fetch = require("node-fetch");

/* AUTHENTICATION */

let consumer_key_api;
let consumer_secret_api;
let access_token_api;
let access_token_secret_api;

fetchKeys();

function fetchKeys() {
    fs.readFile('./config.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const dataResponse = JSON.parse(data);
        console.log(dataResponse);

        consumer_key_api = dataResponse.consumerKey;
        consumer_secret_api = dataResponse.consumerSecret;
        access_token_api = dataResponse.accessToken;
        access_token_secret_api = dataResponse.accessTokenSecret;

        console.log("\n" + consumer_key_api);
        console.log(consumer_secret_api);
        console.log(access_token_api);
        console.log(access_token_secret_api);
        console.log("\nDone!");
    });
}

const T = new Twit({
    consumer_key: consumer_key_api,
    consumer_secret: consumer_secret_api,
    access_token: access_token_api,
    access_token_secret: access_token_secret_api,
});

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
}

/* MAIN PART */

let JSALSubCount;
let JSALViewCount;
let JSASSubCount;
let JSASViewCount;
let JMWSubCount;
let JMWViewCount;
let JSAGSubCount;
let JSAGViewCount;
let JSACSubCount;
let JSACViewCount;

// BELOW VARIABLES ARE NO LONGER USED
// let DSSubCount;
// let longChannelSubscriberCount;
// let longChannelViewCount;

function loop() {

    JSALSubCount = '';
    JSALViewCount = '';
    JSASSubCount = '';
    JSASViewCount = '';
    JMWSubCount = '';
    JMWViewCount = '';
    JSAGSubCount = '';
    JSAGViewCount = '';
    JSACSubCount = '';
    JSACViewCount = '';

    // BELOW VARIABLES ARE NO LONGER USED
    // DSSubCount = '';
    // longChannelSubscriberCount = '';
    // longChannelViewCount = '';

    const controller = new AbortController();
    const signal = controller.signal;

    /**
     * NOTE ABOUT USING MIXERNO API
     * counts[0] is for Subscribers
     * counts[3] is for Views
     */

    // JackSucksAtLife
    const JSAL = 'UCewMTclBJZPaNEfbf-qYMGA';
    let JSALData = () => {

        fetch(`https://mixerno.space/api/youtube-channel-counter/user/${JSAL}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSALSubCount = numeral(data.counts[0].count).format('0,0');
            JSALViewCount = numeral(data.counts[3].count).format('0,0');
            console.log("JSAL: " + JSALSubCount + " | " + JSALViewCount);
        });
    };

    JSALData();

    // JackSucksAtStuff
    const JSAS = 'UCxLIJccyaRQDeyu6RzUsPuw';
    let JSASData = () => {

        fetch(`https://mixerno.space/api/youtube-channel-counter/user/${JSAS}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSASSubCount = numeral(data.counts[0].count).format('0,0');
            JSASViewCount = numeral(data.counts[3].count).format('0,0');
            console.log("JSAS: " + JSASSubCount + " | " + JSASViewCount);
        });
    };

    JSASData();

    // Jack Massey Welsh
    const JMW = 'UCyktGLVQchOpvKgL7GShDWA';

    let JMWData = () => {

        fetch(`https://mixerno.space/api/youtube-subscriber-counter/user/${JMW}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JMWSubCount = numeral(data.counts[0].count).format('0,0');
            JMWViewCount = numeral(data.counts[3].count).format('0,0');
            console.log("JMW: " + JMWSubCount + " | " + JMWViewCount);
        });
    };

    JMWData();

    // JackSucksAtGeography
    const JSAG = 'UCd15dSPPT-EhTXekA7_UNAQ';

    let JSAGData = () => {

        fetch(`https://mixerno.space/api/youtube-subscriber-counter/user/${JSAG}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSAGSubCount = numeral(data.counts[0].count).format('0,0');
            JSAGViewCount = numeral(data.counts[0].count).format('0,0');
            console.log("JSAG: " + JSAGSubCount + " | " + JSAGViewCount);
        });
    };

    JSAGData();

    // JackSucksAtClips
    const JSAC = 'UCUXNOmIdsoyd5fh5TZHHO5Q';

    let JSACData = () => {

        fetch(`https://mixerno.space/api/youtube-subscriber-counter/user/${JSAC}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSACSubCount = numeral(data.counts[0].count).format('0,0');
            JSACViewCount = numeral(data.counts[0].count).format('0,0');
            console.log("JSAC: " + JSACSubCount + " | " + JSACViewCount);
        });
    };

    JSACData();

    /**
     * The following channels are no longer being tracked
     * - JACKSEPICYOUTUBECHANNELFULLOFFUNTIMESANDFUNHIRICKXHASNOTHINGONMEIAMTHESUPERIORCHANNELIHAVEMORECHARACTERSTHANALLOFJACKSYOUTUBECHANNELSCOMBINEDHAHAHAHAIHAVEMORECHARACTERSTHANJACKSUCKSATLIFEJACKSUCKSATSTUFFJACKMASSEYWELSHJACKSUCKSATGEOGRAPHYJACKSUCKSATCLIPSSAMSMELLSOFAPRICOTSJACKSUCKSATPOPUPPIRATEETCETCIMAGINETHISONAPLAYBUTTONJESUSCHRISTBTWPLEASESUBSCRIBETHANKYOUVERYMUCHHIRICKXxXxXX
     * - Don't Subscribe
     * The channels have not had their API response updated yet. They are still using the legacy ones
     */

    /*
    // JACKSEPICYOUTUBECHANNELFULLOFFUNTIMESANDFUNHIRICKXHASNOTHINGONMEIAMTHESUPERIORCHANNELIHAVEMORECHARACTERSTHANALLOFJACKSYOUTUBECHANNELSCOMBINEDHAHAHAHAIHAVEMORECHARACTERSTHANJACKSUCKSATLIFEJACKSUCKSATSTUFFJACKMASSEYWELSHJACKSUCKSATGEOGRAPHYJACKSUCKSATCLIPSSAMSMELLSOFAPRICOTSJACKSUCKSATPOPUPPIRATEETCETCIMAGINETHISONAPLAYBUTTONJESUSCHRISTBTWPLEASESUBSCRIBETHANKYOUVERYMUCHHIRICKXxXxXX
    const longChannel = "UChLNLQ6r-aGrIFWo_1A9tKQ";

    let longChannelData = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/${longChannel}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            longChannelSubscriberCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            longChannelViewCount = numeral(data.userList[0].stats.viewCount).format('0,0');
            console.log("Long Channel: " + longChannelSubscriberCount + " | " + longChannelViewCount);
        });
    };

    longChannelData();

    // Don't Subscribe

    const DS = 'UC68DIXWCmetC8N5J_Kc5gjQ';
    let DSSubs = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/${DS}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            DSSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            console.log(DSSubCount);
        });
    };

    DSSubs();
    */

    signal.addEventListener("abort", () => {
        console.log("aborted!");
    });
    controller.abort();

}
setInterval(loop, 1000 * 60 * 59.95);

function sendTweet() {
    let today = new Date();
    let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    let dateHour = (today.getHours() + 1);
    if (dateHour < 10) {
        dateHour = "0" + dateHour;
    }

    let dateMinute = today.getMinutes();
    if (dateMinute < 10) {
        dateMinute = "0" + dateMinute;
    }

    let time = dateHour + ":" + dateMinute;
    let dateandtime = date + ' ' + time;

    T.post('statuses/update', { status:'🕒 ' + dateandtime +
        '\n\n❤️ JSAL:\nSubs: ' + JSALSubCount + '\nViews: ' + JSALViewCount +
        '\n\n💛 JSAS:\nSubs: ' + JSASSubCount + '\nViews: ' + JSASViewCount +
        '\n\n💙 JMW:\nSubs: ' + JMWSubCount + '\nViews: ' + JMWViewCount +
        '\n\n💚 JSAG:\nSubs: ' + JSAGSubCount + '\nViews: ' + JSAGViewCount +
        '\n\n💜 JSAC:\nSubs: ' + JSACSubCount + '\nViews: ' + JSACViewCount });
    console.log("Tweet has been sent!");
}

// Send the tweet after one hour
setInterval(sendTweet, 1000 * 60 * 60);

/**
 * END OF CODE
 * JSALStats Twitter Account: https://www.twitter.com/jsalstats
 * JSALStats GitHub repo: https://www.github.com/galvinpython/jsalstats
 *
 * JSALStats is licensed under the MIT License
 */