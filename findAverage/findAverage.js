//  find  findAverage

function findAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
}

console.log(findAverage([10,20,30,40]));