// Count Uppercase Letters in a String

function countUppercase(str){
  let count = 0;

  for(let i = 0; i < str.length; i++){
    let ch = str[i];

    if(ch >= 'A' && ch <= 'Z'){
      count++;
    }
  }

  return count;
}


console.log( countUppercase('ArIfKHan'));