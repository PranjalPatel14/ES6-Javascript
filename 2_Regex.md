# Regular Expressions

A brief description of what this project does and who it's for


## 1. Using the Test Method
    let myString = "Hello, World!";
    let myRegex = /Hello/;
    let result = myRegex.test(myString); // Change this line

## 2. Match Literal Strings
    let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
    let waldoRegex = /Waldo/; // Change this line
    let result = waldoRegex.test(waldoIsHiding);

## 3. Match a Literal String with Different Possibilities
    let petString = "James has a pet cat.";
    let petRegex = /dog|cat|bird|fish/; // Change this line
    let result = petRegex.test(petString);

## 4. Ignore Case While Matching
    let myString = "freeCodeCamp";
    let fccRegex = /freeCodeCamp/i; // Change this line
    let result = fccRegex.test(myString);

## 5. Extract Matches
    let extractStr = "Extract the word 'coding' from this string.";
    let codingRegex = /coding/;
    let result = extractStr.match(codingRegex);