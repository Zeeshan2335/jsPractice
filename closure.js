function outerFunction(outerVariable) {
    // lacicle scope
    return function innerFunction(innerVariable) {
        // console.log('Outer variable: ' + outerVariable);
        // console.log('Inner variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');

newFunction('inside');



function outerFunction() {
    let counter = 0; // This is a variable in the outer function's scope
  
    function innerFunction() {
      counter++; // The inner function has access to the outer function's variables
      console.log(counter);
    }
  
    return innerFunction;
  }
  
  const increment = outerFunction();
  increment(); // Logs: 1
  increment(); // Logs: 2
  increment(); // Logs: 3
  
//   outerFunction creates a counter variable and an innerFunction.
// innerFunction has access to the counter variable, even after outerFunction has finished executing.
// When you call increment, the innerFunction (a closure) still has access to the counter variable, allowing it to increment and log the count.