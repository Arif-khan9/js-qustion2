// Remove Last Character from a String

function removeLastChar(str){
  let result = "";

  for(let i = 0; i < str.length - 1; i++){
    result += str[i];
  }

  return result;
}

let output = removeLastChar("hello");
console.log(output);