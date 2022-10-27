/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Displays a random Harry Potter quote at 10 second intervals and when button is pressed
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array : array of Harry Potter quote objects
 * property: quote [string]
 * property: source [string]
 * property: citation [string]
 * property: year [number]
 * property: tags [array]
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


/**
 * `getRandomQuote` function:
 * returns a random object from array of objects
 *
 * @param {array} quotes - array of objects
 * @return {object} random object from array
 **/

function getRandomQuote(quotes) {

  //if no quotes in quotes array
  if (quotes.length === 0) {
    throw Error ("Array must have quotes.");
  }
  //create random number
  let randomNumber = Math.floor( Math.random() * quotes.length);

  //get quote object
  let quote = quotes[randomNumber];

  //return quote object
  return quote;
}

/***
 * `randomBackgroundColor` function
 *  gets random rgb color and writes it to the browser's background
 *
 ***/

function randomBackgroundColor(){
  //get three random rbg colors
  let red = Math.floor (Math.random() * 255 );
  let green = Math.floor (Math.random() * 255 );
  let blue = Math.floor (Math.random() * 255 );
  console.log (`${red} , ${green} , ${blue}`);
  //set background to random color
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

/**
 * `autoDisplayQuote` function:
 *
 * displays a random quote to browser every 10 seconds
 *
 * @param {function} printQuote - prints quote to browser
 *
 **/

function autoDisplayQuote (printQuote){
  setInterval(printQuote, 10000);
}



//keeps track of prev quote to prevent back to back repeat quotes
let prevQuote = '';

/***
 * `printQuote` function
 * gets random quote object
 * checks for undefined properties
 * displays random quote to browser when button is pressed
 * changes background color with every new quote
 ***/

function printQuote() {

  //get quote object
  let randomQuote = '';

  // check for back to back repeat quotes
  do {
    randomQuote = getRandomQuote(quotes);
    console.log (randomQuote);
  } while (randomQuote === prevQuote);

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
      htmlQuote += `<span class="tags"> ${randomQuote.tags[i]} </span>`;
     //console.log(randomQuote.tags[i]);
    }
  }
  htmlQuote += "</p>";

  //display string in browser
  document.getElementById('quote-box').innerHTML = htmlQuote;

  //display random backgroung color
  randomBackgroundColor();
  prevQuote = randomQuote;
}

autoDisplayQuote (printQuote);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
