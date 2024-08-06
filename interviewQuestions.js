const abc = [65, 5, 3, 6, 8, 67, 7, 9, 70, 45];
const target = 70;
const handleTargetPairs = (array, targetValue) => {
  // step 1 : sorting array
  const sortedArray = array.sort((a, b) => (a > b ? 1 : -1));
  let result = [];
  //step 2 : loop on sortedArray
  for (let i = 0; sortedArray.length > i; i++) {
    let valueA = sortedArray[i];
    //step 3 : looping on sorted array for compairing elems
    for (let j = i; sortedArray.length > j; j++) {
      let valueB = sortedArray[j];
      //step 4: logic for finding the pairs according to target
      valueA + valueB === targetValue ? result.push([valueA, valueB]) : null;
    }
  }

  return result; // it is returning the pairs of elments when we plus to pairs element then it will return target value
};

// console.log("result", aa);
console.log("function result:", handleTargetPairs(abc, target));

// make paramet

//  *
// **
// ***
let inputVal = 6;
let str = "";
for (let i = 0; inputVal + 1 > i; i++) {
  console.log(i);
  for (let j = 0; i > j; j++) {
    str += "*";
  }
  str += " \n";
}
// console.log(str);

// find the big length word from an array

const words = ["imarn", "Zeeshan", "faizan", "Syed Rehan", "sohel"];

const handleBigWord = (array) => {
  const wordSort = array.sort((a, b) => (a?.length > b?.length ? 1 : -1));
  const bigLength = wordSort.length - 1;
  const bigLengthWord = wordSort[bigLength];
  return bigLengthWord;
};
console.log("function :", handleBigWord(words));

//  console.log('wordSort',bigLengthWord);

// find the big length word from an array using for loop

const findBigWorkUsingForLoop = (array) => {
  // step 1: sorting array of string using for loop
  let arrrSort = [];
  for (let i = 0; array.length > i; i++) {
    let elem = words[i];
    for (let j = 0; 1 > j; j++) {
      let elemB = array[j];
      elem.length < elemB.length ? arrrSort.push(elemB) : arrrSort.push(elem);
    }
  }
  // step 2 : targeting last index of array after sorting the array
  const arrayLength = arrrSort.length - 1;
  const bigWord = arrrSort[arrayLength];
  return bigWord;
};

console.log("funtion using for loop :", findBigWorkUsingForLoop(words));

// filter in for loop

const num = [2, 41, 58, 4, 26, 3, 6, 41, 52, 26, 41];
const findNum = 52;

let arr = [];
for (let i = 0; num.length > i; i++) {
  let elem = num[i];
  elem === findNum && arr.push(elem);
}
console.log("filter arr :", arr);



