function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithSetTimeout() {
  return new Promise(function executor (resolve, reject) { 
    console.log("Entering the executor callback in the promise constructor");
    setTimeout(function () {
      let num = getRandomInt(10);
      if(num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }

    }, 1000)
    console.log("Exiting the executor callback in the promise constructor");
});
}

console.log("Starting....");
const p = createPromiseWithSetTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like ... ", p);
console.log("Going To register my first set of handlers");

p.then(
  function fulfillHandler1(value) {
    console.log("Inside fulfill handler 1 with value", value);
    console.log("Promise after fulfillment 1 is", p);
  setTimeout(function () {
   console.log("Ended 0s timer");
    }, 0);
   console.log("exiting the fulfill handler 1");
  },

  function rejectionHandler1(value) {
    console.log("Rejection handler 1 with value", value);
    console.log("Promise after rejection 1 is", p);

    setTimeout(function () {
      console.log("Ended 0s timer");
       }, 0);
      console.log("exiting the rejection handler 1");
  }
)

console.log("Going to register my second set of handlers");

p.then(
  function fulfillHandler2(value) {
    console.log("Inside fulfill handler 2 with value", value);
    console.log("Promise after 2 fulfillment is", p)
    },
  function rejectionHandler2(value) {
    console.log("Rejection handler 2 with value", value);
    console.log("Promise after 2 rejection is", p);
  }
)

console.log('Ending...');

// for(let i = 0; i < 10000000000; i++) {}
// console.log("Ending the loop also...")

setTimeout(() => {
console.log("Global timer of 0s")
}, 1000);

