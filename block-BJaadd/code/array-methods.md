Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

- Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
  -return: it returns a new string by concatenating all of the elements in an array
  Example:
  ```js
  let elements = ["Fire", "Air", "Water"];
  elements.join(""); // 'FireAirWater'
  let numbers = [1, 2, 3];
  numbers1.join(""); //'123'
  let color = ["red", "green", "blue"];
  color.join(""); //'redgreenblue'
  let boolean = [`false`, `true`, `null`];
  boolean.join(""); // 'falsetruenull'
  ```
  `join`

3. `flat`

```js
let arr1 = [0, 1, 2, [3, 4]];
arr1.flat(); // (5) [0, 1, 2, 3, 4]
let arr2 = [0, 1, 2, [[[3, 4]]]];
arr2.flat(3); // (5) [0, 1, 2, 3, 4]
```

4. `push`

```js
let animals = ["pigs", "goats", "sheep"];
animals.push("cow"); // (4) ['pigs', 'goats', 'sheep', 'cow']
let sports = ["soccer", "baseball"];
sports.push("football", "cricket"); // (4) ['soccer', 'baseball', 'football', 'cricket']
```

5. `indexOf`
   -return: returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
let beasts = ["ant", "bison", "camel", "duck", "bison"];
beasts.indexOf("duck"); // 3
beasts.indexOf("giraffe"); // -1
beasts.indexOf("bison", 2); // 4
```

6. `lastIndexOf`
   -return: the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

   ```js
   let animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
   animals.lastIndexOf("Tiger"); // 1
   animals.lastIndexOf("Dodo"); // 3
   ```

7. `includes`
   -return:it determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
let array1 = [1, 2, 3];
array1.includes(3); // true
array1.includes(0); // false
```

8. `reverse`
   -return: The first array element becomes the last, and the last array element becomes the first.

```js
let array1 = ["one", "two", "three"];
array1.reverse(); // 3) [3, 2, 1]
```

9. `every`
   -return: it tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
let isBelowThreshold = (currentValue) => currentValue < 40;

let array1 = [1, 30, 39, 29, 10, 13];
array1.every(isBelowThreshold); // true
```

10. `shift`it removes the first element from an array and returns that removed element. This method changes the length of the array.

```js
let array1 = [1, 2, 3];
array1.shift(); // 1
let beasts = ["ant", "bison", "camel", "duck", "bison"];
beasts.shift(); // 'ant'
```

11. `splice` it changes the contents of an array by removing or replacing existing elements and/or adding new elements

```js
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, `feb`); //[]// (5) ['Jan', 'feb', 'March', 'April', 'June']
months.splice(4, 0, `may`); // (6) ['Jan', 'feb', 'March', 'April', 'may', 'June']
```

12. `find` it returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```js
let array1 = [5, 12, 8, 130, 44];
```

13. `unshift` it adds one or more elements to the beginning of an array and returns the new length of the array.

```js
let array1 = [1, 2, 3];
array1.unshift("2", "6"); // 5// (5) ['2', '6', 1, 2, 3]
let months = ["Jan", "March", "April", "June"];
months.unshift("dec"); //5// (5) ['dec', 'Jan', 'March', 'April', 'June']
```

14. `findIndex` it returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

```js
let array1 = [5, 12, 8, 130, 44];
array1.indexOf(12); // 1
let months = ["Jan", "March", "April", "June"];
months.indexOf("March"); //1
```

15. `filter` it creates a new array with all elements that pass the test implemented by the provided function.

```js
let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
words.filter((word) => word.length > 6); // (3) ['exuberant', 'destruction', 'present']
words.filter((word) => word.length > 8); // (2) ['exuberant', 'destruction']
```

16. `flat`

```js
let arr1 = [0, 1, 2, [3, 4]];
arr1.flat(); // (5) [0, 1, 2, 3, 4]
let arr2 = [0, 1, 2, [[[3, 4]]]];
arr2.flat(3); // (5) [0, 1, 2, 3, 4]
```

17. `forEach` it executes a provided function once for each array element.

```js
let array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element)); //a b c
```

18. `map`it creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
let array1 = [1, 4, 9, 16];
array1.map((x) => x * 2); // (4) [2, 8, 18, 32]
array1.map((x) => x * 4); // (4) [4, 16, 36, 64]
```

19. `pop` it removes the last element from an array and returns that element. This method changes the length of the array.

```js
let plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
plants.pop(); // `tomoto`
```

20. `reduce`

```js
let array1 = [1, 2, 3, 4];
reducer = (previousValue, currentValue) => previousValue + currentValue;
array1.reduce(reducer); //
```

21. `slice` it returns a shallow copy of a portion of an array into a new array object selected from start to end

```js
let animals = ["ant", "bison", "camel", "duck", "elephant"];
animals.slice(3); // (2) ['duck', 'elephant']
```

22. `some` it tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.

```js
let array = [1, 2, 3, 4, 5];
let even = (element) => element % 2 === 0;
array.some(even); // true
```
