
## 1.Use an Array to Store a Collection of Data
    let yourArray= ['one','two',true,1,2]; // Change this line

## 2.Access an Array's Contents Using Bracket Notation
    let myArray = ["a", "b", "c", "d"];
    myArray[1] = "anything we want";
    console.log(myArray);

## 3.Add Items to an Array with push() and unshift()
    function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
    }

    console.log(mixedNumbers(['IV', 5, 'six']));

## 4.Remove Items from an Array with pop() and shift()
    function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
    }
    console.log(popShift(['challenge', 'is', 'not', 'complete']));

## 5.Remove Items Using splice()
    const arr = [2, 4, 5, 1, 7, 5, 2, 1];
    arr.splice(1,4);
    console.log(arr);

## 6.Add Items Using splice()
    function htmlColorNames(arr) {
    arr.splice(0,2,'DarkSalmon',   'BlanchedAlmond');
    return arr;
    }

    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

## 7.