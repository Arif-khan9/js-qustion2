// 2.	Prime Number Check:
// // Question: Create a program that checks whether a given number is prime or not.
// // Example Input:

let number = 17;
let flag =0;
for(i=2;i<number;i++){
    if(number%i == 0){
        flag = 1;
        break;
    }
}
if(flag){
    alert(number+'is not a prime number')
}else{
    alert(number+'is a prime number')
}