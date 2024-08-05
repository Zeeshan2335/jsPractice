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
