const { runScrapper } = require("./TweeterScrapper");

// Every scrapped tweet should come here
const getScrappedTweetCallback = (tweet) => {
    console.log(tweet);
}


runScrapper(
    {
        base_url: "https://twitter.com/alireza3529",
        max_date: "2023-02-01",
        path: './ch/chrome-win/chrome.exe'
    }, getScrappedTweetCallback);


