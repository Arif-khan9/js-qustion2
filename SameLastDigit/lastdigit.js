// ⁠JavaScript Program to Check if the Numbers Have Same Last Digit.


function lastdigit(num,num2){
    let store = num.toString()
    let store2 = num2.toString()

    if(store[store.length-1] == store2[store2.length-1]){
     return true
    }

    return false



}
console.log(lastdigit(432,872))