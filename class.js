class Test{
    constructor(){
        // console.log("HELLO")
        this.message = "How are you?";
        this.number = 55
        this.loggedIn = true

        // console.log(this.message)
        // console.log(this)
    }

    showMessage(){
        console.log(this.message)
        return this;
    }

    changeMessage(newMessage){
        this.message = newMessage
        return this;
    }
}

let myClass = new Test();
// myClass.showMessage()

// myClass.changeMessage("Wow so cool!")

// myClass.showMessage()
myClass.showMessage().changeMessage("Wow so cool!").showMessage()

let myClass2 = new Test();
myClass2.showMessage();

class Storage{
    constructor(name, items){
        this.storageName = name;
        this.content = items;
    }

    checkItems = () => {
        console.log("Items in container:", ...this.content)
    }

    addItems = (items) => {
        this.content.push(...items)
    }

    removeItems = (items) => {
        for(let i = 0; i < items.length; i++){
            this.content.splice(this.content.indexOf(items[i]), 1);
        }
    }
}

let fridge = new Storage("Fridge", ["Apple", "Cheese", "Celery"]);

fridge.checkItems();

fridge.addItems(["Orange"])

fridge.checkItems();

fridge.removeItems(["Cheese"]);

fridge.checkItems();


class Car{
    constructor(name, tires, engine, moonRoof, fuelType){
        this.name = name;
        this.specs = {
            tires: tires,
            engine: engine,
            moonRoof: moonRoof,
            fuelType: fuelType
        }
    }

    checkSpecs = () => {
        console.warn(this.name);
        let keys = Object.keys(this.specs)
        for(let i = 0; i < keys.length; i++){
            console.log(keys[i] + ":" + this.specs[keys[i]])
        }
    }
}

let ChevyImpala = new Car("Chevy Impala", 4, "V6", false, "Gas(regular)")

ChevyImpala.checkSpecs();

let HyundaiSantaFe = new Car("Hyundai SantaFe", 4, "V6", true, "Gas(regular)")

HyundaiSantaFe.checkSpecs()

console.log(ChevyImpala)

// Create a class that can be used to track a storage system. It should have three methods inside it. One to add items to storage, One to remove items from storage, and one to get a list of items from storage.
