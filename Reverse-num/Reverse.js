// 4.	Reverse a Number:
// Question: Implement a program that takes a number as input and prints its reverse.
// Example Input:

function reverseNUmber(arr){
    let arr2 = []
   for(let i=arr.length -1; i>=0; i--){
    arr2.push(arr[i])
   }
   return arr2
}
console.log(reverseNUmber([1,2,3,4]))