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

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

    console.log(a);
    console.log(b);
    console.log(c);