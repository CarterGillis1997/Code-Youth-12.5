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