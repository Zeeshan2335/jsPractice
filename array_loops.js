const arr1 = [1, 2, 3, 4, 5];

// for (let i = 0; arr1.length > i; i++) {
//   console.log(arr1[i]);
// }
// forEach
arr1.forEach((element)=>{// alternate for "for loop"
    console.log(element * element);
})

// Array.from
// it is used for make array to string and an other type of object  

let name="syed"
 let a= Array.from(name)
console.log(a);//[ 's', 'y', 'e', 'd' ]

// for ... of


for (let i of arr1){
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5

// for...in
// it itiretes on keys of object if we using object
// it itirates on index of array if we using array
const obj= {name:"syed",age:25 , city:"latur"}
for(let item in obj){
    console.log(item);
}

for(let arr in arr1){
    console.log(arr);
}
