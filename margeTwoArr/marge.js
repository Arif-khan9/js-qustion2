

function margeArr(arr1,arr2){
 let index = 0
 let result =[]
 for(let i=0;i<arr1.length;i++){
    result[index]=arr1[i]
    index++
 }
 for(let i=0;i<arr2.length;i++){
    result[index]=arr1[i]
    index++
 }
 return result
}
console.log(margeArr([1,2,3,4,5],[6,7,8,9,10]))