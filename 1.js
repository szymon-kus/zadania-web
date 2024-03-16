// zad 1
let myName;
myName = "szymon";
myAge = 22;

// Add your code here

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);
    
// zad 2
let myName = 'Paul';
myName = 'Szymon';

// Don't edit the code below here!

section.innerHTML = ' ';
const para = document.createElement('p');
para.textContent = myName;
section.appendChild(para);
    
// zad 3 

let myName = 'Default';
myName = 'Chris';

let myAge = 42;


// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
    