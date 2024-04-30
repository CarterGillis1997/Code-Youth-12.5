let user = {
    name:"Carter",
    age:26
}

console.log(user)

console.log(user.name)
console.log(user.age)

console.log(user.name , user.age)

let person = {
    name:"Jurimo",
    age:29,
    location:{
        country:"Canada",
        province:"Ontario"
    },
    bank:[19.99, 5.99, 10.10, 5.99]
}

console.log(person)
console.log(person.location)
console.log(person.location.province)

console.log(person.bank)
console.log(person.bank[1])

person.lastName = 'Datatag'
person.loggedIn = false
person.name = "Carter"

console.log(person)

console.log(person["age"])

let lookingFor = "name";

lookingFor = "bank"

console.log(person[lookingFor])

person["money"] = 10.99;

console.log(person);

let numbers = {
    key_0:0,
    key_1:1,
    key_2:2
}

console.log(numbers)

for(let i = 3; i < 10; i++){
    console.log("key_" + i)
    numbers["key_" + i] = i
}

console.log(numbers);

console.log(person)

console.log(Object.keys(person))

console.log(Object.values(person))

let arrayObjects = [
    {
        name:"jurimo",
        age:29
    },
    {
        name:"Carter",
        age:26
    }
]

console.log(arrayObjects)
console.log(arrayObjects[0])
console.log(arrayObjects[1])

console.log(arrayObjects[0].name)

// .find and .filter
let store = [
    {
        name:"Potato Chip",
        id:475,
        price:5.99
    },
    {
        name:"Skateboard",
        id:326,
        price:10.99
    },
    {
        name:"Apple",
        id:774,
        price:2.99
    },
    {
        name:"Television",
        id:46,
        price:399.99
    }
]

let apple = store.find(function(element){
    if(element.name == "Apple"){
        return element;
    }
})

console.log(apple)

let tv = store.find(function(element){
    if(element.name == "Television"){
        return element;
    }
})

console.log(tv)

let skateboard = store.find(function(element){
    if(element.id == 326){
        return element;
    }
})

console.log(skateboard)

let chip = "";
for(let i = 0; i < store.length; i++){
    if(store[i].name == "Potato Chip"){
        chip = store[i]
    }
}

console.log(chip)

let under50 = store.filter(function(element){
    if(element.price < 50){
        return element;
    }
})

console.log(under50)