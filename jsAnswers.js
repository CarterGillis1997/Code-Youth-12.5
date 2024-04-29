// Create a variable called name and give it the value of your name
let name = "Carter"

// Create two variables that have number values. console.log the sum of them.
let num1 = 5;
let num2 = 10;
console.log(num1 + num2)

// Create a variable that has the value "hello". Try adding another string to it and console.log the result
let helloVariable = "hello";
let helloVariable2 = "howdy"
console.log(helloVariable + helloVariable2)

// Write a function that will take two numbers and return the sum
function addition(num1, num2){
    return num1 + num2;
}
console.log(addition(10, 20))

// Write an if statement that will check to see if numVariable is less than 10, greater than 10, or equal to ten. Make sure to use console.log to show on the console
let numVariable = 42;
if(numVariable > 10){
    console.log("Greater than ten")
}else if(numVariable < 10){
    console.log("less than ten")
}else{
    console.log("equal to ten")
}

// Write a for loop that counts from 0 to 10. In the console it should look like this 012345678910
let counterString = "";
for(let i = 0; i <= 10; i++){
    counterString += i
}
console.log(counterString)

// Write an if statement that checks if the first letter in a string is a vowel.

let vowelString = "Hello"

console.log(vowelString[0])

if(vowelString[0] == "A" || vowelString[0] == "E" || vowelString[0] == "I"){
    console.log("VOWEL")
}else{
    console.log("CONSTANAT")
}

let vowels = 'AEIOU';

if(vowels.indexOf(vowelString[0]) !== -1){
    console.log("VOWEL")
}else{
    console.log("CONSTANAT")
}