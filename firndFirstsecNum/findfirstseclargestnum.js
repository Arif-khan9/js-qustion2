// Find Second Largest Number in an Array

function secondLargest(arr){
  let first = -Infinity;
  let second = -Infinity;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > first){
      second = first;
      first = arr[i];
    } 
    else if(arr[i] > second && arr[i] !== first){
      second = arr[i];
    }
  }

  return second;
}

let result = secondLargest([5,1,9,3]);
console.log(result);