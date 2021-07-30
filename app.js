//A Twitter Bot For Jack Massey Welsh's YouTube Statistics
/* Useless version information:
    Version: 2.5.3.3.2 (Version 2, Update 5, Patch 3, Update 3, Update 2)
    Date: Wednesday 7th July 2021
    Changelog: Fixed timings again
    Comment: I am stupid
*/

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
    console.log("Bot Restarted: Version 2.5.3. Should be working :)")
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
var longChannelSubscriberCount;
var longChannelViewCount;

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
    longChannelSubscriberCount = '';
    longChannelViewCount = '';

    const fetch = require("node-fetch"); //required to fetch stuff from YouTube API
    const youtubeKey = 'AIzaSyCQth83qBb3BbJ9l-Lg5Lb4CYKG8_j33XU'; //YouTube access key 

    const controller = new AbortController()
    const signal = controller.signal

    /* JackSucksAtLife

    //JackSucksAtLife Sub Count
    const JSAL = 'UCewMTclBJZPaNEfbf-qYMGA';
    let JSALSubs = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/UCewMTclBJZPaNEfbf-qYMGA`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSALSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            console.log(JSALSubCount)
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
            JSALViewCount = numeral(data["items"][0].statistics.viewCount).format('0.0a');
            JSALViewCountB = data["items"][0].statistics.viewCount
            console.log(JSALViewCountB);
        })
    }

    JSALViews();

    
    /* JackSucksAtStuff

    //JackSucksAtStuff Sub Count
    const JSAS = 'UCxLIJccyaRQDeyu6RzUsPuw';
    let JSASSubs = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/UCxLIJccyaRQDeyu6RzUsPuw`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSASSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
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
            JSASViewCount = numeral(data["items"][0].statistics.viewCount).format('0.0a');
            JSASViewCountB = data["items"][0].statistics.viewCount
            console.log(JSASViewCountB);
        })
    }

    JSASViews();


    /* Jack Massey Welsh

    //Jack Massey Welsh Sub Count
    const JMW = 'UCyktGLVQchOpvKgL7GShDWA';

    let JMWSubs = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/UCyktGLVQchOpvKgL7GShDWA`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JMWSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
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
            JMWViewCount = numeral(data["items"][0].statistics.viewCount).format('0.0a');
            JMWViewCountB = data["items"][0].statistics.viewCount
            console.log(JMWViewCountB);
        })

    }

    JMWViews();


    /* JackSucksAtGeography

    //JSAG Sub Count
    const JSAG = 'UCd15dSPPT-EhTXekA7_UNAQ';

    let JSAGSubs = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/UCd15dSPPT-EhTXekA7_UNAQ`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSAGSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
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
            JSAGViewCount = numeral(data["items"][0].statistics.viewCount).format('0.0a');
            JSAGViewCountB = data["items"][0].statistics.viewCount
            console.log(JSAGViewCountB);
        })

    }

    JSAGViews();


    /* JEYCFOFTAFHRX
    
    //JEYCFOFTAFHRX Sub Count
    const Rick = 'UCF9R3Ln-u52vUdSO-pFdETw';

    let RickSubs = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/UCF9R3Ln-u52vUdSO-pFdETw`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            RickSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            console.log(RickSubCount)
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
            RickViewCount = numeral(data["items"][0].statistics.viewCount).format('0.0a');
            RickViewCountB = data["items"][0].statistics.viewCount
            console.log(RickViewCountB);
        })

    }

    RickViews();


    /* JackSucksAtClips
    
    //JackSucksAtClips Sub Count
    const JSAC = 'UCUXNOmIdsoyd5fh5TZHHO5Q';

    let JSACSubs = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/UCUXNOmIdsoyd5fh5TZHHO5Q`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            JSACSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
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
            JSACViewCount = numeral(data["items"][0].statistics.viewCount).format('0.0a');
            JSACViewCountB = data["items"][0].statistics.viewCount
            console.log(JSACViewCountB);
        })

    }

    JSACViews();


    /* Don't Subscribe

    //DS Sub Count

    const DS = 'UC68DIXWCmetC8N5J_Kc5gjQ';

    let DSSubs = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/UC68DIXWCmetC8N5J_Kc5gjQ`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            DSSubCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            console.log(JSACSubCount)
        })
    }

    DSSubs();

    */

    // Stupidly Long Name Channel

    const longChannel = "UChLNLQ6r-aGrIFWo_1A9tKQ"

    let ChannelSubs = () => {

        fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/UChLNLQ6r-aGrIFWo_1A9tKQ`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            longChannelSubscriberCount = numeral(data.userList[0].stats.subscriberCount).format('0,0');
            console.log(longChannelSubscriberCount);
        })

    }

    ChannelSubs();

    let ChannelViews = () => {

        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${longChannel}&key=${youtubeKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            longChannelViewCount = numeral(data["items"][0].statistics.viewCount).format('0.0a');
            console.log(longChannelViewCount);
        })

    }

    ChannelViews();

    signal.addEventListener("abort", () => {
        console.log("aborted!")
    })
     
    controller.abort()

}
setInterval(loop, 1000*60*15)

function triggerEvent() {
    sendTweet();
}
setTimeout(triggerEvent, 10000)

function sendTweet(){
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()
    
    var dateHour = today.getHours();
    if (dateHour < 10) {
        dateHour = "0" + dateHour;
    }
    else {
    }
    
    var dateMinute = today.getMinutes();
    if (dateMinute < 10) {
        dateMinute = "0" + dateMinute;
    }
    else {
    }
    
    var time = dateHour + ":" + dateMinute;
    var dateandtime = date+' '+time;

    //T.post('statuses/update', { status:'🕒 '+dateandtime+'\n\nJSAL:\nSubs: '+JSALSubCount+'\nViews: '+JSALViewCount+'\n\nJSAS:\nSubs: '+JSASSubCount+'\nViews: '+JSASViewCount+'\n\nJMW:\nSubs: '+JMWSubCount+'\nViews: '+JMWViewCount+'\n\nJSAG:\nSubs: '+JSAGSubCount+'\nViews: '+JSAGViewCount+'\n\nHiRickX:\nSubs: '+RickSubCount+'\nViews: '+RickViewCount+'\n\nJSAC:\nSubs: '+JSACSubCount+'\nViews: '+JSACViewCount+`\n\nDS: `+DSSubCount+'\nSubs estimated'})
    T.post('statuses/update', { status:'*New Channel Only*\n🕒 '+ dateandtime + '\nSubscriber Count: ' + longChannelSubscriberCount + '\nView Count: ' + longChannelViewCount})
    console.log("Tweet has been sent!")
}

setInterval(sendTweet, 1000*60*15)