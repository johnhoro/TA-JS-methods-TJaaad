let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(a, b) {
  return a.length - b.length;
}
let logest = words.sort(findLongestWord).pop();

// - Convert the above array "words" into an array of length of word instead of word.
function strlength(arr) {
  return arr.length;
}

let stringsLength = words.map(strlength);
// - Create a new array that only contains word with atleast one vowel.

function vowel(arr) {
  if (
    words.includes("a") ||
    words.includes("e") ||
    words.includes("i") ||
    words.includes("o") ||
    words.includes("u")
  ) {
    return true;
  } else {
    return false;
  }
}
let vowelWords = words.filter(vowel);

// - Find the index of the word "rhythm"
words.indexOf("rhythm");
// - Create a new array that contians words not starting with vowel.

// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(a, b) {
  return a + b;
}
let sum = numbers.reduce(sumArray);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

// - Create a new array that contains only even numbers
function isEven(num) {
  return num % 2 === 0;
}
let evenNum = numbers.filter(isEven);

// - Create  a new array that contains only odd numbers.
function isOdd(num) {
  return num % 2 !== 0;
}
let oddNum = numbers.filter(isOdd);
// - Create a new array that should have true for even number and false for odd numbers.
let checkOddOrEven = [...numbers].map((num) => num % 2 !== 0);
// - Sort the above number in assending order.

// - Does sort mutate the original array?

// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
