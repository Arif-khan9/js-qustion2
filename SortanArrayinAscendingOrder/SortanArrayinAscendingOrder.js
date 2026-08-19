

let arr = [2,4,5,8,3,2,3]
let arr2 = [9,5,8,3,2,8]

let arr3 = [...arr ,...arr2]

function countNum(arr3){
  let store = []
  for(let i=0;i<arr3.length;i++){
    if(!store.includes(arr3[i])){
      store.push(arr3[i])
    }
  }
  return store.sort((a,b)=>a-b)
}
console.log(countNum(arr3))