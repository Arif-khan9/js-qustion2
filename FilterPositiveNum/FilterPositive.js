// Filter Positive Numbers from an Array

function getPositive(arr){
  let result = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      result.push(arr[i]);
    }
  }

  return result;
}

let output = getPositive([1,-2,3,-4,5]);
console.log(output);