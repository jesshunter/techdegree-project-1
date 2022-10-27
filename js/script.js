/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {
    quote: "Love as powerful as your mother’s for you leaves it’s own mark. To have been loved so deeply, even though the person who loved us is gone, will give us some protection forever.",
    source: "Albus Dumbledore",
    citation:"Harry Potter and the Sorcerer’s Stone",
    year: 1997,
    tags: ["love", "sacrifice"]
  },
  {
    quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    source: "Albus Dumbledore",
    citation:"Harry Potter and the Sorcerer’s Stone",
    year: 1997,
    tags: ["courage", "wisdom"]
  },
  {
    quote: "It is the unknown we fear when we look upon death and darkness, nothing more.",
    source: "Albus Dumbledore",
    citation:"Harry Potter and the Half-Blood Prince",
    year: 2005,
    tags: ["wisdom", "encouragement"]
  },
  {
    quote: "I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.",
    source: "Rubeus Hagrid",
    citation:"Harry Potter and the Goblet of Fire",
    year: 2000,
    tags: ["wisdom", "encouragement"]
  },
  {
    quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
    source: "Sirius Black",
    citation:"Harry Potter and the Goblet of Fire",
    year: 2000,
    tags: ["wisdom"]
  },
  {
    quote: "Every human life is worth the same, and worth saving.",
    source: "Kingsley Shacklebolt",
    citation:"Harry Potter and the Deathly Hallows",
    year: 2007,
    tags: ["motivation", "wisdom"]
  }
];



/***
 * `getRandomQuote` function:
    accepts an array of objects as parameter
    returns a random object from array
***/
function getRandomQuote(quotes) {

  //if no quotes in quotes array
  if (quotes.length === 0) {
    throw Error ("Array must have quotes.");
  }
  //create random number
  let randomNumber = Math.ceil( Math.random() * quotes.length) - 1;


  //get quote object
  let quote = quotes[randomNumber];

  //return quote object
  return quote;
}

getRandomQuote(quotes);
/***
 * `printQuote` function
***/
function printQuote() {
  //get quote object
  let randomQuote = getRandomQuote(quotes);
  //check if prev random number is the same as current ran number so no repeat quotes

  //build HTML string with quote object
  let htmlQuote = `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source}`;

  //check if object has citation and year values
  if (randomQuote.citation != undefined) {
    htmlQuote += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year != undefined) {
    htmlQuote += `<span class="year"> ${randomQuote.year} </span>`;
  }
  if (randomQuote.tags != undefined) {
    for (var i = 0; i < randomQuote.tags.length; i++) {
      htmlQuote += `<span> ${randomQuote.tags[i]} </span>`;
     //console.log(randomQuote.tags[i]);
    }
  }
  htmlQuote += "</p>";

  //display string in browswer
  document.getElementById('quote-box').innerHTML = htmlQuote;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
