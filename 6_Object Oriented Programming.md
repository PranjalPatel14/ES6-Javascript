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
    