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
// function findLongestWord(a, b) {
//   return a.length - b.length;
// }
// let logest = words.sort(findLongestWord).pop();

function findLongestWord(arr) {
  return [...arr].sort((a, b) => a.length - b.length).pop();
}
findLongestWord(words);

// - Convert the above array "words" into an array of length of word instead of word.
// function strlength(arr) {
//   return arr.length;
// }

// let stringsLength = words.map(strlength);

let wordsLength = words.map((w) => w.length);
// - Create a new array that only contains word with atleast one vowel.

function checkVowel(words) {
  return (
    words.toLowerCase().includes("a") ||
    words.toLowerCase().includes("e") ||
    words.toLowerCase().includes("i") ||
    words.toLowerCase().includes("o") ||
    words.toLowerCase().includes("u")
  );
}
let vowelFilter = words.filter((w) => checkVowel(w));

// - Find the index of the word "rhythm"
// words.indexOf("rhythm");

words.findIndex((w) => w == "rhythm");
// - Create a new array that contians words not starting with vowel.
let notWithVowel = words.filter((w) => !checkVowel(w[0]));
// - Create a new array that contianse words not ending with vowel
let notEndingWithVowel = words.filter((w) => !checkVowel(w[w.length - 1]));

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
// function sumArray(a, b) {
//   return a + b;
// }
// let sum = numbers.reduce(sumArray);

function sumArray(array) {
  return array.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  }, 0);
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplyByThree = numbers.filter((num) => num % 3 === 0);
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
let sortedNumber = [...numbers].sort((a, b) => a - b);
// - Does sort mutate the original array?
// Yes
// - Find the sum of the numbers in the array.
let sum = numbers.reduce((acc, cv) => {
  acc = acc + sum;
  return acc;
}, 0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array) {
  return (
    array.reduce((acc, cv) => {
      acc = acc + cv;
      return acc;
    }, 0) / array.length
  );
}

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
function averageWordLength(words) {
  return (
    words
      .map((w) => w.length)
      .reduce((acc, cv) => {
        return acc + cv;
      }, 0) / words.length
  );
}
