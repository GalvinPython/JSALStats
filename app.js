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
    T.post('statuses/update', { status:`Version 2.2:\n\n-Commas Fully Added\n-Channel Names changed to keep within character limit\n-Readded Don't Subscribe Goal`})
}

var JSALSubCount;
var JSALViewCount;
var JSASSubCount;
var JSASViewCount;
var JMWSubCount;
var JMWViewCount;
var JSAGSubCount;
var JSAGViewCount;
var RickSubCount;
var RickViewCount;
var JSACSubCount 
var JSACViewCount;
var DSSubCount;

function loop(){

    JSALSubCount = '';
    JSALViewCount = '';
    JSASSubCount = '';
    JSASViewCount = '';
    JMWSubCount = '';
    JMWViewCount = '';
    JSAGSubCount = '';
    JSAGViewCount = '';
    RickSubCount = '';
    RickViewCount = '';
    JSACSubCount = '';
    JSACViewCount = '';
    DSSubCount = '';

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
            JSALViewCount = numeral(data["items"][0].statistics.viewCount).format('0,0');
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
            JSASSubCount = numeral(data["items"][0].statistics.subscriberCount).format('0,0');
            console.log(JSASSubCount)
        })
    }

    JSASSubs();


    //JackSucksAtStuff View Count

    let JSASViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JSAS}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSASViewCount = numeral(data["items"][0].statistics.viewCount).format('0,0');
            console.log(JSASViewCount)
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
            JMWSubCount = numeral(data["items"][0].statistics.subscriberCount).format('0,0');
            console.log(JMWSubCount)
        })
    }

    JMWSubs();

    //Jack Massey Welsh View Count

    let JMWViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JMW}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JMWViewCount = numeral(data["items"][0].statistics.viewCount).format('0,0');
            console.log(JMWViewCount)
        })

    }

    JMWViews();


    /* JackSucksAtGeography */

    //JSAG Sub Count
    const JSAG = 'UCd15dSPPT-EhTXekA7_UNAQ';

    let JSAGSubs = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JSAG}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSAGSubCount = numeral(data["items"][0].statistics.subscriberCount).format('0,0');
            console.log(JSAGSubCount)
        })
    }

    JSAGSubs();

    //JSAG View Count

    let JSAGViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JSAG}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSAGViewCount = numeral(data["items"][0].statistics.viewCount).format('0,0');
            console.log(JSAGViewCount)
        })

    }

    JSAGViews();


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
            RickSubCount = numeral(data["items"][0].statistics.subscriberCount).format('0,0');
        })
    }

    RickSubs();

    //JEYCFOFTAFHRX View Count

    let RickViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Rick}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            RickViewCount = numeral(data["items"][0].statistics.viewCount).format('0,0');
            console.log(RickViewCount)
        })

    }

    RickViews();


    /* JackSucksAtClips */
    
    //JackSucksAtClips Sub Count
    const JSAC = 'UCUXNOmIdsoyd5fh5TZHHO5Q';

    let JSACSubs = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JSAC}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSACSubCount = numeral(data["items"][0].statistics.subscriberCount).format('0,0');
            console.log(JSACSubCount)
        })
    }

    JSACSubs();

    //JackSucksAtClips View Count

    let JSACViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${JSAC}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSACViewCount = numeral(data["items"][0].statistics.viewCount).format('0,0');
            console.log(JSACViewCount)
        })

    }

    JSACViews();


    /* Don't Subscribe */

    //DS Sub Count

    const DS = 'UC68DIXWCmetC8N5J_Kc5gjQ';

    let DSSubs = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${DS}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            DSSubCount = numeral(data["items"][0].statistics.subscriberCount).format('0,0');
            console.log(DSSubCount)
        })
    }

    DSSubs();


    signal.addEventListener("abort", () => {
        console.log("aborted!")
    })
     
    controller.abort()

}
setInterval(loop, 1000*60*60*5.95)

function sendTweet(){
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
    var time = today.getHours() + ":" + today.getMinutes();
    var dateandtime = date+' '+time;

    T.post('statuses/update', { status:'🕒'+dateandtime+'\n\nJSAL:\nSubs: '+JSALSubCount+'\nViews: '+JSALViewCount+'\n\nJSAS:\nSubs: '+JSASSubCount+'\nViews: '+JSASViewCount+'\n\nJMW:\nSubs: '+JMWSubCount+'\nViews: '+JMWViewCount+'\n\nJSAG:\nSubs: '+JSAGSubCount+'\nViews: '+JSAGViewCount+'\n\nHiRickX:\nSubs: '+RickSubCount+'\nViews: '+RickViewCount+'\n\nJSAC:\nSubs: '+JSACSubCount+'\nViews: '+JSACViewCount+`\n\nDS: `+DSSubCount+'/1M'})
}

setInterval(sendTweet, 1000*60*60*6)