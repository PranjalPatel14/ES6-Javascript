<script>
    {/* #ES6 Modules

    1.Compare Scopes of the var and let Keywords
    function checkScope() {
    var i = 'function scope';
    if (true) {
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
    }
    
    2.Mutate an Array Declared with const
    const s = [5, 7, 2];
    function editInPlace() {
    // Only change code below this line
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    // Using s = [2, 5, 7] would be invalid

    // Only change code above this line
    }
    editInPlace();

    3.Prevent Object Mutation
    function freezeObj() {
    const MATH_CONSTANTS = {
    PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
    MATH_CONSTANTS.PI = 99;
    } catch(ex) {
    console.log(ex);
    }
    return MATH_CONSTANTS.PI;
    }
    const PI = freezeObj();
    
    4.Use Arrow Functions to Write Concise Anonymous Functions
    // var magic = function() {
    //   return new Date();
    // };

    const magic = () => new Date();

    5.Write Arrow Functions with Parameters
    // var myConcat = function(arr1, arr2) {
    //   return arr1.concat(arr2);
    // };

    // console.log(myConcat([1, 2], [3, 4, 5]));
    const myConcat = (arr1, arr2) => arr1.concat(arr2);

    6.Set Default Parameters for Your Functions
    // Only change code below this line
    const increment = (number, value=1) => number + value;
    // Only change code above this line 

    7. Use the Rest Parameter with Function Parameters
    const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
    }

    8.Use the Spread Operator to Evaluate Arrays In-Place
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;

    arr2 = [...arr1];  // Change this line

    console.log(arr2);

    9.Use Destructuring Assignment to Extract Values from Objects
    const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
    };

    // Only change code below this line


    const {today, tomorrow} = HIGH_TEMPERATURES;
    // Only change code above this line

  */}
</script>