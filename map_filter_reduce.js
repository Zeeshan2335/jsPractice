const arr1 = [1, 2, 3, 4, 5];

const a1 = arr1.map((value) => value * 2);
console.log(a1);
console.log(arr1);

//filter
const arr2 = [1, 12, 23, 24, 5, 16, 7, 8, 9];

const f1 = arr2.filter((value) => value > 10);
console.log(f1); //[ 12, 23, 24, 16 ]


//reduce
// it returns a value
const arr3 = [1, 2, 3, 4, 5];

const arrReduce = (a, b) => {
  return a + b;
};
const r1 = arr3.reduce(arrReduce);
console.log("r1 :", r1);//r1 : 15
