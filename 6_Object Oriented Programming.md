## 1. Create a Basic JavaScript Object
    let dog = {
    name: "Oreo",
    numLegs: 4
    };

## 2. Use Dot Notation to Access the Properties of an Object
    let dog = {
    name: "Spot",
    numLegs: 4
    };
    // Only change code below this line
    console.log(dog.name);
    console.log(dog.numLegs);

## 3. Create a Method on an Object
    let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has "+dog.numLegs+" legs.";}
    };

    dog.sayLegs();

## 4. Make Code More Reusable with the this Keyword
    let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
    };
    dog.sayLegs();

## 5. Define a Constructor Function
    function Dog(){
    this.name= "Oreo";
    this.numLegs= 5;
    this.color= "White";
    }

## 6. Use a Constructor to Create Objects
    function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
    }
    let hound = new Dog();
    console.log(hound.name );
    console.log(hound.name);

## 7. Extend Constructors to Receive Arguments
    function Dog(name ,color) {
    this.numLegs = 4;
    this.name = name;
    this.color = color;

    }

    let terrier = new Dog("Oreo", "White");

## 8. Verify an Object's Constructor with instanceof
    function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
    }

    // Only change code below this line
    let myHouse = new House(2);
    myHouse instanceof House;

## 9. Understand Own Properties
    function Bird(name) {
    this.name = name;
    this.numLegs = 2;
    }
    let canary = new Bird("Tweety");
    let ownProps = [];
    for(let property in canary){
    if(canary.hasOwnProperty(property)){
        ownProps.push(property);
    }
    }

    console.log(ownProps);

## 10. Use Prototype Properties to Reduce Duplicate Code
    function Dog(name) {
    this.name = name;
    }
    Dog.prototype.numLegs = 2;
    let beagle = new Dog("Snoopy");

## 11. Iterate Over All Properties
    function Dog(name) {
    this.name = name;
    }

    Dog.prototype.numLegs = 4;

    let beagle = new Dog("Snoopy");

    let ownProps = [];
    let prototypeProps = [];

    // Only change code below this line

    for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
        ownProps.push(property);
    } else{
        prototypeProps.push(property);
    }
    }

## 12. Understand the Constructor Property
    function Dog(name) {
    this.name = name;
    }
    function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
        return true;
    } else{
        return false;
    }
    }

## 13. Change the Prototype to a New Object
    function Dog(name) {
    this.name = name;
    }

    Dog.prototype = {
    // Only change code below this line
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function(){
        console.log("My name is "+ this.name);
    }
    };

## 14. Remember to Set the Constructor Property when Changing the Prototype 
    function Dog(name) {
    this.name = name;
    }

    // Only change code below this line
    Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
    };

    Dog.constructor === Object;

## 15. Understand Where an Object’s Prototype Comes From
    function Dog(name) {
    this.name = name;
    }
    let beagle = new Dog("Snoopy");
    Dog.prototype.isPrototypeOf(beagle);

## 16. Understand the Prototype Chain
    function Dog(name) {
    this.name = name;
    }
    let beagle = new Dog("Snoopy");
    Dog.prototype.isPrototypeOf(beagle);  
    Object.prototype.isPrototypeOf(Dog.prototype);

## 17. Use Inheritance So You Don't Repeat Yourself
    function Cat(name) {
    this.name = name;
    }

    Cat.prototype = {
    constructor: Cat,
    };

    function Bear(name) {
    this.name = name;
    }

    Bear.prototype = {
    constructor: Bear,
    };

    function Animal() { }

    Animal.prototype = {
    constructor: Animal,
    eat: function(){
        console.log("nom nom nom");
    }
    };

## 18. Inherit Behaviors from a Supertype
    function Animal() { }

    Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
    };
    let duck = Object.create(Animal.prototype);
    let beagle = Object.create(Animal.prototype); 