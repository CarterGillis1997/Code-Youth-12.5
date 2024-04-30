// Create an array that has these datatypes in it. String, Integer, Float, Boolean
let multiArray = ["hello", 4, 5.5, true]

// The .trim() method is used to remove spaces from the start and end of a string (ex: " hello " -> "hello"). Using a for loop trim every element in this array
let wordArray = [" Hello","  World ", " !!! "];
for(let i = 0; i < wordArray.length; i++){
    wordArray[i] = wordArray[i].trim()
}
console.log(wordArray)

// find the largest number in the following array and console.log it
let numberArray = [4,25,74,8,41,23,64];

let largest = 0;
for(let i = 0; i < numberArray.length; i++){
    if(numberArray[i] > largest){
        largest = numberArray[i]
    }
}
console.log(largest)

console.log(Math.max(...numberArray))

// Add every name from the pending array to the banned array. Make sure the pending array is empty after adding everyone
let banned = ["Womby", "Brimtha", "Jurimo"];
let pending = ["Dormfus", "Wingon"];

// for(let i = 0; i < pending.length; i++){
//     banned.push(pending[i])
// }
// console.log(banned)
// pending = [];
// console.log(pending)
banned.push(...pending)


console.log(banned)
console.log(...banned)
/*
Create a 2d array to represent this:
011
101
100
*/
let twoDArray = [
    [0,1,1],
    [1,0,1],
    [1,0,0]
]
console.log(twoDArray);

// Write a function that takes a sentence as an argument and returns an array of each word. ex: "Hello how are you" returns ["Hello","how","are","you"]. Use google to find how to split a string into an array
function arraySentence(sentence){
    let theArray = sentence.split(" ")
    return theArray;
}

let array = arraySentence("Hello how are you");
console.log(array)

console.log(arraySentence("Howdy wow"))