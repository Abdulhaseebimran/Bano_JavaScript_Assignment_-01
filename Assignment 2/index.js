// Assignment 2

// Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

function takesArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum = sum + arr[i];
        }
    }
    return sum
}
const arr = [2, 9, 4, 5, 43, 3];
const result = takesArray(arr);
console.log(result);

// Write a function that takes a string as input and returns the number of vowels in the string.

function countVowels(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (str[i] == vowel[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

console.log("Vowels are " + countVowels("Hello World!"));

// Write a function that takes an array of strings as input and returns the length of the longest string in the array.

function findStringLength(string) {
    let stringLength = string[0].length;

    for (let i = 1; i < string.length; i++) {
        if (string[i].length > stringLength) {
            stringLength = string[i].length;
        }
    }
    console.log("Max string length is " + stringLength);
}

let strings = ["Hello", "Welcome", "Haseeb"];

findStringLength(strings);

// Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

function average(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum / num.length;
}

let average2 = average([1, 2, 3, 4, 5]);
console.log(average2);

// Write a function that takes an object as input and returns an array of all the keys in the object.

function findKeys() {
    let person = {
        name: "Abdul Haseeb Imran",
        age: 20,
        id: 109,
        country: "Pakistan",
    };

    return Object.keys(person);
}

console.log(findKeys());

// Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.

function objectKeyValues(person) {
    let names = [];

    for (let i = 0; i < person.length; i++) {
        names.push(person[i].name);
    }

    return names;
}

let person = [
    { name: "Abdul Haseeb", age: 20 },
    { name: "Ammar", age: 20 },
    { name: "Bilal", age: 20 },
];

const result1 = objectKeyValues(person);
console.log(result1);

// Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.

function getUniqueStrings(array) {
    let uniqueStrings = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueStrings.indexOf(array[i]) === -1) {
            uniqueStrings.push(array[i]);
        }
    }
    return uniqueStrings;
}

let fruits = ["apple", "orange", "banana", "orange", "pear", "apple"];
let uniqueFruit = getUniqueStrings(fruits);
console.log(uniqueFruit);

// Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.

function getProduct(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product = product * array[i];
    }
    return product;
}

let number = [2, 4, 5, 6];
let product = getProduct(number);
console.log(product);
