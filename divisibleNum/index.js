// Check if number is divisible by both 2 and 3.

function isDivisible(num){
  if(num%2===0 && num%3===0){
    return true
  }
  return false
}
console.log(isDivisible(9));