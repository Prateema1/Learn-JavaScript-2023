# Learn-JavaScript-2023

## What is Lexical Environment?

-- Lexical environment is the local memory along with its lexical parent's scope. In simple words, lexically present means present in a heirarchy.

-- Whenever execution context is created lexical environment is also crated along with its local memory. That lexical environment has reference to its parent's scope.

## The Scope Chain

-- Scope chain is the chain of all the lexical environment and its parent reference. When JS doesn't find the value in its local memory, it goes through the scope chain and returns the value.

## What is Scope?

-- Scope is simply where we can access the variables and functions in our code.

## let & const in JS

-- let & const is the new way of declaring variables and functions in JS. It is an ES6 additional way to access variables and functions.

## Are let & const hoisted?

-- Yes, they are hoisted

## Temporal Dead Zone

-- The time zone since when the let variable was hoisted and till it is assigned a value is known as the temporal dead zone.

-- It is hoisted in a separate memory space called "Script".

## What is a Reference Error?

-- When the variable is in a temporal dead zone and we try to access it, it gives ReferenceError.

## Relation of Global Object and variable var, let & const

-- Example: let a = 10;
var b = 20;

-- Here, we can access variable "b" using the global "window" object. But, we cannot access variable "a" as they are present in different scope.

-- Also, we cannot re-initialize let variable.
-- Example: let a = 10;
let a = 100;

-- It gives "SyntaxError". Cannot re-initialze it.

## Important Difference Between let & const

-- Similarity, both are hoisted and goes through the temporal dead zone.

-- const is more strict than let & var.
-- Example: const b = 100; (Correct)
const c; (Wrong)

-- Throws Syntax Error - Missing initializer in const declaration

-- TypeError - const a = 100;
a = 10000;
(Here, Assignment to constant variable. As, a is of const type, we cannot re-initialize the value).

## How to avoid Temporal Dead Zone?

-- Always, try to declare and initialize your variables at the top of the code.
-- We are trying to reduce the temporal dead zone space to zero.

## Block, Block Scope and Shadowing in JS

-- When we need to combine multiple statements into one, it is known as a block. For eg:

-- All the variables and functions that we can access inside a block is known as block scope. For example:
---- {
var a = 20;
let b = 30;
const c = 40;
}

--- var a = 100;
{
var a = 10;
let b = 20;
const c = 40;
console.log(a);
}
console.log(a);

----- Here, in case of "var" the value of a will be 10 in both cases because they both point to same global memory space. So, when our code execution reaches to a inside block, it will shadown the value of a and will update it to 10.

--- let b = 100;
const c = 40;
{
let b = 10;
const c = 50;
console.log(b); // Output: 10
console.log(c); // Output: 50
}
console.log(b); // Output : 100
console.log(c); // Output: 40

----- In case of "let & const", they have different memory scope. One inside block has Block memory space and the ones outside block has a separate memory space "Script". So, values are not shadowed.

## Illegal Shadowing

--- Example:
------------ var a = 10;
{
var a = 20; // This is correct shadowing
}

------------- let a = 10;
{
var a = 20; // Illegal shadowing
}

## Closures in JavaScript

--- Function bundled together with its lexical scope forms a closure.
