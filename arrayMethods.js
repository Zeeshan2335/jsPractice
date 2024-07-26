let num = [1, 2, 3, 55, 42, 16];

let b = num.toString(); // to make array to string 1,2,3,55,42,16
console.log(typeof b, b);

//jion method
//join method 1 stirng return krta hai
// jion method array of element me kuch join krwane use kya jata hai
let c = num.join();
console.log(c, typeof c); //1 and 2 and 3 and 55 and 42 and 16 string

//pop method
//it changes to original array
// it removes the last element of array
// it returns poped element
let d = num.pop();
console.log(num, typeof num); //[ 1, 2, 3, 55, 42 ] object
console.log(d, typeof d); //16 number =  poped element

//push method
//it changes to original array
// it adds element in  the last of array
// it returns array length

let arr = num.push(100);
console.log(num); //[ 1, 2, 3, 55, 42, 100 ]
console.log(arr); //6 = array length

//shift method
//it changes to original array
//it removes first elem from array
// it returns shifted elem
let r = num.shift();
console.log(num); // [ 2, 3, 55, 42, 100 ]
console.log(r, typeof r); // 1 = shifted elem

//unshift method
//it changes to original array
//it adds first elem from array
// it returns shifted elem
let f = num.unshift(50);
console.log(num); // [ 50, 2, 3, 55, 42, 100 ]
console.log(f, typeof f); // 6 = array length

// delete is not method it is an operator
// we can remvoe array element by using array legth
// element will delete but array length will be same

let a = [5, 2, 3, 6, 4];
delete a[0];
console.log(a); //[ <1 empty item>, 2, 3, 6, 4 ]
console.log(a.length); //5

// concat method
// it is used to merge or concats 2 or more arrays
// it returns a new copy of array , does not change existing array.

let a1 = [1, 2, 3, 4, 5];
let a2 = [11, 12, 13, 14, 15];
let a3 = [221, 222, 223, 224, 225];

let newArr = a1.concat(a2, a3);

console.log(newArr);
// [
//     1,   2,   3,  4,   5,  11,
//    12,  13,  14, 15, 221, 222,
//   223, 224, 225
// ]

console.log(a1, a2, a3); //[ 1, 2, 3, 4, 5 ] [ 11, 12, 13, 14, 15 ] [ 221, 222, 223, 224, 225 ]

// sort method
// it sorts array alphabeticlly not assending or dissanding order
// it takes a coall back funciton for assending or dissanding operation
// it changes original array
let compare = (a, b) => {
  return a - b;
};
num.sort();

console.log(num); // [ 100, 2, 3, 42, 50, 55 ]

num.sort(compare);
console.log(num); //[ 2, 3, 42, 50, 55, 100 ]

//reverse method
// it reverse the array

const numArr=[1,2,3,4,5]
 numArr.reverse()
console.log(numArr);

// splice
// array.splice(1 konse index se delete krna hai, 2 kine elem delete krna hai,3 add new elements)
// it changes original array.
//it returns removed elements .
const arrr= [1,2,3,4,5,6]
 const result= arrr.splice(2,3,111,222,333)

console.log(arrr); //[ 1, 2, 111, 222, 333, 6 ] 
console.log(result);//[ 3, 4, 5 ]

//slice method
// it returns new array 
// doest not effect to original array
// in case of 1 arrgument : it takes index number and slices array from index number to end of array, including that index number which we are passing
// in case of 2 arrugument : it takes starting index and ending index for slicing a peece of array and it does not include ending index in slicing of array 

const sliceArr= [1,2,3,4,5,6,7,8,9,10]
//  const newSliceArr= sliceArr.slice(4) // case 1: [ 5, 6, 7, 8, 9, 10 ]
 const newSliceArr= sliceArr.slice(4,8) // case 2 : [ 5, 6, 7, 8 ]
 console.log('sliceArr :',newSliceArr);