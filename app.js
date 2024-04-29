// String
"String"
'String'

// Integer
80
40

// Float
10.5
20.1
45.5856516547865

// Boolean
true
false

// Other
undefined
NaN
null

console.log(4)
console.log(5)
console.log("String")
console.log(true)
console.log(undefined)
console.log(NaN)
console.log(null)

// Variables

let myVariable = "Hello";

console.log(myVariable)

let myNumber = 50;

console.log(myNumber)

console.log("50")
console.log(50)
console.log(50 == 50)
console.log("50" === 50)

let myVariable1 = 10;
let myVariable2 = 20;

// Functions

function myFunction(){
    console.log("HELLO")
}

myFunction()
myFunction()
myFunction()

function helloFunction(){
    console.log("hello");
    console.log("howdy")
    console.log("Hi")
}

helloFunction()
helloFunction()
helloFunction()

// Returning functions

function addition(num1, num2){
    let value = num1 + num2;
    return value    
}

addition(45, 50);
addition(20, 4);

let apples = 50;
console.log("Number of apples", apples)

apples = 10;

console.log("Number of apples", apples)

function subtraction(num1, num2){
    let value = num1 - num2;
    return value;
}

let myValue = subtraction(60, 20);
console.log("myValue =", myValue)

let myValue2 = addition(60, 20);
console.log(myValue2)