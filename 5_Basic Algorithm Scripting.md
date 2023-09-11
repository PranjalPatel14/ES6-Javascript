##  1. Convert Celsius to Fahrenheit
    function convertCtoF(celsius){
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
    }

    convertCtoF(30);

## 2. Reverse a String
    function reverseString(str) {
    var splitString = str.split("");

    let reverse_string = splitString.reverse();

    let joinArray = reverse_string.join("");
    return joinArray;
    }

    reverseString("hello");

## 3. Factorialize a Number
    function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
    }

    factorialize(5);

## 4. Find the Longest Word in a String
    function findLongestWordLength(str) {
    let longestlength = 0;
    let currentlength = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
        if (currentlength > longestlength) {
            longestlength = currentlength;
        }
        currentlength = 0;
        } else {
        currentlength++;
        }
    }
    if (currentlength > longestlength) {
        longestlength = currentlength;
    }
    return longestlength;
    }

    const longestWordLength = findLongestWordLength("The quick brown fox jumped over the lazy dog");
    console.log(longestWordLength);

## 5. Return Largest Numbers in Arrays
    function largestOfFour(arr) {
    let highestNumbers = []

    for(let i=0;i<arr.length;i++){
        let highestinsubarray = arr[i][0];

        for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]>highestinsubarray){
            highestinsubarray = arr[i][j];
        }
        }
        highestNumbers.push(highestinsubarray);
    }
    return highestNumbers;
    }
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

## 6. Confirm the Ending
    function confirmEnding(str, target) {
    const check = str.slice(-target.length);
    return check === target;
    }

    const a = confirmEnding("Bastian", "n");
    console.log(a);
