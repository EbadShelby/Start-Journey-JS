console.log("change value:");
const nums = [10, 20, 30];
console.log(nums);
nums[2] = 90;
console.log(nums);
console.log("last value:");
console.log(getLastValue(nums));
console.log("swap value:");
console.log(arraySwap(nums));

function getLastValue(nums) {
  let lastIndex = nums.length - 1;
  return nums[lastIndex];
}

function arraySwap(nums) {
  let lastIndex = nums.length - 1;
  let firstNum = nums[0];

  nums[0] = nums[lastIndex];
  nums[lastIndex] = firstNum;

  return nums;
}

console.log("count by 2:");

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
console.log("count by -1:");

for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("count by 2 in while:");
let i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}
console.log("count by -1 in while:");
let i2 = 5;
while (i2 > 0) {
  console.log(i2);
  i2--;
}

console.log("increase list by 1:");

const numList = [2, 2, 2];
const newNumList = [];
console.log(numList);
for (let i = 0; i < numList.length; i++) {
  newNumList.push(numList[i] + 1);
}
console.log(newNumList);

console.log("increase list by 1 function:");
function addOne(nums) {
  const newNumList = [];
  console.log(numList);
  for (let i = 0; i < numList.length; i++) {
    newNumList.push(nums[i] + 1);
  }
  return newNumList;
}
console.log(addOne(numList));

console.log("Challenge Exercises:");

minMax([3]);

function minMax(nums) {
  let min = nums[0] || null;
  let max = nums[0] || null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  console.log(`min: ${min}, max: ${max}`);
}
