// function negativeNum(arr) {
//   return arr.filter((e)=> e<0)
// }

// console.log(negativeNum([10, -23, 5, -9, 8, -8]));


function negative(num){
  let store = []
for(let i=0;i<num.length;i++){
  if(num[i] <0){
   store += num[i]
  }
}
return store
}
console.log(negative([10, -23, 5, -9, 8,  -8]))
