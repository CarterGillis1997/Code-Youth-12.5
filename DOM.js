let pTag = document.querySelector("p")
console.log(pTag)


pTag.style = "background-color: blue; color: red; font-size: 50px;";

pTag.innerText = "Goodbye";

let howdy = document.querySelector("#howdy")
console.log(howdy)

howdy.style.color = "blue"

let hi = document.querySelector(".hi")
console.log(hi)

hi.style.color = "green"

let his = document.querySelectorAll(".hi")
console.log(his)

// his[1].style.backgroundColor = "red"

for(let i = 0; i < his.length; i++){
    his[i].style.backgroundColor = 'red'
}

let divs = document.querySelectorAll("div")

console.log(divs);

for(let i = 0; i < divs.length; i++){
    divs[i].style = "height: 50px; width: 50px; border: 1px solid;"
}

let myPTag = document.createElement("p");
console.log(myPTag)
myPTag.innerText = "Howdy how are you"
console.log(myPTag)
myPTag.style.color = "red";
myPTag.style.fontSize = "50px"

document.body.appendChild(myPTag)



// divs[0].appendChild(divP)

for(let i = 0; i < divs.length; i++){
    let divP = document.createElement("p");
    divP.innerText = "Hello World";
    divs[i].appendChild(divP)
}

let theButton = document.querySelector("#submit");
theButton.remove()

// document.body.innerHTML = ''

