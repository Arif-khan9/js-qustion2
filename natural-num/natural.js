// 3.	Sum of Natural Numbers:
// Question: Write a program to calculate the sum of all natural numbers up to a given number ￼.
// Example Input:
function natural(num){
  let store = 0
  for(let i=1;i<=num;i++){
    store = store+i
  }
  return store
}

console.log(natural(10))