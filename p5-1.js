/*const Quotefragment is an object,
- The structure is an object which contains 3 fragments.
- These fragments are arrays, which contain strings,/
fragment1, fragment2, fragment3 are keys of the (object quoteFragments).
And the value of the keys are the arrays.
*/
const quoteFragments = {
    fragment1: [
        'The three great essentials to achieve anything worthwhile are,',
        'All growth depends upon activity.',
        'Happiness is not in the mere possession of money;',
        'Success isnt always about greatness.',
        'Hard work spotlights the character of people:',
    ],
    fragment2: [
        'first, hard work; second,',
        'There is no development physically or intellectually without effort,',
        'it lies in the joy of achievement',
        'Its about consistency.Consistent hard work leads to success.',
        'some turn up their sleeves, some turn up their noses,',
    ],
    fragment3: [
        'stick-to-itiveness; third, common sense -Thomas A. Edison',
        'and effort means work. – Calvin Coolidge',
        'in the thrill of creative effort.–Franklin D.Roosevelt',
        'Greatness will come. - Dwayne “The Rock” Johnson',
        'and some don \'t turn up at all. – Sam Ewing',
    ]
}

const askForQuote = prompt("Would you like a random Quote? Type 'yes' for quote and 'no' for quit. ");
/*prompt is a function (because ist being called and it returns the value that user enters in the pormpt field.)*/
/*(eacht time you use a parenthesis you execute a function)
math.floor and math random are both functions 
methods are functions on objects*/

/*Math.random returns a number between 0 - 1 then we multiply that by a number, we get the number from the .length value inside an array. The arrays are the fragment keys inside the quoteFragments object. Math floor is used to round the number down to the largest integer, less or equal to the given number.*/

const randomNumberA = Math.floor(Math.random() * quoteFragments.fragment1.length);
const randomNumberB = Math.floor(Math.random() * quoteFragments.fragment2.length);
const randomNumberC = Math.floor(Math.random() * quoteFragments.fragment3.length);
/*Line 34 -36, */

if (askForQuote == "yes") {
    alert("okay, great, i will now serve you a random quote.");
    alert("here is your random quote " + quoteFragments.fragment1[randomNumberA] + " " + quoteFragments.fragment3[randomNumberB] + " " + quoteFragments.fragment3[randomNumberC]);
    /* The alert is a function, the randomNumber is used on fragment arrays to return a string. We joining the strings together with the + (plus).
    You are returning a string from the array, not a number*/

} else {
    alert("Ok, have a good day");