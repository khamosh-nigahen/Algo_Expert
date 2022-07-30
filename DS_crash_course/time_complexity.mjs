import { performance } from "perf_hooks";

console.time("calProgExecTime");

const arr = [];

for (let i = 0; i < 10000; i++) {
  arr[i] = i;
}

let startTimeFunc1 = performance.now()

function func1(arr) {
  return arr[0];
}

let endTimeFunc1 = performance.now()

let startTimeFunc2 = performance.now()

function func2(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

let endTimeFunc2 = performance.now()

console.log(func1(arr));
console.log(func2(arr));

console.log(endTimeFunc1 - startTimeFunc1)
console.log(endTimeFunc2 - startTimeFunc2)

console.timeEnd("calProgExecTime");
