// zadanie 1
// Add your code here

let finalQuote;
const quoteStart = "Don't judge each day by the harvest you reap ";
const quoteEnd = "but by the Seeds that you Plant.";

finalQuote = quoteStart + quoteEnd;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = finalQuote;

section.appendChild(para1);
    
// zadanie 2

// Add your code here

let quoteLength;
let revisedQuote;
let index;

const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = 'green eggs and ham';

quoteLength = quote.length;
index = quote.indexOf(substring);

revisedQuote = quote.slice(0, index + substring.length);

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);

// zadanie 3

let fixedQuote;
let finalQuote;
const quote = 'I dO nOT lIke gREen eGgS anD HAM';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

fixedQuote = quote.replace('green eggs and ham', 'brussels sprouts');
finalQuote = capitalizeFirstLetter(fixedQuote) + '.';

// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);
    