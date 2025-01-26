// 7.	Fibonacci Sequence:
// Question: Create a program that prints the first ￼ terms of the Fibonacci sequence.
// Example Input:

let num1= 0;
let num2= 1;
let numberOfElements = 10;
console.log(num1);
console.log(num2);
for( i =2;i<numberOfElements;i++){
    let num3 = num1 +num2; //0+1 = 1;
    console.log(num3);//1
    num1 = num2; //1
    num2 = num2; //1
    
}