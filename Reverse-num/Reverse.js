// 4.	Reverse a Number:
// Question: Implement a program that takes a number as input and prints its reverse.
// Example Input:

function reverseNUmber(num){
    let rev = 0;
    while(num>0){
        let rem = num%10;
        rev=rev*10 + rem;
        num = Math.floor(num/10);
    }
    return rev;
}