// POP UP PROMPT ONLOAD


function myPrompt(person){
    let text;
    let person = prompt("Please enter your name:", "");
    
    if (person == null || person == "") {
        text = "Invalid.";
    }
    else {
        text = "Hello " + person + "! Welcome.";
    }

    document.getElementById("showText").innerHTML = text;
}

//TEST FUNCTION
myPrompt.prototype.greet = function {
    document.getElementById("showText").innerHTML = "Your name is " + person + ".";
}


//PREVIOUS FUNCTIONS

function Animal(name, breed){
    this.name = name;
    this.breed = breed;
}
Animal.prototype.greet = function(){
    document.getElementById("showText").innerHTML = ("This is " + this.name + " and they are a " + this.breed);
}

// DOG
function Dog(name, breed){
    Animal.call(this, name, breed);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function(){
    document.getElementById("showText").innerHTML = "Woof!";
}

// CAT
function Cat(name, breed){
    Animal.call(this, name, breed);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.meow = function(){
    document.getElementById("showText").innerHTML = "Meow!";
}

const myDog = new Dog("Buddy", "Labrador");
const myCat = new Cat("Muning", "Persian");

