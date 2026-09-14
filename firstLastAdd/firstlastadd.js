// Given an array, remove the first element and add it to the end of the array.

let arr = [0,1,2,3,4,0]

function firstLast(arr){
  store = arr.shift()
  store2 = []
  for(let i=0;i<arr.length;i++){
    store2.push(arr[i])
  }
  store2.push(store)
  return store2
}
console.log(firstLast(arr))