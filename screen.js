let blackList = ["retard", "bitch", "cunt"];

let tweet = "@josh is such a retard";

let badTweets = [];



function checkTweet(list, tweet){
    for(let i = 0; i < list.length; i++){
        if(tweet.includes(list[i])){
            badTweets.push(tweet);
        }
        
    }
}

console.log(getTweet());
console.log(checkTweet(blackList, tweet));
console.log(badTweets);