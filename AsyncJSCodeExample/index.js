//First Example
// console.log("Hello world!");
// setTimeout(function exec() {
//     console.log("Timer done");
// }, 0);

// console.log("End");


//Second Example;.;
// console.log("Hello world!");
// setTimeout(function exec() {
//     console.log("Timer done");
// }, 0);

// for(let i = 0; i < 10000000000; i++) {
//     //some task / 10ses
// }

// console.log("End");


//Third Example
// console.log("Hello world!");
// for(let i = 0; i < 3; i++) {
// setTimeout(function exec() {
//     console.log("Timer done");
// }, 0);
// }

// for(let i = 0; i < 10000000000; i++) {
//     //some task / 10ses
// }

// console.log("End");

//Fourth Example

console.log("Hello World");
setTimeout(function exec() {
    console.log("timer done");
    setTimeout(function exec() {
        console.log("another timer");
    }, 10);
}, 0);

console.log("End");
