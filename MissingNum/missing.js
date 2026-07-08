// find Missing Number
function misingNum(num){
  let res = []
  for(let i=1;i<num.at(-1);i++){
  
    if(!num.includes(i)){
      res.push(i)
    }
  }
  return res
}
console.log(misingNum([1,3,4,5,6,8,10,19]))