// Find Second Largest Number

function secondLargest(arr) {
  arr.sort((a, b) => b - a);

  let first = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return arr[i];
    }
  }
}

console.log(secondLargest([1,6,8,3,9]))