Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: (index) defaults to 0 - (string data type)
   - Return: it convert string character into uppercase
   - Example:
     ```js
     let name = "Arya Stark";
     name.toUpperCase(); // 'ARYA STARK'
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance.toUpperCase(); // 'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
     let houseName = "Starks";
     houseName.toUpperCase(); //`STARKS`
     ```
   - `toUpperCase` it accept a string value and convert it into uppercase.

3. `toLowerCase`

- Parameter: (index) defaults to 0 - (string data type)
  - Return: it convert string character into lowercase
  - Example:
    ```js
    let name = "Arya Stark";
    name.toLowerCase(); // 'arya stark'
    let sentance = "A quick brown fox jumped over a lazy dog";
    sentance.toLowerCase(); // 'a quick brown fox jumped over a lazy dog'
    let houseName = "Starks";
    houseName.toLowerCase(); //`starks`
    ```
  - `toLowerCase` it accept a string value and convert it into lowercase.

4. `trim`
   Parameter: (index) defaults to 0 - (string data type)

   - Return: it remove the extra spaces between the character.
   - Example:
     ```js
     let heading = "      hello world";
     heading.trim(); // 'hello world'
     let sentanceTrim = "     A quick brown john fox jumped over a lazy dog";
     sentanceTrim.trim(); //'A quick brown john fox jumped over a lazy dog'
     let houseNameTrim = "vikas nagar  ";
     houseNameTrim.trim(); // 'vikas nagar'
     ```
   - `trim` it remove the extra spaces between the character.

5. `trimEnd`
   Parameter: (index) defaults to 0 - (string data type)

   - Return: it remove the extra spaces between the character from the last.
   - Example:
     ```js
     let heading = "hello world      ";
     heading.trimEnd(); // 'hello world'
     let sentanceTrim = "A quick brown john fox jumped over a lazy dog     ";
     sentanceTrim.trimEnd(); //'A quick brown john fox jumped over a lazy dog'
     let houseNameTrim = "vikas nagar  ";
     houseNameTrim.trimEnd(); // 'vikas nagar'
     ```
   - `trimEnd` it remove the extra spaces between the character form the last.

6. `trimStart`
   Parameter: (index) defaults to 0 - (string data type)

   - Return: it remove the extra spaces between the character from the start.
   - Example:
     ```js
     let heading = "    hello world";
     heading.trimStart(); // 'hello world'
     let sentanceTrim = "     A quick brown john fox jumped over a lazy dog";
     sentanceTrim.trimStart(); //'A quick brown john fox jumped over a lazy dog'
     let houseNameTrim = "    vikas nagar";
     houseNameTrim.trimStart(); // 'vikas nagar'
     ```
   - `trimStart` it remove the extra spaces between the character form the start.

7. `concat`

- Return: it concat to string value

```js
let str1 = "Hello";
let str2 = "World";

str1.concat(" ", str2); // expected output: "Hello World"

str2.concat(", ", str1); // expected output: "World, Hello"
```

`concat` it concat to string value

8.  `endsWith`

- return: true or false

```js
const str1 = "Cats are the best!";

str1.endsWith("best", 17); // expected output: true

const str2 = "Is this a question";

str2.endsWith("?"); // expected output: false
```

`endsWith` it determines whether a string ends with the characters of a specified string,

9.  `includes`
    -return true or false

```js
let sentence = "The quick brown fox jumps over the lazy dog.";

let word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// expected output: "The word "fox" is in the sentence"
```

`includes`- case-sensitive search to determine whether one string may be found within another string,

10. `indexOf`
    -return :- by default it return -1

```js
let paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
```

`indexOf` it accept the string value and show the index

11. `lastIndexOf`

-return :- by default it return -1

```js
let paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
paragraph.lastIndexOf(`dog`); // 52

let sentance = "A quick brown fox jumped over a lazy dog";

sentance.lastIndexOf(`lazy`); // 32
```

`lastIndexOf` it accept the string value and show the last index

12. `padEnd`

````js
let str1 = 'Breaded Mushrooms';
str1.padEnd(`25`,`....`)//'Breaded Mushrooms........'
str1.padEnd(`25`)//'Breaded Mushrooms        '

```
  `padEnd`-The padding is applied from the end of the current string.


   13. `padStart`
   ```js

let str1 = 'Breaded Mushrooms';
str1.padEnd(`25`,`....`)//'Breaded Mushrooms........'
str1.padEnd(`25`)//'Breaded Mushrooms        '
```

  `padEnd`-The padding is applied from the end of the current string.


    14. `repeat` 15. `replace` 16. `slice` 17. `split` 18. `substring`
````
