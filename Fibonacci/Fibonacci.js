// 7.	Fibonacci Sequence:
// Question: Create a program that prints the first ￼ terms of the Fibonacci sequence.
// Example Input:

function fibonacci(num){
    let fistNum = 0;
    let secondNum =1;
    let nexttNum;
  for(let i=0;i<num;i++){
   console.log(fistNum)
   nexttNum = fistNum+secondNum;
fistNum = secondNum
secondNum= nexttNum 
  }
}

console.log(fibonacci(5))