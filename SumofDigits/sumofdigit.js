// Sum of Digits in a String

function sumDigits(str){
  let sum = 0;

  for(let i = 0; i < str.length; i++){
    if(!isNaN(str[i])){
      sum += Number(str[i]);
    }
  }

  return sum;
}

console.log(sumDigits("a1b2c3")); 