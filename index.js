// var globalVaribale = 10;    // Global variable

// function notGlobalVariable () {
//     var a = 20;    // Not a global variable
// }

// notGlobalVariable();


// Scope Chain, Lexical Scope

// function a() {
//     c();
//     function c() {
//       console.log(a);
//     }
// }

// a();
// console.log(a);


// Hoisting in let & const in JS

// console.log(b);

// let a = 10;
// var b = 100;


// Block Scope

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

//     console.log(a);
//     console.log(b);
//     console.log(c);

// var a = 10;
// console.log(a);
// var a = 20;
// console.log(a);
// var a = 30;
// console.log(a);

// let a = 10;
// console.log(a);
// a = 20;
// console.log(a);

// function abc() {
//     console.log(a);
//     var a = 20;
// }

// abc();

// const a = 10;


// CLosures in JS

// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }

// var z = x();  
// console.log(z);
// z();

//OR

// function x() {
//     var a = 10;
//     return function y() {
//         console.log(a);
//     }
// }

// var z = x();  
// console.log(z);
// //.....
// z();


// Output Based QUestions in Closure

 
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();  
console.log(z);
//.....
z();