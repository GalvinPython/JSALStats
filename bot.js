//trello board: https://trello.com/b/BnRrbl9Y/jsalstats
//version:
    //state: stable
    //version number: V1.1
    //stable build number: 4
    //build: 10
    //changelog: M/K added in

//Created by:
    //Galvin: (Developer + PR Manager)
        //twitter:
            //@egalvinyt
            //@redblockyt
            //@galvinplayz
            //@galvinsucks
    //Yodmin: (Manager + Founder)
        //twitter: @yodmin_

const { access } = require("fs")
var Twit = require("twit")
const AbortController = require("abort-controller")

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
    T.post('statuses/update', { status:'Version 1.1 Pre-Release 1 Update:\nhttps://www.reddit.com/r/JSALStats/comments/l163s5/released_version_11_prerelease_1_20th_january_2021/'})
}

var JSALSubCount;
var JSALViewCount;
var JSASSubCount;
var JSASViewCount;
var JMWSubCount;
var JMWViewCount;
var RickSubCount;
var RickViewCount;
var DSSubCount;

var JSALSubCountSimple;
var JSASSubCountSimple;
var JMWSubCountSimple;
var RickSubCountSimple;
var DSSubCountSimple;

function loop(){

    JSALSubCount = '';
    JSALViewCount = '';
    JSASSubCount = '';
    JSASViewCount = '';
    JMWSubCount = '';
    JMWViewCount = '';
    RickSubCount = '';
    RickViewCount = '';
    DSSubCount = '';

    JSALSubCountSimple = '';
    JSASSubCountSimple = '';
    JMWSubCountSimple = '';
    RickSubCountSimple = '';
    DSSubCountSimple = '';

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
            JSALSubCount = data["items"][0].statistics.subscriberCount;
            console.log(JSALSubCount);
        })
    }

    JSALSubs();

    JSALSubCountSimple = (JSALSubCount / 1000000);
    console.log(JSALSubCountSimple);


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

    
    /* JackSucksAtStuff */

    //JackSucksAtStuff Sub Count
    const JSAS = 'UCxLIJccyaRQDeyu6RzUsPuw';

    let JSASSubs = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JSAS}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSASSubCount = data["items"][0].statistics.subscriberCount;
        })
    }

    JSASSubs();

    JSASSubCountSimple = JSASSubCount / 1000;
    console.log(JSASSubCountSimple);

    //JackSucksAtStuff View Count

    let JSASViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JSAS}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSASViewCount = data["items"][0].statistics.viewCount;
        })
    }

    JSASViews();


    /* Jack Massey Welsh */

    //Jack Massey Welsh Sub Count
    const JMW = 'UCyktGLVQchOpvKgL7GShDWA';

    let JMWSubs = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JMW}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JMWSubCount = data["items"][0].statistics.subscriberCount;
            console.log(JMWSubCount)
        })
    }

    JMWSubs();

    JMWSubCountSimple = JMWSubCount / 1000;

    //Jack Massey Welsh View Count

    let JMWViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JMW}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JMWViewCount = data["items"][0].statistics.viewCount;
            console.log(JMWViewCount)
        })

    }

    JMWViews();


    /* JEYCFOFTAFHRX */
    
    //JEYCFOFTAFHRX Sub Count
    const Rick = 'UCF9R3Ln-u52vUdSO-pFdETw';

    let RickSubs = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Rick}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            RickSubCount = data["items"][0].statistics.subscriberCount;
        })
    }

    RickSubs();

    RickSubCountSimple = RickSubCount / 1000;

    //JEYCFOFTAFHRX View Count

    let RickViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Rick}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            RickViewCount = data["items"][0].statistics.viewCount;
            console.log(RickViewCount)
        })

    }

    RickViews();

    
    /* Don't Subscribe */

    const DS = 'UC68DIXWCmetC8N5J_Kc5gjQ';

    let DSSubs = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${DS}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            DSSubCount = data["items"][0].statistics.subscriberCount;
            console.log(DSSubCount)
        })
    }

    DSSubs();

    DSSubCountSimple = DSSubCount / 1000;

    signal.addEventListener("abort", () => {
        console.log("aborted!")
    })
     
    controller.abort()

}
setInterval(loop, 1000*60*59)

function sendTweet(){
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
    var time = today.getHours() + ":" + today.getMinutes();
    var dateandtime = date+' '+time;

    T.post('statuses/update', { status:''+dateandtime+'\nJSAL ❤️\nSubs: '+JSALSubCount+'\nViews: '+JSALViewCount+'\n\nJSAS 💛\nSubs: '+JSASSubCount+'\nViews: '+JSASViewCount+'\n\nJMW 💙\nSubs: '+JMWSubCount+'\nViews: '+JMWViewCount+'\n\nJEYCFOFTAFHRX 💜\nSubs: '+RickSubCount+'\nViews: '+RickViewCount+`\n\nDon't Subscribe 🤍\nSubs: `+DSSubCount+'/800,000'})
}

setInterval(sendTweet, 1000*60*60)