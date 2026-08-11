let arr = [2,7,8,3,6,4]
let target = 11;

function sumAdd(arr){
    let store = []
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            store.push([arr[i],arr[j]])
        }
    }
}

return store
}
console.log(sumAdd(arr))