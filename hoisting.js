// hoisting is a default behaviour of javaScript in which all declearation move to the top of the scope before code exicution
//example 1:

// variable using before declearation
console.log(a); //undefined

var a = 10; // variable declearation
console.log(a);


demo()// calling the function before function declearation


function demo() {
  console.log("function calling");
}
