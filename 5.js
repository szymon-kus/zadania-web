// zadanie 1

let season = 'summer';
let response;

if (season.includes("summer")) {
  response = "It's summer! Enjoy the warm weather!";
} else if (season.includes("winter")) {
  response = "It's winter! Bundle up and stay warm!";
} else {
  response = "We don't know what season it is.";
}


// Don't edit the code below here!

const section = document.querySelector('.preview');
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
    

// zadanie 2

let response;
let score = 75;
let machineActive = false;

if (!machineActive) {
  response = "Please switch on the answer machine.";
} else {
  if (score < 0 || score > 100) {
    response = "This is not possible, an error has occurred.";
  } else if (score >= 0 && score <= 19) {
    response = "That was a terrible score — total fail!";
  } else if (score >= 20 && score <= 39) {
    response = "You know some things, but it's a pretty bad score. Needs improvement.";
  } else if (score >= 40 && score <= 69) {
    response = "You did a passable job, not bad!";
  } else if (score >= 70 && score <= 89) {
    response = "That's a great score, you really know your stuff.";
  } else if (score >= 90 && score <= 100) {
    response = "What an amazing score! Did you cheat? Are you for real?";
  }
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
    
//zadanie 3

let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

machineResult = machineActive ? "The machine is switched on." : "The machine is switched off.";
pwdResult = machineActive ? (pwd === 'cheese' ? "Login successful." : "Login unsuccessful.") : "";

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);
    