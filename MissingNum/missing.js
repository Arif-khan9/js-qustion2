// find Missing Number
let arr = [1,3,5,7,9]


function misingNum(arr){
  let store2 = []
  let store = 0
 for(let i=0;i<arr.length;i++){
  if(store<arr[i]){
    store = arr[i]
  }
 }
 for(let j=1;j<store;j++){
  if(!store2.includes(j)){
    store2.push(j)
  }
 }
 return store2
}
console.log(misingNum(arr))