//Strict mode makes it easier to write "secure" JavaScript.
'use strict'

//Array Section

//an Array of at least (5) quotes
//data in the object contains quotes, source, year, and citation[where the quote orginated from]
let quotes = [
  {
    quote: "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. ",
    source: "Marie Curie",
    year: "1937",
    tags: "Science",
    citation: "Marie Curie, As quoted in Madame Curie : A Biography by Eve Curie Labouisse, p #69",
    occupation: "Physicist/ Chemist",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    year: "1933",
    tags: "Motivational",
    occupation: "Buisnessman Dreamer",
  },
  {
    quote: "When something is important enough, you do it even if <strong>the odds are not in your favor</strong>.",
    source: "Elon Musk",
    year: "2012",
    tags: "Motivational",
    citation: "60 Minutes, season 44, episode 26",
    occupation: "Ceo of TESLA",
  },
  {
    quote: "Since life is but a continuous series of experiences, everything ultimately helps me towards my final enlightenment",
    source: "Sri Chinmoy",
    year: "1979",
    tags: "Experience",
    citation:"Ten Thousand Flower Flames Part 1-100 ",
    occupation: "Indian Spiritiual",
  },
  {
    quote: "Web does not just connect machines, it connects people.",
    source: "Tim Berners-Lee",
    year: "2008",
    tags: "Software",
    citation: "Speech before Knight Foundation",
    occupation: "Software Developer",
  },
  //Extra Credit  Additional quote object property
  {
    quote: "When I invented the web, I didn't have to ask anyone's permission. ",
    source: "Tim Berners-Lee",
    year: "2006",
    tags: "Software",
    citation: "Net Neutrality: This is Serious",
    occupation: "Software Developer",
  },
  {
    quote: "We need diversity of thought in the world to face the new challenges.",
    source: "Tim Berners-Lee",
    tags: "Software",
    occupation: "Software Developer",
  },
  {
    quote: "Approach the game with no present agendas and you'll probably come away surpised at your overall efforts",
    source: "Phill Jackson",
    tags: "Motivational",
    occupation: "NBA Coach",
  },
  {
    quote: "Experience is the teacher of all things",
    source: "Gaius Julius Caesar",
    tags: "Experience",
    occupation: "Roman Dictator",
  },
  {
    quote: "It's kind of fun to do the impossible.",
    source: "Walt Disney",
    year: "1982",
    tags: "Motivational",
    citation: "As quoted in Animated Architecture by Derek Walker p #10",
    occupation: "Buisnessman Dreamer",
  },
  {
    quote: "I have no special talent. I am only passionately <strong>curious</strong>",
    source: "Albert Einstein",
    year: "1952",
    tags: "Inspirational",
    citation: "Einstein Archives 39-013",
    occupation: "Physicist",
  },
  {
    quote: "Fear is a hard thing to deal with. I feel it quite <strong>strongly</strong>. If I think something is important enough, I’ll make myself do it in spite of fear. But it can really sap the will. I hate fear, I wish I had it less.",
    source: "Elon Musk",
    year: "2015",
    tags: "Motivational",
    citation: " Interview  Meet The Man Who's Revolutionizing The Future Of Driving And The Universe",
    occupation: "Ceo of TESLA",
  },
  {
    quote: "All the adversity I've had in my life, all my troubles and obstacles, have strengthened me... ",
    source: "Walt Disney",
    year: "1957",
    tags: "Motivational",
    citation: "The Story of Walt Disney (1957)",
    occupation: "Buisnessman Dreamer",
  },
  {
    quote: "Passion is energy. Feel the power that comes from focusing what excites you.",
    source:"Oprah Winfrey",
    year: "2015",
    citation: "Bloomberg",
    occupation: "Host",
  },
];

// 'Pause development and test your code' getting status of Quotes Array
// console.log(quotes);

//A function which Gets a Random quote from quotes the object, which is within the array.
function getRandomQuote() {
  const q = Math.floor(Math.random()*quotes.length);
  return quotes[q];
}

/*'Create two separate if statements below the variables. You will need to add decision making to this function:' */

//Takes the random quote and coverts the data from the object into a string


function printQuote() {
  let quoteBox = '';
  const newQuote = getRandomQuote();
  quoteBox += '<p class="quote">' + newQuote.quote + '</p>';
  quoteBox += '<p class="source">' + newQuote.source +'</p>';
  
  // If there is a citation, occupation && / ||  year for the quote it'll added to the HTML string.
  if (newQuote.citation) {
    quoteBox += '<span class="citation">' + newQuote.citation + '</span>';
  } 
  if (newQuote.tags) {
    quoteBox += '<p class="tags">' + newQuote.tags + '</p>';
  } 
  if (newQuote.occupation) {
    quoteBox += '<p class="occupation">' + newQuote.occupation + '</p>';
  } 
  if (newQuote.year) {
    quoteBox += '<span class="year">' +newQuote.year + '</span>';
  }
  quoteBox += '</p>';
  
  // 'Use the following code snippet, along with the variable storing the string you’ve assembled, to update your project’s HTML with a random quote:'
  
  document.getElementById("quote-box").innerHTML = quoteBox;
}

// 'Pause development and test your code':  printQuote() function is recognized
//console.log(printQuote)

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// EXTRA CREDIT SECTION

//Random background colors Extra Credit
// Generates a random number between 0 and 255, then a RGB HTML string will be created
function colors() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let RGBcolor = "rgb(" + r + "," + g + "," + b + ")";
  document.body.style.background = RGBcolor;
}
//a function that randomly changes the page color when clicked
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
  document.body.style.backgroundColor = colors();
});

// Auto-refreshed quotes EXTRA CREDIT

// Interval Section
// Calls the printQuote and changes background color every 15 seconds
const intervalID = window.setInterval(printQuote ,15000);
const intervalcolor =window.setInterval(colors ,15000);





