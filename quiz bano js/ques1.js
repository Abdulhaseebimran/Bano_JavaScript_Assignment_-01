// const reverseString = require('./reverseString');

console.log(reverseString("HELLO"));

function reverseString (value) {
    let reversed = "";
    for(let i =value.length - 1 ; i >=0; i--){
        reversed += value.charAt(i);
    }
    return reversed;
}

console.log(reverseString());