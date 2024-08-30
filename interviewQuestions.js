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
// console.log("function result:", handleTargetPairs(abc, target));

// make paramet

//  *
// **
// ***
let inputVal = 6;
let str = "";
for (let i = 0; inputVal + 1 > i; i++) {
  // console.log(i);
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
// console.log("function :", handleBigWord(words));

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

// console.log("funtion using for loop :", findBigWorkUsingForLoop(words));

// filter in for loop

const num = [2, 41, 58, 4, 26, 3, 6, 41, 52, 26, 41];
const findNum = 52;

let arr = [];
for (let i = 0; num.length > i; i++) {
  let elem = num[i];
  elem === findNum && arr.push(elem);
}
// console.log("filter arr :", arr);

// remove duplicate elements from an array using for loop

const duplicates = [
  3,
  "abc",
  "zeeshan",
  1,
  "sohel",
  3,
  "zeeshan",
  "abc",
  3,
  "sohel",
  1,
];
// useing for loop for iteration
// using indexOf method for getting element index
//matching the element index with looping index
const handleRemoveDuplicate = (array) => {
  let removeDuplicate = [];
  for (let i = 0; array.length > i; i++) {
    let elem = array[i];
    array.indexOf(elem) == i && removeDuplicate.push(elem);
  }
  return removeDuplicate;
};
// console.log(handleRemoveDuplicate(duplicates));

const interviewQ1 = [2, 5, 6, 4, 5, 5, 4, 2, 2, 2, 8, 7];

function mostRepeated(arr) {
  const obj = {};
  let count = 0;
  let repeatedNum = null;

  for (let i = 0; arr.length > i; i++) {
    let num = arr[i];
    obj[num] = (obj[num] || 0) + 1; // obj[num] : { '2': 4, '4': 2, '5': 3, '6': 1, '7': 1, '8': 1 }

    // filtering the most repeated key from obj
    if (obj[num] > count) {
      count = obj[num];
      repeatedNum = num;
    }
  }

  return repeatedNum;
}
console.log(mostRepeated(interviewQ1));

function mostFrequent(arr) {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequentNumber = null;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    frequencyMap[num] = (frequencyMap[num] || 0) + 1;

    // if (frequencyMap[num] > maxCount) {
    //   maxCount = frequencyMap[num];
    //   mostFrequentNumber = num;
    //   console.log( "frequencyMap[num] :", frequencyMap[num]);
    //   // console.log( "mostFrequentNumber :", mostFrequentNumber);
    // }
  }

  return mostFrequentNumber;
}

// console.log(mostFrequent(interviewQ1)); // Output: 2

// filter the numbers including string type num.

const data = [3, 5, "25", 8, "at", "78", "sohel", 5, "45", "a56", "89"];

function filterNum(arr) {
  let NumArr = [];

  for (let i = 0; arr.length > i; i++) {
    if (!isNaN(arr[i])) {
      NumArr.push(arr[i]);
    }
  }

  return NumArr;
}

console.log(filterNum(data)); //[3, 5, "25", 8, "78", 5, "45", "89"]
