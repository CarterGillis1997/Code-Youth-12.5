let helloArray = ["hello", "howdy", "hi"]
console.log(helloArray)

let numberArray = [5, 42, 34, 2]

console.log(numberArray)

console.log(numberArray[2])

let mixedArray = ["hello", 4, true, 5.5]

console.log(mixedArray)

let newArray = [5, 2, 3];

newArray.push(10)

console.log(newArray)

newArray.push(20, 41, 6)

console.log(newArray)

newArray.pop();

console.log(newArray)

let lastItem = newArray.pop();

console.log(lastItem)

console.log(newArray)

console.log(newArray[2])
console.log(newArray.at(-1))
console.log(newArray[newArray.length - 1])

let loopArray = ["hello", "wow", "howdy"];
console.log(loopArray)

for(let i = 0; i < loopArray.length; i++){
    console.log(loopArray[i])
}

let addArray = [5, 20, 4];
for(let i = 0; i < addArray.length; i++){
    console.log(addArray[i] + 5)
}

let letters = ["A","B","C",'D'];

for(let i = 0; i < letters.length; i++){
    console.log(letters[i])
}