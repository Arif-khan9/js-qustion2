// Check if a given number is a multiple of 3 or 7.

function givenNum(num){
 if(num %3===0 && num %7===0){
    return "both"
  }
   else if(num %3===0){
    return "3"
  }else if(num %7===0){
    return "7"
  }
  return "none"
  
}
console.log(givenNum(29))