let submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", clickHandle)

function clickHandle(){
    console.log("YOU CLICKED ON THE BUTTON")
    submitButton.style.color = "red"
    submitButton.style.transform = "scale(1.5)"
    console.log(submitButton.getAttribute("id"))
}

let clickMe = document.querySelector("#clickMe");

clickMe.addEventListener("click", function(){
    console.log("WOW YOU DID IT")
})

let boxes = document.querySelectorAll(".box");

for(let i = 0; i < boxes.length; i++){
    boxes[i].style = 'width:100px; height:100px; border: 1px solid;'
    boxes[i].addEventListener("mouseenter", function(){
        console.log("Hello")
        boxes[i].style.backgroundColor = "red"
        boxes[i].innerHTML = "Hovering"
        // boxes[i].addEventListener("mouseleave",function(){
        //     console.log("leaving")
        // })
    })
    boxes[i].addEventListener("mouseleave", function(){
        console.log("leaving")
        boxes[i].style.backgroundColor = "transparent";
        boxes[i].innerHTML = ""
    })
}

let eventButton = document.querySelector("#eventButton");

eventButton.addEventListener("click", function(event){
    console.log(event)
    console.log(event.target)
    console.log(event.pageX)
    console.log(event.pageY)
})

eventButton.addEventListener("contextmenu", function(event){
    console.log("menu opened");
    event.preventDefault()
})

let newButton = document.createElement("button");
newButton.addEventListener("click", buttonHandle);
newButton.innerText = "New Button";

document.body.appendChild(newButton)

function buttonHandle(event){
    console.log(event)
}

