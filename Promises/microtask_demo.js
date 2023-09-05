function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("resolving the promise");
    resolve("Done");
  })
}

setTimeout(function process() {
  console.log("timer completed");
}, 0);

let p = createPromise();
p.then(function fulfillHandler(value) {
  console.log("promise fulfilled with a value", value);
}, function rejectHandler() {});

for(let i = 0; i < 10000000000; i++){}

console.log("ending");

// when promise is resolved or rejected, the handlers present inside the onFulfillment array and onRejection Array
// they are not immediately executed. It doesn't matter whether our promise containes
// synchronous or asynchronous code.


// When no global piece of code is available and callstack is empty at any point of time, if event
// loop has a choice to pick from callback queue or microtask queue, it always gives priority to microtask queue.