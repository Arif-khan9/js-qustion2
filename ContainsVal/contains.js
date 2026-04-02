// Check if Array Containa a value

function contains(arr, value){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === value){
            return true
        }

    }
    return false
}
console.log(contains([10,20,30], 20))
