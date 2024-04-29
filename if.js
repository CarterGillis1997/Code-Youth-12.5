let timer;
console.log(50 == 50)
console.log(50 == 60)
console.log(50 == "50")
console.log(50 === "50")

console.log(false == 0)
console.log(true === true)

console.log(5 < 10)
console.log(5 > 10)

console.log(5 <= 10)
console.log(5 <= 5)
console.log(5 < 5)
console.log(5 > 5)

console.log(5 != 5)
console.log(5 != 10)

console.log(5 !== "5");

if(50 == 50){
    console.log("fifty equals fifty")
}

if(50 == 60){
    console.log("fifty equals sixty")
}

if("hello" == "hello"){
    console.log("hello equals hello")
}

if(5 == 6){
    console.log("five eqauls six")
}else if(5 == 5){
    console.log("five equals five")
}else if(10 == 10){
    console.log("ten equals ten")
}

if("hello" == "hell0"){
    console.log("hell0")
}else if("howdy" == "hello"){
    console.log("howdy")
}else{
    console.log("HI")
}

let myNum = 50;

if(myNum == 50){
    console.log("myNum = 50")
}

// For loops

for(let i = 0; i < 10; i++){
    console.log("hello")
}

for(let i = 0; i <= 10; i++){
    console.log(i * 2)
}

for(let i = 0; i <= 50; i+=10){
    console.log(i)
}

function loopFunction(){
    for(let i = 0; i < 5; i++){
        console.log("I am in the function")
    }
}

loopFunction()
loopFunction()

function increase(num){
    num++
    return num;
}
function decrease(num){
    num--;
    return num;
}

let number1 = 0;

function increaseOrDecrease(mode){
    if(mode == "increase"){
        number1 = increase(number1);
    }else if(mode == "decrease"){
        number1 = decrease(number1);
    }
    console.log(number1)
}

increaseOrDecrease("increase")
increaseOrDecrease("increase")
increaseOrDecrease("increase")
increaseOrDecrease("increase")

increaseOrDecrease("decrease")

for(let i = 0; i < 10; i++){
    increaseOrDecrease("increase")
}

function howdyFunction(){
    console.log("howdy")
}

timer = setTimeout(howdyFunction, 5000);

// clearTimeout(timer)

let outerVariable = "five"

function a(){
    console.log(outerVariable)
    let innerVariable = "ten";
    console.log(innerVariable)

}

function b(){
    let float = 4.5
    for(let i = 0; i < 10; i++){
        console.log(float)
    }
}

a()
b();

function c(){
    console.log("C IS RUNNING !!!!!")
}

c()