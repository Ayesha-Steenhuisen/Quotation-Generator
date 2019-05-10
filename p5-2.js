let inspirationalQuotes = {
  fragment1: [
    "The three great essentials to achieve anything worthwhile are,",
    "All growth depends upon activity.",
    "Happiness is not in the mere possession of money;",
    "Success isnt always about greatness.",
    "Hard work spotlights the character of people:"
  ],
  fragment2: [
    "first, hard work; second,",
    "There is no development physically or intellectually without effort,",
    "it lies in the joy of achievement",
    "Its about consistency.Consistent hard work leads to success.",
    "some turn up their sleeves, some turn up their noses,"
  ],
  fragment3: [
    "stick-to-itiveness; third, common sense -Thomas A. Edison",
    "and effort means work. – Calvin Coolidge",
    "in the thrill of creative effort.–Franklin D.Roosevelt",
    "Greatness will come. - Dwayne “The Rock” Johnson",
    "and some don 't turn up at all. – Sam Ewing"
  ]
};

let wisdomQuotes = {
  fragment1: [
    "Every time you stay out late; every time you sleep in;",
    "The road to success is not easy to navigate",
    "We can each define ambition and progress for ourselves.",
    "If you go to work on your goals, your goals will go to work on you.",
    "When one door closes, another opens;",
    "The quality of a person's life is in direct proportion",
    ,
  ],

  fragment2: [
    "every time you miss a workout; every time you don’t give 100% – ",
    "but with hard work; drive and passion",
    "The goal is to work toward a world where expectations are not set by the stereotypes that hold us back,",
    "If you go to work on your plan, your plan will go to work on you.",
    "but we often look so long and so regretfully upon the closed door",
    "to their commitment to excellence,"
  ],

  fragment3: [
    "You make it that much easier for me to beat you. – Unknown",
    "it's possible to achieve the American dream.- Tommy Hilfiger",
    "but by our personal passion, talents and interests.- Sheryl Sandberg.",
    "Whatever good things we build end up building us.- Jim Rohn",
    "that we do not see the one that has opened for us.–Alexander Graham Bell",
    "regardless of their chosen field of endeavor.–Vince Lombardi"
  ]
};

//this function creates a random number, with the method Math.Random, and multiplies this with the parameter "myNumber".
//Lastly, it makes a round number with "Math.floor",  rounding it downwards.

function randomNumber(myNumber) {
  return Math.floor(Math.random() * myNumber);
}

while (true) {
  let askForQuote = prompt("Would you like a random quote?");
  if (askForQuote == "no") {
    break;
  }

  //Let the user type which quote they prefer: for inspirational quotes "1", for wisdom quotes "2".
  let typeWhichQuote = prompt(
    "Which quote would you like? Type 1 for inspiration quote or 2 for a wisdom quote."
  );

  console.log(typeWhichQuote);

  //Refer to the previous question again if the user doesnt respond with either "1" or "2".
  while (true) {
    if (typeWhichQuote != "1" && typeWhichQuote != "2") {
      typeWhichQuote = prompt("Please type 1 or 2 for a quote.");
    } else {
      break;
    }
  }

  //Prompts user to give a number.
  let numberOfQuotes = prompt("Would you like 1, 2, 3, 4, or 5 quotes?");
  while (true) {
    if (numberOfQuotes < 1 || numberOfQuotes > 5) {
      numberOfQuotes = prompt(
        "Please type how many quotes you like. Please pick a number: 1, 2, 3, 4, or 5."
      );
    } else {
      break;
    }
  }

  //Decides between type of quotes, which has been chosen by the previous question by the user.
  let quotes;

  if (typeWhichQuote == 1) {
    quotes = inspirationalQuotes;
  } else {
    quotes = wisdomQuotes;
  }

  //This for loop decides how many quotes it should provide, given by the user (referring to line 81).
  //The alert refers to the let "quotes" (line 93), which holds data for which choice the user has made (either option 1 or 2)
  // further the alert contains an array with Randomnumber and one of the three fragments of either one of the quotes.
  //Randomnumber multiplies with one of the three fragments from either inpirational or wisdom quotes and rounds it downwards and gives the user a random quote.

  for (let i = 0; i < numberOfQuotes; i++) {
    console.log(i, numberOfQuotes);
    alert(
      quotes.fragment1[randomNumber(quotes.fragment1.length)] +
        quotes.fragment2[randomNumber(quotes.fragment2.length)] +
        quotes.fragment3[randomNumber(quotes.fragment3.length)]
    );
  }
}
