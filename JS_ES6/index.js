//ES6
//Rest & Spread Operator

//Example Rest



function addNumbers(a,b,c,...other) {
  console.log(other[1]);
  return a+b+c;;
}

const result = addNumbers(1,2,3,8,9);

console.log(result);

//Example Spread

let names = ["Jack", "Jackie", "Glen"];

function getNames(name1, name2, name3) {
  console.log(name1);
  console.log(name2);
  console.log(name3);
}

// getNames(names[0], names[1], names[2], names[3])
getNames(...names);