// Arrays Declaration;

//One way
// let arr = new Array();

//Another way

let arr = [];

arr = ["apple", "orange", "banana"];

console.log(arr[0]);

// We can store any type of data in our array

let person = {
  name:"John",
  age: 25
}

let arr1 = ["apple", "orange", "banana", person]
console.log(arr1);

console.log(arr1.length)

//Arrays - Add and remove elements

arr1.push("mango");


console.log(arr1);

arr1.pop();
arr1.pop();

console.log(arr1);


// Arrays - Add and remove from the top of the array (shift and unshit)

//Add to the top of the array

arr1.unshift("kiwi");

console.log(arr1);

//Remove from the top of the array

arr1.shift();

console.log(arr1);


//Looping an Array

for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

//while loop

let i = 0;

while(i < arr1.length) {
  console.log(arr1[i]);
  i++;
}


//In built loops by 

//map function -> Calls a defined callback function on each element 
// of an array, and returns a new array that contains the results.

const numbers = [1,2,3,4,5];

// const newNums = numbers.map((item, index, array) => {
// return item + 4;
// })

// console.log(newNums);

//Filter function

// const newNums = numbers.filter((item, index, array) => {
//   return item > 2;
//   })

  // console.log(newNums);

  //Reduce function -> Takes an array and it reduces it down to one value
  // Example: Calculating the sum if the array elements.

  const newNums = numbers.reduce((prev, item, index, array) => {
         return prev + item;
  }, 2);

  console.log(newNums);

  // findIndex

  const index = numbers.findIndex((item) =>  item === 2);

  console.log(index);


  //Some function -> return boolean value
  // If there is even a single element that satisfies the condition, returns true

  const res = numbers.some((item, index, array) => {
    return item > 3;
  })

  console.log(res);

// Every function :  returns boolean
// if every element satisfies the condition, returns true else false

  const res1 = numbers.every((item, index, array) => {
    return item > 3;
  })

  console.log(res1);

  // Find function: Returns the first value that satisfies the condition else if condition
  // not satisfied then returns false;

  const res2 = numbers.find((item, index, array) => {
    return item > 3;
  })


  console.log(res2);


  //Spread and Rest operators

  const nums = [1,2,3]
  const nums2 = [4,5,6,7];

  const finalNums = [...nums, ...nums2];   // Spread Operator

  console.log(finalNums);

  //Rest Operator

  function sum(...numbers) {

    // console.log(numbers);
    return numbers;
  }

  sum(nums, nums2, "hello");

  //concat method

  // const newArr = nums.concat(nums2, arr);

  // console.log(newArr);

  //slice method -> If we want to access certain part of the array 

  // const newArr = arr.slice(0,2);

  // console.log(newArr);


  //splice -> removes elements from an array and if necessary 
  //inserts new elements in their place, returning 
  // the deleted elements

  // makes change to the original array

  const newArr = arr.splice(1,2,"orange");
  console.log(arr);


  // Fill -> replaces the elements of the array and
  //substitutes with the passed element

  const dummy = [2,3,4,5];
  dummy.fill(0);

  console.log(dummy);


  //Flat -> Flattens the array: flat(2), here 2 is the depth (nested) level of array

  // const flatEx = [1, [2,3],[[4,5], 6]];

  // const flattenedArray = flatEx.flat(2);

  // console.log(flattenedArray);


  // reverse

  // console.log(numbers);

  // numbers.reverse();

  // console.log(numbers);

  //sort the array

  const unsorted = [5,3,6,10,9,6];

  const sorted = unsorted.sort((a,b) => {
    return b - a;
  });

  console.log(sorted);


  






