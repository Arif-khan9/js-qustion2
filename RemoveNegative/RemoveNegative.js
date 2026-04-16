// Remove Negative Numbers from Array

function removeNegative(arr){
  let result = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
      result.push(arr[i]);
    }
  }

  return result;
}

let output = removeNegative([1,-2,3,-4,5]);
console.log(output);