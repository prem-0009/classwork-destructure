//destructuring
console.clear()
/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics.
EVERY EXERCISE SHOULD USE DESTRUCTURING*/
// 1.
let arr = [
  ["name", "jon"],
  ["age", 20],
  ["eyes", "blue"],
];

//Create an object out of the arr above then using destructuring, declare variables using the object keys.
let makeObj = arr.reduce((acc, curr, i, ar)=>{
  acc[curr[0]]=curr[1];
  return acc;
},{})

console.log(makeObj)

// 2.
let arr1 = [1, 2, 3, 4, 5, 6];
//a. Set 3 variables names: the third index should be called 'three', the fourth item 'four' and the rest of the items thereafter 'rest'
//b. Swap the third and fourth item variable values

let [first, second, three, four,...rest] = arr1;

 three = 4;
 four = 3;

[first, second, four, three, ...rest]= arr1

console.log(four, three)