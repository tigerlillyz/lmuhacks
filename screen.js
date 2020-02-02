let mockTweets = [ "What happens when a Survivalist and Super Star go on a jungle adventure? Watch @BearGrylls and @captainmarvel @brielarson navigate croc-filled mangroves and rappel sheer cliffs on Running Wild with Bear Grylls on National Geographic, Mon-Wed at 10 PM.",
"Little moments like this remind me why I love my job. This is on the banks of a river in southern India, filming some elephants and scouting some amazing locations. (Then stripping down and bathing in the river, cooling off the sweat and dust, and soaking in the sun!",
"You did amazingly! Huge respect. Courageous, determined, humble, fun. A winning combo! People will love our adventure I am sure.",
"Wow i hate the outdoors. I'm tired of this job.",
"Honestly just screw the turtles. #PlasticDrawsLiveOn.",
"I might kill this camera man hes such a loser."

];
  let blacklist = ["hate", "screw", "kill"];
  let whitelist = ["super", "love", "respect"];

  let flaggedResult = [];
  let whitelistResult = [];
  let flaggedOutput = document.getElementById("flagged");
  let whitelistOutput = document.getElementById("interest");
  function getTwitterFeed(){
    return mockTweets;
  }
  function filterTweets() {
    for (i = 0; i < getTwitterFeed().length; i++) {
      for (j = 0; j < blacklist.length; j++) {
        if (getTwitterFeed()[i].includes(blacklist[j])) {
            flaggedResult[i] = getTwitterFeed()[i];
        } else if (getTwitterFeed()[i].includes(whitelist[j])) {
            whitelistResult[i] = getTwitterFeed()[i];

        }
      }
    }
  }

  filterTweets();
(flaggedResult.filter(tweet => tweet != null)).forEach(tweet => flaggedOutput.innerHTML += tweet + "<br> <br>");
(whitelistResult.filter(tweet => tweet != null)).forEach(tweet => whitelistOutput.innerHTML += tweet + "<br> <br>");
