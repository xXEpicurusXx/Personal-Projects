/*
// Playing around with variables in JS

let js = 'amazing';

let math = 40 + 8 + 23 - 10;
var math2 = 40 + 8 + 23 - 10;

console.log(math);
console.log(math2);

// These variables are called primative value types
let firstName = "Cameron"
let age = 32
let PI = 3.14
let myCountry = "United States of America"
let myCurrentCounty = "Japan"

// Object value type example
let me = {
    name: "Cameron"
}

// Logging output to the console with console.log;
console.log(23);
console.log(firstName);
console.log(PI)
console.log("My country of origin is " + (myCountry) + ".");
console.log("However, I currently live in " + (myCurrentCounty) + ".");
console.log("My name is " + (firstName) + " and I am " + (age) + " years old!");

console.log(me)

console.log(23 * 2.234243)


// Data type exapmples in JavaScript
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "jonas");
console.log(23);

let javaScriptIsFun = true;
console.log("The type of value stored in javaScriptIsFun before the change is: " + typeof javaScriptIsFun);
console.log("This is value for the variable javaScriptIsFun before changing it:" + (javaScriptIsFun));

javaScriptIsFun = "Yes";

console.log("The type of value stored in javaScriptIsFun after the change is: " + typeof javaScriptIsFun);
console.log("This is value for the variable javaScriptIsFun after changing it:" + (javaScriptIsFun));

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


// reassigning a variable value is called "mutating a variable"
var age;
console.log(age);

age = 32;
console.log(age);

const firstName = undefined;

console.log(firstName);

// example of constant variables
// firstName = "Cameron"; This will prduce an error becasue the variable is constant and immutable!
// console.log(firstName);     This will prduce an error becasue the variable is constant and immutable!


// Examples of assignment Operators

const now = 2037;
const ageCameron = now - 1991; // age is 46
const ageSeura = now - 2019; //age is 18

const seuraBirthYear = 2019;
console.log(ageCameron, ageSeura);

console.log(now - seuraBirthYear);

console.log(ageCameron * 2, ageSeura / 10, 2 ** 3);

const firstName = "Cameron";
const lastName = "Mckeel";
console.log(firstName + " " + lastName);

// Examples of math Operators

let x = 10 + 5;
console.log(x);

x += 10;
console.log(x);

x *= 4;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

// Examples of comparison Operators

console.log(ageCameron > ageSeura);        // ageSeura on line 84
console.log(ageCameron < ageSeura);
console.log(ageCameron >= ageSeura);
console.log(ageCameron <= ageSeura);
console.log(ageCameron >= 20);             // ageCameron on line 83
console.log(ageCameron <= 20);

const isFullAge = ageSeura >= 17;
console.log(now - 1991 > now - 2019);
console.log(now - 2019 > now - 1991);


// To understand this, go to developer.mozilla.org
// I think this is the Javascript documentation?
const now = 2037;
const ageCameron = now - 1991; // age is 46
const ageSeura = now - 2019; //age is 18

console.log(now - 1991 > now - 2019);
console.log(now - 2019 > now - 1991);

console.log(25 - 10 - 5);
console.log(5 - 10 - 25);

let x, y;
x = y = 25 - 10 - 5; //10, 10   runs right to left
//so y = 10 and then x = y. understand?

console.log(x, y);

x = 66; //mutated varable after the fact becasue the code runs from top to bottom.
console.log(x, y); //66,10 

// PEMDAS applies
const averageAge = (ageCameron + ageSeura) / 2; //(46 + 18) = 64 / 2 = 32
console.log(averageAge);


//BMI calculator coding challenge #1

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark);
console.log(bmiJohn);
console.log(markHigherBMI);

//could have dont this too:
console.log(bmiMark, bmiJohn, markHigherBMI);

// You could have also used const instead of let (understand the difference)



const firstName = "Cameron";
const job = "computer programmer";
const birthYear = 1991;
const year = 2023;

const cameron = "I am " + firstName + ", a " + (year - birthYear) + " year old " + (job) + "!!";

const cameronNew = `I am ${firstName}, a ${year - birthYear} year old ${job}!!`

console.log(cameron);
console.log(cameronNew);

console.log(`You can use backticks instead of quotes so you dont have \n\ to think about which to use all the time!`)

console.log(`You can use backticks to   
write multiple lines without using the 
"/n" and it works just fine!`);



//if /　else statements
const age = 15;
const birthYear = 1991;
let century;


if (age >= 18) {
    console.log(`Sarah can start driving license.`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah cannot start drivers license. Wait another ${yearsLeft} years.`)
}

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



//BMI calculator coding challenge #2

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark);
console.log(bmiJohn);

if (bmiMark <= bmiJohn) {
    console.log("John's BMI is higher than Mark's.");
} else {
    console.log("Mark's BMI is higher than John's.")
}

if (bmiMark <= bmiJohn) {
    console.log(`The BMI of John is ${bmiJohn} and it is grearter than Mark's BMI.`)
} else {
    console.log(`The BMI of Mark is ${bmiMark} and it is greater than John's BMI.`)
}



//Type Conversion and Coersion

//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear)); //this converted it to an Int 

//The original avalue didnt change for this log
console.log(inputYear + 18); // original outpuit was 199118

console.log(Number(inputYear) + 18); //answer worked and was 2009

console.log(Number('jonus')); //You get NaN or Not a Number but the type is still number
console.log(typeof NaN);

console.log(String(23), 23); //this converted the type to String; second number is a Number

//Type Coercion
console.log('I am ' + 32 + ' years old.'); //this converted 32 to a string automatically 
console.log('I am ' + (String(32)) + ' years old.'); //exzample of how i do it in Python

console.log('23' - '10' - 3); //example of how it converted strigns to numbers
console.log('23' * '2');

let n = '1' + 1; //changed the number to a string and then concatinated
n = n - 1;
console.log(n); //answer is 10 because the original number was concatinated to 11


// There are 5 falsy values: 0, '', undefined, null, NaN
// so basically they always get a False value
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean('Cameron'));
console.log(Boolean({}));

const money = 0;

if (money) {
    console.log(`Dont spend your money!`);
} else {
    console.log(`You should get a job!`);
};

let height;
if (height) {
    console.log(`yay height is defined!`)
} else {
    console.log(`height is UNDEFINED!`)
}



// equality operators

const age = 18;
if (age === 18) {
    console.log(`strict`);
    console.log(`The person is an adult!`);
}

// = is assignment
// == is kinda strict but does perform type coercion; avoid as much as possible
// === is strict, meaning exact or something like that, does not perform type coercion

if (age == '18') {
    console.log(`loose`);
    console.log("you are an adult!");
}

//getting an input from user
const favorite = prompt(`What is your favorite number?`);

if (favorite == 23) {
    console.log(`${favorite} is a great number!`);
} else if (favorite == 88) {
    console.log(`${favorite} is also a great number but is not 23..`);
} else {
    console.log(`Your number sucks!`)
}

//!== is the strict version of not operator
// != is the loose version of not operator

// this will print to the console becasue 44 and '44' are different types
if (favorite !== 44) console.log(`why not 44? (This was the first propmt)`);  //Prompted was defined as a string; try it 

// This wont log to console because the type has been changed to a number
if (Number(favorite != 44)) console.log(`why not 44?`);



// and or not operators

const hasDriversLicense = true; //variable a
const hasGoodVision = true; //variable b

console.log(hasDriversLicense && hasGoodVision) //&& AND operator
console.log(hasDriversLicense || hasGoodVision) // || OR operator
console.log(!hasDriversLicense) //! NOT operator

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log(`Sarah is able to drive.`);
// } else {
//     console.log(`Someone else should drive.`)
// }

const isTired = false; //variable c

console.log(hasDriversLicense || hasGoodVision || isTired) // || OR operator
console.log(hasDriversLicense && hasGoodVision && isTired) // || OR operator

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive.`);
} else {
    console.log(`Someone else should drive.`)
}

// Coding Challege #3

const averageDolphins = (96 + 108 + 89) / 3
const averageKoalas = (88 + 91 + 110) / 3

console.log(scoreDolphins);
console.log(scoreKoalas);

const scoreDolphins = averageDolphins
const scoreKoalas = averageKoalas

if (scoreDolphins > averageKoalas) {
    console.log(`Dolphins win the trophy!`)
} else if (scoreKoalas > scoreDolphins) {
    console.log(`Koalas win the trophy!`)
} else {
    console.log(`Both win the trophy!`)
}

//Bonus 1

// const averageDolphins = (97 + 112 + 101) / 3
// const averageKoalas = (109 + 95 + 106) / 3

const averageDolphins = (96 + 108 + 89) / 3
const averageKoalas = (88 + 91 + 110) / 3

const scoreDolphins = averageDolphins
const scoreKoalas = averageKoalas

console.log(scoreDolphins);
console.log(scoreKoalas);



if (scoreDolphins > averageKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win the trophy!`)
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`Koalas win the trophy!`)
} else {
    console.log(`No one wins the trophy!`)
}


//Switch Statements

const day = 'Friday';

switch (day) {
    case 'Monday': //basically day === 'Monday'
        console.log('Plan course structure.');
        console.log("Go to coding meetup.");
        break;
    case 'Tuesday':
        consolelog('Prepare theory videos.');
        break;                                  //remove break here to see what happens
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples.');
        break;
    case 'Friday':
        console.log('Record Videos.');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day.')
}

// It asked me to do this as in if/ else statment but i know that would be a 
// pain in the ass so i didnt do it. I do understand it though. 

// Expression is a line of code that produces a value. 
// Statement is a combinations of functions within the code that takes 
// Expressions and does someting with them. Does not produce a value. 


//Conditional Operator

const age = 32;

age >= 18 ? console.log(`I like to drink Whiskey.`) :
    console.log(`I like to drink water.`);

// this is the same as writing an if / else statement
// can only take a single condition
// true then : false then

const drink = age >= 18 ? 'Whiskey' : 'Water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'Water';
}
console.log(drink2);

console.log(`Because I am ${age} years old, I like to drink ${age >= 18 ? 'Whiskey' : 'Water'}.`);



//Coding Challenge #4

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .2
// const tip = bill * .15;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value was $${bill + tip}.`);


*/