// my sol

function nestedAdd(array) {
    // write code here
    let sum = 0;
    return helperNestedArray(array, sum)
}

function helperNestedArray(array, sum) {
    for (let i of array) {
        if (Array.isArray(i)) {
            sum = helperNestedArray(i, sum);
        } else {
            sum = sum + i;
        }
    }
    return sum;
}

//   test.skip("nested arrays addition", () => {
//     expect(nestedAdd([1, 2, 3])).toEqual(6);
//     expect(nestedAdd([1, [2], 3])).toEqual(6);
//     expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
//     expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
//   });

console.log(nestedAdd([1, 2, 3]));
console.log(nestedAdd([1, [2], 3]));
console.log(nestedAdd([[[[[[[[[5]]]]]]]]]));
