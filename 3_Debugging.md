
# Debugging

## 1.Use the JavaScript Console to Check the Value of a Variable
    let a = 5;
    let b = 1;
    a++;
    // Only change code below this line

    let sumAB = a + b;
    console.log(a);

## 2.Understanding the Differences between the freeCodeCamp and Browser Console
    let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
    console.log(output);
    console.clear();

## 3.Use typeof to Check the Type of a Variable
    let seven = 7;
    let three = "3";
    console.log(seven + three);
    // Only change code below this line
    console.log(typeof seven);
    console.log(typeof three);  

## 4.Catch Misspelled Variable and Function Names
    let receivables = 10;
    let payables = 8;
    let netWorkingCapital = receivables - payables;
    console.log(`Net working capital is: ${netWorkingCapital}`);

## 5.Catch Unclosed Parentheses, Brackets, Braces and Quotes
    let myArray = [1, 2, 3];
    let arraySum = myArray.reduce((previous, current) =>  previous + current);
    console.log(`Sum of array values is: ${arraySum}`);

## 6.Catch Mixed Usage of Single and Double Quotes
    let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
    console.log(innerHtml);

## 7.Catch Use of Assignment Operator Instead of Equality Operator
    let x = 7;
    let y = 9;
    let result = "to come";

    if(x == y) {
    result = "Equal!";
    }else{
    result = "Not equal!";
    }

    console.log(result);

## 8.Catch Missing Open and Closing Parenthesis After a Function Call
    function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
    }

    let result = getNine();
    console.log(result);
    
## 9.Catch Arguments Passed in the Wrong Order When Calling a Function
    function raiseToPower(b, e) {
    return Math.pow(b, e);
    }

    let base = 2;
    let exp = 3;
    let power = raiseToPower(base, exp);
    console.log(power); 

## 10.Catch Off By One Errors When Using Indexing   
    function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Fix the line below
    for (let i = 0; i < len; i++) {
    // Do not alter code below this line
    console.log(firstFive[i]);
    }
    }

## 11.Use Caution When Reinitializing Variables Inside a Loop
    function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
    let row = []; /* <-----  row has been declared inside the outer loop. 
    Now a new row will be initialised during each iteration of the outer loop allowing 
    for the desired matrix. */
    for (let j = 0; j < n; j++) {
        row.push(0);
    }
    newArray.push(row);
    }
    return newArray;
    }
    let matrix = zeroArray(3, 2);
    console.log(matrix);

## 12.Prevent Infinite Loops with a Valid Terminal Condition
    function myFunc() {
        for (let i = 2; i <= 4; i += 2) {
        console.log("Still going!");
        }
    }