let count = 0;
let y = setInterval(function exec() {
    count++;
    console.log(count);
    if(count > 15) {
        clearInterval(y);
    }
}, 2000);

for(let i = 0; i < 100000000000000; i++) {
    //some task
}

console.log("End");