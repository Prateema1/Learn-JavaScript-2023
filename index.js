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

 
// function x() {
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();  
// console.log(z);
// //.....
// z();

// SetTimeout + Closures In JS
//Print 1 t0 n number after n seconds

// function x() {
//     for(var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }

//     console.log("Hello World!");
// }

// x();

//For each copy of the function the i points to same reference of it.
// Can solve this by using let instead of var as let is block scope and with each function new copy of i is available.

// Another way without using let is to use var only but we need to put our setTimeout function function inside aother function (closure)

function x() {
    for(var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }

    console.log("Hello World!");
}

x();