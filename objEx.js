// Using this object, console.log each value
let myObj = {
    key_1:"Hello",
    key_2:"Howdy"
}
console.log(myObj.key_1, myObj.key_2)
console.log(Object.values(myObj))

// Add a third key to myObj using dot notation
myObj.key_3 = "Hi"

console.log(myObj)

// Using a for loop add seven more keys to the following object
let numberObj = {
    key_1:10,
    key_2:20,
    key_3:30
}

for(let i = 4; i < 11; i++){
    numberObj["key_" + i] = i * 10
}

console.log(numberObj)


// Console.log the definition of hello
let hello = {
    "partOfSpeech": "verb",
    "definitions": {
        "definition": "To greet with 'hello'.",
        "synonyms": [],
        "antonyms": []
      }
}

console.log(hello.definitions.definition)
console.log(Object.values(hello.definitions)[0])