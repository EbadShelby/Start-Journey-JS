console.log("create index finder");
const arr = ["hello", "world", "search", "good"];

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] === "search") {
    console.log(i);
    break;
  } else {
    if (i === arr.length) {
      console.log(-1);
    }
  }
}
console.log("create index finder function");
function findIndex(array, word) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === word) {
      return console.log(i);
    }
  }
  console.log(-1);
}

findIndex(arr, "search");

console.log("remove egg function");
let foods = ["egg", "apple", "egg", "egg", "beef"];
console.log(foods);

function removeEgg(foods) {
  let newFoods = [];
  let removedEgg = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      removedEgg++;
      if (removedEgg > 2) {
        newFoods.push(foods[i]);
      }
      continue;
    } else {
      newFoods.push(foods[i]);
    }
  }
  return console.log(newFoods);
}

removeEgg(foods);

console.log("FizzBUzz Problem");
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
    continue;
  } else if (i % 5 === 0) {
    console.log("Buzz");
    continue;
  }
  console.log(i);
}
