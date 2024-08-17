// shellow Copy
// shellow copy will not create a new object or array ,it will copy the reference of the object so whenever we changes the copied object it will reflect to the original object.

const obj1 = { name: "zeeshan", age: "25" };

const obj2 = obj1;

obj2.age = 10;

console.log(obj1); //{ name: 'zeeshan', age: 10 }
console.log(obj2); //{ name: 'zeeshan', age: 10 }
console.log("checked :",obj1 == obj2); // true

// deep copy

const a = { name: "Syed", city: "nanded" };
const b = JSON.parse(JSON.stringify(a))
console.log( "checked :", a==b);//false
b.city = "Hyderabad";

console.log(a);//{ name: 'Syed', city: 'nanded' }
console.log(b);//{ name: 'Syed', city: 'Hyderabad' }


