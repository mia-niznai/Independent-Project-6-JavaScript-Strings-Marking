//First task

const quoteStart = "Don't judge each day by the harvest you reap";
const quoteEnd = "but by the seeds that you plant";
console.log(quoteStart + " " + quoteEnd + ".");

//Second task

let quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';
let quoteLength = quote.length;
let index = quote.indexOf(substring);
let revisedQuote = quote.slice(0, index + substring.length + 1);
console.log(revisedQuote)

//Third task

quote = 'I dO nOT lIke gREen eGgS anD HAM';
let allLowerCase = quote.toLowerCase();
let doNotLike = allLowerCase.replace("green eggs and ham", "fast-food");
let letter1 = doNotLike.slice(0, 1).toUpperCase();
let fixedQuote = doNotLike.replace(doNotLike[0], letter1);
console.log(fixedQuote + ".");

//Fourth task

const theorem = 'Pythagorean theorem';
const a = 5;
const b = 8;
let c = Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)))
console.log(c);