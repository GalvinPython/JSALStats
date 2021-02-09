const fetch = require("node-fetch"); //required to fetch stuff from YouTube API
const youtubeKey = 'AIzaSyCQth83qBb3BbJ9l-Lg5Lb4CYKG8_j33XU'; //YouTube access key 

var num;
var JSALSubParse;

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
        num = data["items"][0].statistics.subscriberCount;
        console.log(num);
    })
}

JSALSubs();

JSALSubParse = parseInt(num)
console.log(JSALSubParse)

function nFormatter(JSALSubParse) {
    if (JSALSubParse >= 1000000000) {
       return (JSALSubParse / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (JSALSubParse >= 1000000) {
       return (JSALSubParse / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (JSALSubParse >= 1000) {
       return (JSALSubParse / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return JSALSubParse;    
}

console.log(JSALSubParse);

setInterval(nFormatter, 1000)