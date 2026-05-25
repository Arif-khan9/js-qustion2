// Find Second Largest Number

function secondLargest(arr) {
  let largestNum = 0
  let secLargestNum = 0
  for(let i=0; i<arr.length;i++){

    if(arr[i]  > largestNum){
     
      
      secLargestNum = largestNum
      largestNum = arr[i]
    }


  }
  return secLargestNum
}

console.log(secondLargest([1,6,8,3,9]))