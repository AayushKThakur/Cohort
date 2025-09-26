//filtering
// what if I tell u given an input array, give me back all the even values from it

const arr = [1, 2, 3, 4, 5];

// ans
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);

//filter
const arr1 = [1, 2, 3, 4, 5];
// ans
const ans = arr.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans);

const arr2 = ["harkirat", "raman", "prash"];
// ans
// const ans2 = arr2.filter(function (n) {
const ann2 = arr2.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans);
