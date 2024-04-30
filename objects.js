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