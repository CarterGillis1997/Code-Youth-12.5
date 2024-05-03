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

fridge.checkItems()

fridge.addItems(["Orange"])

fridge.checkItems()

fridge.removeItems(["Cheese"]);

fridge.checkItems()