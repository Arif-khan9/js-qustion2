// Find Minimum and Maximum in an Array

function findMinMax(arr){
  let min = arr[0];
  let max = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }

    if(arr[i] > max){
      max = arr[i];
    }
  }

  return { min, max };
}

let result = findMinMax([5,1,9,3]);
console.log(result);