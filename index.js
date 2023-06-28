// var globalVaribale = 10;    // Global variable

// function notGlobalVariable () {
//     var a = 20;    // Not a global variable
// }

// notGlobalVariable();


// Scope Chain, Lexical Scope

function a() {
    var a = 20;
    c();
    function c() {
      console.log(a);
    }
}

a();
console.log(a);