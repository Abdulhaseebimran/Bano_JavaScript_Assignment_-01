// Declare a variable called “age” and assign it a value of 25. Convert the value of age to a string data type and store it in a new variable called “ageAsString”.

// Question # 01

// Answer
let age = 25;

let ageAsString = String(age);

console.log("Your age is : ", age);

console.log("The type of age is : ", typeof age);

console.log("The type of age As String is : ", typeof ageAsString);

// Create a program that prompts the user to enter a number and then checks whether that number is even or odd. Display the result to the user using an alert box.

// Question # 02

// Answer
let number = prompt("Enter Number : ");

if (number % 2 == 0) {
    alert(number + "This is even Number");
} else {
    alert(number + "This is odd Number");
}

// Declare a variable called “temperature” and assign it a value of 72. Convert the temperature to Celsius and store the result in a new variable called “celsius”. Display the value of celsius to the console.

// Question # 03

// Answer
let temperature = 72;

let celsius = ((temperature - 32) * 5) / 9;

console.log("Temperature convert into celsius is  : " + celsius);

// console.log("The type of the celsius is : " , typeof(celsius));

// Create a program that asks the user to enter their name and age. If the user’s age is greater than or equal to 18, display a message to the console that says “Welcome [name], you are an adult”. If the user’s age is less than 18, display a message that says “Sorry [name], you are not yet an adult”.

// Question # 04

// Answer
let name = prompt("Enter your name : ");

let age_ = prompt("Enter your age : ");

if (age_ >= 18) {
    console.log("Welcome  " + name + ", you are an adult :) ");
} else {
    console.log("Sorry " + name + ", you are not yet an adult");
}

// Declare a variable called “isRaining” and assign it a value of true. Using an if...else statement, display a message to the console that says “Bring an umbrella” if it is raining, and “Leave the umbrella at home” if it is not raining.

// Question # 05

// Answer
let isRaining = true;

let isRaining_ = prompt("It is Raining ? Enter please 'Yes' or 'No' ");


if (isRaining_ == 'Yes') {
    console.log("Bring an umbrella");
} else if (isRaining_ == 'No') {
    console.log("Leave the umbrella at home");
} else {
    console.log("Please Enter Yes or No ?");
}
