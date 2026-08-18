
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

let arr = [1,5,7,9,100,12,67]

function assending(arr){
    let res 
for(let i=0;i<arr.length;i++){
for(let j=i;j<arr.length;j++){
   if(arr[i]>arr[j]){
    res=arr[i];
    arr[i]=arr[j]
    arr[j]=res
   }
}
}
return arr
}
console.log(assending(arr))