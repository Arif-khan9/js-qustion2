
// assendig order

function isArraySorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;   
        }
    }
    return true;
}


console.log(isArraySorted([4,2,3,4]));