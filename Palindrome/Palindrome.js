// 5.	Palindrome Check:
// Question: Create a program that checks whether a given string or number is a palindrome.
// Example Input:


let str = 'jahaj';
let n = str.length;
console.log(checkPalindrome(str,n));
function  checkPalindrome(str,n){
    for(let i = 0;i<n; i++){
        if(str[i] != str[n-1-i]){
            return false;
        }
    }
    return true;
}