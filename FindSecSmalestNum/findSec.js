// Find Second Smallest Number in an Array

function secondSmallest(arr){
  let smallest = Infinity;
  let second = Infinity;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
      second = smallest;
      smallest = arr[i];
    } 
    else if(arr[i] < second && arr[i] !== smallest){
      second = arr[i];
    }
  }

  return second;
}

let result = secondSmallest([10, 5, 8, 20, 15]);
console.log(result);