// given an array, give me back a new array in
// which every value is multiplied by 2
// [1,2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5];

/// solution
// const newArray = [];
// for (let i = 0 i < input.length; i++) {
//      newArray.push(input[i] * 3);
//}
// console.log(newArray);
/// other solution

function transform(i) {
  return i * 2;
}
const ans = input.map(transform);
console.log(ans);

//OR

const input1 = [1, 2, 3, 4, 5];
const ans1 = input.map(function (i) {
  return i * 2;
});
console.log(ans);

// create a map function that takes 2 inputs
// an array, and a transforamtion callback/fn
// and transofrms the array into a new one using
// the transformation fn

const map = (arr, fn) => {
  const transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr.push(fn(arr[i]));
  }
  return transformedArr;
};
