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

// console.log(secondLargest([1,6,8,3,9,9]))
console.log(secondLargest([12, 35, 1, 10, 34, 1]))
console.log(secondLargest([1, 2, 3, 4, 5]))
console.log(secondLargest([10, 20]))







function getSecondLargestElement(arr){
  let secondLargest = 0;
  let largest = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
      secondLargest = largest;
      largest = arr[i];
    } else if(arr[i] > secondLargest && arr[i] < largest){
      secondLargest = arr[i];
    }
  }
  
  return secondLargest 
}

console.log(getSecondLargestElement([12, 35, 1, 10, 34, 1]))
console.log(getSecondLargestElement([1, 2, 3, 4, 5]))
console.log(getSecondLargestElement([10, 20]))