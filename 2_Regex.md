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

## 6.Find More Than the First Match
    let twinkleStar = "Twinkle, twinkle, little star";
    let starRegex = /Twinkle/gi; // Change this line
    let result = twinkleStar.match(starRegex); // Change this line

## 7.Match Anything with Wildcard Period
    let exampleStr = "Let's have fun with regular expressions!";
    let unRegex = /.un/; // Change this line
    let result = unRegex.test(exampleStr);

## 8.Match Single Character with Multiple Possibilities
    let quoteSample =
    "Beware of bugs in the above code; I have only proved it correct, not tried it.";
    let vowelRegex = /[aeiou]/gi; // Change this line
    let result = quoteSample.match(vowelRegex); // Change this line

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

## 26. Specify Only the Lower Number of Matches
    let haStr = "Hazzzzah";
    let haRegex = /Haz{4,}ah/g; // Change this line
    let result = haRegex.test(haStr);

## 27. Specify Exact Number of Matches 
    let timStr = "Timmmmber";
    let timRegex = /Tim{4}ber/; // Change this line
    let result = timRegex.test(timStr);

## 28. Check for All or None    
    let favWord = "favorite";
    let favRegex = /favou?rite/; // Change this line
    let result = favRegex.test(favWord);

## 29. Positive and Negative Lookahead 
    let sampleWord = "astronaut";
    let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
    let result = pwRegex.test(sampleWord);

## 30. Check For Mixed Grouping of Characters
    let myString = "Eleanor Roosevelt";
    let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
    let result = myRegex.test(myString);

## 31. Reuse Patterns Using Capture Groups  
    let repeatNum = "42 42 42";
    let reRegex = /^(\d+) \1 \1$/;
    let result = reRegex.test(repeatNum);

## 32. Use Capture Groups to Search and Replace
    let str = "one two three";
    let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
    let replaceText = "$3 $2 $1"; // Change this line
    let result = str.replace(fixRegex, replaceText);

## 33. Remove Whitespace from Start and End
    let repeatNum = "42 42 42";
    let reRegex = /^(\d+) \1 \1$/;
    let result = reRegex.test(repeatNum);