/*A Twitter Bot For JackMasseyWelsh's YouTube Statistics*/

const { access } = require("fs")
var Twit = require("twit")
const AbortController = require("abort-controller")
var numeral = require('numeral');

//authentication
//keys
var T = new Twit({
    consumer_key:'FX0jdpTsPIAYFtgCHECQUi5hT',
    consumer_secret:'kawmXBdxwQp7bq9EjlMkqGrojwWa3EGjjewa11ZCOjL2FtvyWb',
    access_token:'1333138071974522884-xBn8y8WIzIjMXS11yCoOnE88TzheCq',
    access_token_secret:'GIqKD4D81fK5NlShs6fVgIUTjPTdjYbUe6UTHuCdexAY9'
})

//stuff required for authentication
T.get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
}, onAuthenticated)

//sends authentication request
function onAuthenticated(err){
    if (err) {
        console.log(err)
    } else {
    console.log('Authentication successful.')
}}

//sends authentication request then sends tweet
function onAuthenticated(err){
    sendAuthMSG()
}

//message to be sent that auth worked
function sendAuthMSG(){
    T.post('statuses/update', { status:`This is just a test!`})
}

var JSALSubCount;
var JSALViewCount;

function loop(){

    JSALSubCount = '';
    JSALViewCount = '';

    const fetch = require("node-fetch"); //required to fetch stuff from YouTube API
    const youtubeKey = 'AIzaSyCQth83qBb3BbJ9l-Lg5Lb4CYKG8_j33XU'; //YouTube access key 

    const controller = new AbortController()
    const signal = controller.signal


    /* JackSucksAtLife */

    //JackSucksAtLife Sub Count
    const JSAL = 'UCewMTclBJZPaNEfbf-qYMGA';
    let JSALSubs = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JSAL}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSALSubCount = numeral(data["items"][0].statistics.subscriberCount).format('0,0');
            console.log(JSALSubCount);
        })
    }

    JSALSubs();

    //JackSucksAtLife View Count

    let JSALViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JSAL}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSALViewCount = data["items"][0].statistics.viewCount;
            console.log(JSALViewCount)
        })
    }

    JSALViews();

    signal.addEventListener("abort", () => {
        console.log("aborted!")
    })
     
    controller.abort()

}

setInterval(loop, 1000*60*60*15)

function sendTweet(){
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
    var time = today.getHours() + ":" + today.getMinutes();
    var dateandtime = date+' '+time;

    T.post('statuses/update', { status:'📈'+dateandtime+'\n\nJSAL:\nSubs: '+JSALSubCount+'\nViews: '+JSALViewCount})
}

setInterval(sendTweet, 1000*20)