// . Minimum Number Find karo

function findMin(arr) {
  let arr2 = 0
  for(let i=1; i<arr.length;i++){
    if(arr[i] < arr2){
        arr2 = arr[i]
    }
  }
  return arr2
}

console.log(findMin([10, 5, 20, 8])); 