function rotatArr(arr){
  for(let i=0;i<arr.length;i++){
    
    let last = arr.pop()
    arr.unshift(last)
     return arr
    
   
  }
}
console.log(rotatArr([1,2,3,4,5]))