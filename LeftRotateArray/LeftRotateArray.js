// Left Rotate an Array by 1 Position



function leftRotate(arr){
  let first = arr[0];    
  let result = [];

  for(let i = 1; i < arr.length; i++){
    result.push(arr[i]); 
  }

  result.push(first);    

  return result;
}

let output = leftRotate([1,2,3,4]);
console.log(output);