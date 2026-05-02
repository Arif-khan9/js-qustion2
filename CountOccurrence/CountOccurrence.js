// Count Occurrence of Each Character in a String


function countChars(str){
  let result = {};

  for(let i = 0; i < str.length; i++){
    let ch = str[i];

    if(result[ch]){
      result[ch]++;
    } else {
      result[ch] = 1;
    }
  }

  return result;
}

let output = countChars("hello");
console.log(output);