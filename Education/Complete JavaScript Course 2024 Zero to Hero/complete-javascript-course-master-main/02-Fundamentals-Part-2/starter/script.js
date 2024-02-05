//Strict Mode

'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;  //take the s out and see what happens
if (hasDriversLicense) console.log('I can drive.');

// const private = 534; //Strict word logic error

console.log(`I like it when things work right like they do on my mac!`);
console.log(100 + 900);

// Funtions
function logger() {
    console.log(`My Name is Cameron.`);
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
console.log(fruitProcessor(2, 4));

function getUserInformation() {

    let name = prompt(`User Name: `);
    let age = prompt(`User Age: `);
    let email = prompt(`User Email: `);

    console.log(`User Name: ${name}`);
    console.log(`User Age: ${age}`);
    console.log(`User Email: ${email}`);
}

function getUserInformation(name, age, email) {
    console.log(`
User Name: ${name}
User Age: ${age}
User Email: ${email}
`);

}

getUserInformation('Cameron Mckeel', 32, 'Cameronmckeel1991@gmail.com');


// function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);



// arrow function 
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirment = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retriment = 65 - age;
    return `${firstName} retires in ${retriment} years.`;
}

// console.log(`Cameron has ${yearsUntilRetirment(1991)} years until he can retire!`);
console.log(yearsUntilRetirment(1991, `Cameron`));



function cutFruitPieces(fruit){
    return fruit * 4;       // change here to see visualiaze how the code works 

}

function fruitProcessor(apples, oranges) {
    const apple_pieces = cutFruitPieces(apples);
    const orange_pieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apple_pieces} apples and ${orange_pieces} oranges.`;
    return juice;
}

// how many whole fruites is input here and the code will calculate the math 
// and provide the output in correct Format 
console.log(fruitProcessor(2, 3));  

const calcAge = function(birthYear) {
    return 2023 - birthYear;
}


const yearsUntilRetirment1 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retriment = 65 - age;

    if (retriment > 0){
        console.log(`${firstName} retires in ${retriment} years.`);
        return retriment;

    } else {
        console.log(`${firstName} has already retired.`);
        return -1;

    }
    // return `${firstName} retires in ${retriment} years.`;
}

console.log(yearsUntilRetirment1(1991, `Cameron`));
console.log(yearsUntilRetirment1(1950, `Mike`));

// Coding Challenge #5

// Test 1
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}!`);
    } else if (avgKoalas >= avgDolphins * 2){
        console.log(`Koalas win ${avgKoalas} to ${avgDolphins}!`);
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// Arrays

const friends = [`Michael`, `Steven`, `Peter`];
const years = new Array(1991, 1984, 2008, 2020);
console.log(friends);
console.log(years);

console.log(friends[0]);
console.log(years[2]);

console.log(friends.length);
console.log(friends.length - 1);

console.log(`The length of the array named "Friends" has a length of ${friends.length}`);

friends[2] = `Jay`;
console.log(friends);

const firstName = `Cameron`
const cameron = [`Cameron`, `Mckeel`, 2023 - 1991, firstName, friends];

console.log(cameron);
console.log(cameron.length);

// Exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const allyears = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// const ages = [age1, age2, age3];

console.log(ages);

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const newLength = friends.push(`Jay`);    // adding an element to an array 
console.log(friends);

console.log(newLength);

friends.unshift(`John`);    //adding an element to the front of the array
console.log(friends);

const popped = friends.pop();  //automatically removes the last element of the array
console.log(friends);

console.log(popped);

const shifted = friends.shift();
console.log(friends);
console.log(shifted);

console.log(friends.indexOf(`Steven`)); //returns the index of the element you are looking for
//if you look for something that is not there it returns -1

console.log(friends.includes(`Steven`));    //checking if an elemnet is in the array; returns a boolean
console.log(friends.includes(`Bob`));

friends.push(23);
console.log(friends.includes(23));  //type sensative

if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Steven.`)
}

// Coding Challenge 6
// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, 
// calculated based on the rules above (you can check out the code from the first tip calculator 
// challenge if you need to). Use the function type you like the most. Test the function using a 
// bill value of 100.

const bills = [125, 555, 44];
const tips = [];
const totals = [];

const calcTip = function (bill){
    if (bill >= 50 && bill <= 300) {
        let total = (bill * .15) + bill;
        let tipValue = bill * .15;
        tips.push(tipValue);
        totals.push(total);
        return total;
    } else {
        let total = (bill * .2) + bill;
        let tipValue = bill * .2
        tips.push(tipValue);
        totals.push(total);
        return total;
    }
}

const bill1 = calcTip(bills[0]);
const bill2 = calcTip(bills[1]);
const bill3 = calcTip(bills[2]);

console.log(bills);
console.log(tips);
console.log(totals);

//Everything after this through challenge #6 is on my macbook

// Objects (Dictionaries!)

const cameron = {
    firstName: `Cameron`,
    lastName: `Mckeel`,
    birthYear: 1991,
    job: `Carpenter`,
    family: [`Miyu`, `Seura`, `New Baby`],
    hasDriversLicense: true,

    // calcAge: function (birthYear){
    //     return 2023 - birthYear;
    // }

    calcAge: function (){
        return 2023 - this.birthYear;
    }

    calcAge: function (){
        this.age = 2023 - this.birthYear;
        return this.age;
};

console.log(cameron);
console.log(cameron.lastName);
console.log(cameron[`firstName`]);

const nameKey = `Name`;
console.log(cameron[`first` + nameKey]);
console.log(cameron[`last` + nameKey]);

// const interestedIn = prompt(
//     `what do you want to know about Cameron? Choose between
// firstName, lastName, age, job, and family
// `);
// // console.log(cameron[interestedIn]);

// if (cameron[interestedIn]) {
//     console.log(cameron[interestedIn]);
// } else {
//     console.log(`Property does not exist.`)
// }

 //adding something to the object(dictionary)
cameron.location = `Japan`;
cameron[`twitter`] = `@xXEpicurusXx`;
console.log(cameron);

// challenge 
// `Cameron has 3 family members, and his wifes name is Miyu.`

console.log(`${cameron.firstName} has ${cameron.family.length} family members, and his wife's name is ${cameron.family[0]}.`);

console.log(cameron.calcAge());
// console.log(cameron[`calcAge`](1991));



const cameron = {
    firstName: `Cameron`,
    lastName: `Mckeel`,
    birthYear: 1991,
    job: `Carpenter`,
    family: [`Miyu`, `Seura`, `New Baby`],
    hasDriversLicense: true,

    // calcAge: function (birthYear){
    //     return 2023 - birthYear;
    // }

    // calcAge: function (){
    //     return 2023 - this.birthYear;
    // }

    calcAge: function (){
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    //this is one way to check conditionals 
    // getSummary: function() {
    //     if(cameron.hasDriversLicense == true) {
    //         return `${this.firstName} is a ${this.calcAge()} ${this.job}, and he has a drivers license.`
    //     } else {
    //         return `${this.firstName} is a ${this.calcAge()} ${this.job}, and he does not have a drivers license.`
    //     }
    // }

    // Using ? is another way to check conditionals and is also intersting, try to remeber this
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
   
    }
};

// Coding Challenge
// "Cameron is a 32-year old carpenter, and he has a drivers license."
console.log(cameron.getSummary());


// Coding Challenge #7

// Let's go back to Mark and John comparing their BMIs!
// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:
// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). 
// Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, 
// and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's 
// BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), 
// and not this one mass / (height ** 2).

// My code 
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI;
    }
};

function compareBMI() {
    if (mark.calcBMI() > john.calcBMI()) {
        console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI(${john.calcBMI()}).`)
    } else {
        console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI(${mark.calcBMI()}).`)
    }
}

compareBMI()

// Instructors Code 

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`)
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}).`)
}

// Loops

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights: repetition - ${rep}`)
}

const cameron = [
    'Cameron',
    'Mckeel',
    2023 - 1991,
    'Carpenter',
    ['Miyu', 'Seura', 'New Baby'],
    true,
];

const types = [];

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < cameron.length; i++) {
    console.log(cameron[i], typeof cameron[i]);

    // filling a new array with the types from the cameron array
    // option 1
    // types[i] = typeof cameron[i];   //uncomment this out

    // option 2
    types.push(typeof cameron[i]);
};

console.log(types);

for (let i = 0; i < years.length; i++){
    console.log(`Born in ${years[i]} - ${2023 - years[i]} years old`);

    ages.push(2023 - years[i]);
}

console.log(ages);



// Continue and Break Statements 

const cameron = [
    'Cameron',
    'Mckeel',
    2023 - 1991,
    'Carpenter',
    ['Miyu', 'Seura', 'New Baby'],
    true,
];

// console.log('Only printing strings');
// for (let i = 0; i < cameron.length; i++) {
//     if(typeof cameron[i] !== 'string') continue;
//     console.log(cameron[i], typeof cameron[i]);
// }

console.log('Breaking with number');
for (let i = 0; i < cameron.length; i++) {
    if(typeof cameron[i] === 'number') break;
    console.log(cameron[i], typeof cameron[i]);
}


// Looping Backwards

const cameron = [
    'Cameron',
    'Mckeel',
    2023 - 1991,
    'Carpenter',
    ['Miyu', 'Seura', 'New Baby'],
    true
];

for (let i = cameron.length - 1; i >= 0; i--){
    console.log(i, cameron[i]);
}

// Loop within a loop 
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`Starting Exercise: ${exercise}`)

    for(let rep = 1; rep < 6; rep++){
        console.log(`Lifting weights: repetion: ${rep}`)
    }
}


// While Loops

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights! Repetition: ${rep}`)
// }

// let rep = 1;

// while(rep <= 10) {
//     console.log(`WHILE: Lifting weights! Repetition: ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled: ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loop is about to end...`);
}



// Coding Challenge #7
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.
// Create two empty arrays for the tips and the totals (tips and totals)
// Use the calcTip function we wrote before (included in the starter code) to calculate tips and 
// total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.


// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers
//  in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. 
// Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop,
// you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

for (let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

const calcAverage = function (arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    return sum / arr.length
}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(calcAverage(totals));

*/

