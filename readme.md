## with this Scrapper you can Scrapp tweets , reply and reply reply


## Deployment

To deploy this project run

```bash
index.js

const baseUrl="https://twitter.com/alireza3529"
const date="2023-02-01"
const chromiumPath='./ch/chrome-win/chrome.exe'

  runScrapper(
  {
    base_url:baseUrl,  //Enter the account you want to scrap
    max_date: date,    //Tweets will be scrapped after this date
    path:chromiumPath, //This project requires chromium, you must enter its path directory
  });
```
```bash
  npm run scrapp
```
