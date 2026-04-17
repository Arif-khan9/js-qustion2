// Find Duplicate Elements in an Array
function findDuplicates(arr){
  let duplicates = [];

  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

let result = findDuplicates([1,2,2,3,4,4]);
console.log(result);