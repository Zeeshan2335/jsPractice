// there are 2 types of scopes 

// 1 local scope
//      i) block scope
//     ii) functional scope

//2 globle scope

// i) block scope 
{
    let a=10
    const c =90
    var r= 20
}
// console.log(a);//ReferenceError: a is not defined // let has block scope
// console.log(c);//ReferenceError: c is not defined // let has block scope
// console.log(r); 20 // var has not block scope i means it has globle scope

function abc(){// functional scope
    let b=40
    var u= 80
    const t= 70
}
// console.log(b);//ReferenceError: b is not defined // let has functional scope
// console.log(u); //ReferenceError: u is not defined // var has functional scope
// console.log(t); //ReferenceError: t is not defined // const has functional scope



