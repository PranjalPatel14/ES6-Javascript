
## 9.Match Letters of the Alphabet
    let quoteSample = "The quick brown fox jumps over the lazy dog.";
    let alphabetRegex = /[a-z]/gi; // Change this line
    let result = quoteSample.match(alphabetRegex); // Change this line

## 10.Match Numbers and Letters of the Alphabet
    let quoteSample = "Blueberry 3.141592653s are delicious.";
    let myRegex = /[h-s2-6]/ig; // Change this line
    let result = quoteSample.match(myRegex); // Change this line

## 11.Match Single Characters Not Specified
    let quoteSample = "3 blind mice.";
    let myRegex = /[^aeiou^0-9]/gi; // Change this line
    let result = quoteSample.match(myRegex); // Change this line

## 12. Match Characters that Occur One or More Times
    let difficultSpelling = "Mississippi";
    let myRegex = /s+/gi; // Change this line
    let result = difficultSpelling.match(myRegex);

## 13.Match Characters that Occur Zero or More Times
    // Only change code below this line
    let chewieRegex = /Aa*/; // Change this line
    // Only change code above this line
    let result = chewieQuote.match(chewieRegex);

## 14.Find Characters with Lazy Matching
    let text = "<h1>Winter is coming</h1>";
    let myRegex = /<.*?>/; // Change this line
    let result = text.match(myRegex);

## 15.Find One or More Criminals in a Hunt
    let reCriminals = /C+/; // Change this line

## 16.Match Beginning String Patterns
    let rickyAndCal = "Cal and Ricky both like racing.";
    let calRegex = /^Cal/; // Change this line
    let result = calRegex.test(rickyAndCal);

## 17.Match Ending String Patterns
    let caboose = "The last car on a train is the caboose";
    let lastRegex = /caboose$/; // Change this line
    let result = lastRegex.test(caboose);

## 18.Match All Letters and Numbers
    let quoteSample = "The five boxing wizards jump quickly.";
    let alphabetRegexV2 = /\w/g; // Change this line
    let result = quoteSample.match(alphabetRegexV2).length;

## 19.Match Everything But Letters and Numbers
    let quoteSample = "The five boxing wizards jump quickly.";
    let nonAlphabetRegex = /\W/g; // Change this line
    let result = quoteSample.match(nonAlphabetRegex).length;

## 20.Match All Numbers
    let movieName = "2001: A Space Odyssey";
    let numRegex = /\d/g; // Change this line
    let result = movieName.match(numRegex).length;

## 21.Match All Non-Numbers
    let movieName = "2001: A Space Odyssey";
    let noNumRegex = /\D/g; // Change this line
    console.log(movieName.match(noNumRegex).length);

## 22.Restrict Possible Usernames
    let username = "JackOfAllTrades";
    let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    let result = userCheck.test(username);

## 23. Match Whitespace
    let sample = "Whitespace is important in separating words";
    let countWhiteSpace = /\s/g; // Change this line
    let result = sample.match(countWhiteSpace);

## 24. Match Non-Whitespace Characters
    let sample = "Whitespace is important in separating words";
    let countNonWhiteSpace = /\S/g; // Change this line
    let result = sample.match(countNonWhiteSpace);

## 25. Specify Upper and Lower Number of Matches
    let ohStr = "Ohhh no";
    let ohRegex = /Oh{3,6}\sno/; // Change this line
    let result = ohRegex.test(ohStr);

