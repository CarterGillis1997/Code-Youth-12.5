// https://dog.ceo/api/breeds/image/random

// https://mhw-db.com/monsters use q={} to search

// https://api.dictionaryapi.dev/api/v2/entries/en/hello

fetch("./data.json")
.then(response=>response.json())
.then(resp=>{
    console.log(resp)
    console.log(resp.name)
    console.log(resp.food)
})

fetch("./array.json")
.then(response=>response.json())
.then(resp=>{
    console.log(resp)
})

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/wow")
.then(response=>response.json())
.then(resp=>{
    console.log(resp)
})

fetch("https://dog.ceo/api/breeds/image/random")
.then(response=>response.json())
.then(resp=>{
    console.log(resp)

    let image = document.createElement("img");
    image.src = resp.message;

    document.body.appendChild(image)
})


async function myFunction(){
    console.log("Hello")
    let value = await waitForMe();
    console.log(value)
    console.log("wow")

    let myData = await getData()
    console.log(myData)
}
myFunction()

async function waitForMe(){
    return 5 + 10;
}

async function getData(){
    return new Promise(function(resolve, reject){
        fetch("https://jsonplaceholder.typicode.com/posts?_delay=5005")
        .then(response=>response.json())
        .then(resp=>{
            resolve(resp);
        })
    })
}


async function trigger(){
    let data = await timedFunction();
    console.log(data)
}

async function timedFunction(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("hello");
        }, 3000)
    })
}

trigger()