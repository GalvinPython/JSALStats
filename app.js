// A Twitter Bot For Jack Massey Welsh's YouTube Statistics
// Check CHANGELOG.md for updates

const { access } = require("fs");
var Twit = require("twit");
const AbortController = require("abort-controller");
var numeral = require('numeral');

// authentication
// keys
const T = new Twit({
    consumer_key: "FX0jdpTsPIAYFtgCHECQUi5hT",
    consumer_secret: "kawmXBdxwQp7bq9EjlMkqGrojwWa3EGjjewa11ZCOjL2FtvyWb",
    access_token: "1333138071974522884-xBn8y8WIzIjMXS11yCoOnE88TzheCq",
    access_token_secret: "GIqKD4D81fK5NlShs6fVgIUTjPTdjYbUe6UTHuCdexAY9",
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
    console.log("Bot Restarted: Version 2.6.0 - Should be working :)");
}

var JSALSubCount;
var JSALViewCount;
var JSASSubCount;
var JSASViewCount;
var JMWSubCount;
var JMWViewCount;
var JSAGSubCount;
var JSAGViewCount;
var DSSubCount;
var longChannelSubscriberCount;
var longChannelViewCount;

function loop() {

    JSALSubCount = '';
    JSALViewCount = '';
    JSASSubCount = '';
    JSASViewCount = '';
    JMWSubCount = '';
    JMWViewCount = '';
    JSAGSubCount = '';
    JSAGViewCount = '';
    DSSubCount = '';
    longChannelSubscriberCount = '';
    longChannelViewCount = '';

    // required to fetch data
    const fetch = require("node-fetch");

    const controller = new AbortController();
    const signal = controller.signal;

    // JackSucksAtLife
    const JSAL = 'UCewMTclBJZPaNEfbf-qYMGA';
    let JSALData = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/${JSAL}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSALSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            JSALViewCount = numeral(data.userList[0].stats.viewCount).format('0,0');
            console.log("JSAL: " + JSALSubCount + " | " + JSALViewCount);
        });
    };

    JSALData();

    // JackSucksAtStuff
    const JSAS = 'UCxLIJccyaRQDeyu6RzUsPuw';
    let JSASData = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/${JSAS}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSASSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            JSASViewCount = numeral(data.userList[0].stats.viewCount).format('0,0');
            console.log("JSAS: " + JSASSubCount + " | " + JSASViewCount);
        });
    };

    JSASData();

    // Jack Massey Welsh
    const JMW = 'UCyktGLVQchOpvKgL7GShDWA';

    let JMWData = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/${JMW}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JMWSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            JMWViewCount = numeral(data.userList[0].stats.viewCount).format('0,0');
            console.log("JMW: " + JMWSubCount + " | " + JMWViewCount);
        });
    };

    JMWData();

    // JackSucksAtGeography
    const JSAG = 'UCd15dSPPT-EhTXekA7_UNAQ';

    let JSAGData = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/${JSAG}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            JSAGSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            JSAGViewCount = numeral(data.userList[0].stats.viewCount).format('0,0');
            console.log("JSAG: " + JSAGSubCount + " | " + JSAGViewCount);
        });
    };

    JSAGData();

    /* JackSucksAtClips
    const JSAC = 'UCUXNOmIdsoyd5fh5TZHHO5Q';

    let JSACData = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/${JSAC}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            JSACSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            JSACViewCount = numeral(data.userList[0].stats.viewCount).format('0,0');
            console.log("JSAC: " + JSACSubCount + " | " + JSACViewCount);
        })
    }

    JSACData();
    */

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

    signal.addEventListener("abort", () => {
        console.log("aborted!");
    });
    controller.abort();

}
setInterval(loop, 1000 * 60 * 59.95);

function sendTweet() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    var dateHour = (today.getHours() + 1);
    if (dateHour < 10) {
        dateHour = "0" + dateHour;
    }

    var dateMinute = today.getMinutes();
    if (dateMinute < 10) {
        dateMinute = "0" + dateMinute;
    }

    var time = dateHour + ":" + dateMinute;
    var dateandtime = date+' '+time;

    T.post('statuses/update', { status:'🕒 ' + dateandtime + '\n\nJSAL:\nSubs: ' + JSALSubCount + '\nViews: ' + JSALViewCount + '\n\nJSAS:\nSubs: ' + JSASSubCount + '\nViews: ' + JSASViewCount + '\n\nJMW:\nSubs: ' + JMWSubCount + '\nViews: ' + JMWViewCount + '\n\nJSAG:\nSubs: ' + JSAGSubCount + '\nViews: ' + JSAGViewCount + '\n\nLong:\nSubs: ' + longChannelSubscriberCount + '\nViews: ' + longChannelViewCount + '\n\nDS: ' + DSSubCount });
    console.log("Tweet has been sent!");
}

setInterval(sendTweet, 1000 * 60 * 60);