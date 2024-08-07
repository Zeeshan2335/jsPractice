function outerFunction(outerVariable) {
    // lacicle scope
    return function innerFunction(innerVariable) {
        console.log('Outer variable: ' + outerVariable);
        console.log('Inner variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');

newFunction('inside');