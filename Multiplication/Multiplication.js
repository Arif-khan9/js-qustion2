// 6.	Multiplication Table:
// Question: Write a program that generates the multiplication table for a given number.
// Example Input:

function Multiplication(num){
    let arr2 = []
    let arr = 10;
 for(let i=1;i<=arr;i++){
  arr2.push(num*i)
 }
 return arr2
}
console.log(Multiplication(4));

