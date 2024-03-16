// zadanie 1

// Add your code here
let myArray = ['pizza', 'sushi', 'burger'];
myArray[0] = 'pasta';
myArray[1] = 'ramen';
myArray.unshift('tacos');

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

section.appendChild(para1);

// zadanie 2 

// Add your code here
let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
let myArray = myString.split('+');
let arrayLength = myArray.length;
let lastItem = myArray[arrayLength - 1];

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

let para2 = document.createElement('p');
para2.textContent = `The length of the array is ${ arrayLength }.`;

let para3 = document.createElement('p');
para3.textContent = `The last item in the array is "${ lastItem }".`;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);

// zadanie 3 
let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
myArray.pop();
myArray.push("Blanka", "Dhalsim");
myArray.forEach((item, index) => {
  myArray[index] = `${item} (${index})`;
});

let myString = myArray.join("-");

// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
    
// zadanie 4

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

const eaglesIndex = birds.indexOf("Eagles");
if (eaglesIndex !== -1) {
  birds.splice(eaglesIndex, 1);
}

const eBirds = birds.filter(bird => bird.startsWith("E"));

// Don't edit the code below here!

section.innerHTML = ' ';

const para1 = document.createElement('p');
para1.textContent = eBirds.join(",");

section.appendChild(para1);
