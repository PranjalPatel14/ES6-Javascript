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

## 7. Repeat a String Repeat a String
    function repeatStringNumTimes(str, num) {
    let b = "";
    for(let i=0;i<num;i++){
        b += str;
    }
    return b;
    }

    const a = repeatStringNumTimes("abc", 3);
    console.log(a);

## 8. Truncate a String
    function truncateString(str, num) {
    if(str.length > num){
        return str.slice(0,num) + "..."
    }
    else{
        return str
    }
    }

    truncateString("A-tisket a-tasket A green and yellow basket", 8);

## 9. Finders Keepers
    function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
        return num;
        }
    }

    return undefined;
    }

    findElement([1, 2, 3, 4], num => num % 2 === 0);

## 10. Boo who
    function booWho(bool) {
    if(bool === true || bool === false){
        bool = true;
        return bool;
    }else{
        bool = false;
        return bool;
    }
    }

    booWho(null);

## 11. Title Case a Sentence
    function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for(let st in newTitle){
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
    }

    titleCase("I'm a little tea pot");

## 12. Slice and Splice
    function frankenSplice(arr1, arr2, n) {
    let arr1_len = arr1.length;
    let arr2_len = arr2.length;
    let tot_len = arr1_len + arr2_len;
    let localArray = arr2.slice();
    for(let i=0;i<arr1.length;i++)
    {
        localArray.splice(n,0,arr1[i]);
        n++;
    }
    return localArray;
    }

    console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

## 13. Falsy Bouncer
    function bouncer(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) filteredArr.push(arr[i]);
    }
    return filteredArr;
    }

    console.log(bouncer([7, "ate", "", false, 9]));

## 14. Where do I Belong
    function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }

    return arr.length;
    }

    console.log(getIndexToIns([40, 60], 50));

## 15. Mutations
    function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
    }
    mutation(["hello", "hey"]);

## 16. Chunky Monkey
    function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
    }
    console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));