// 👉 Ek string me spaces remove karo (without replace)


function removeSpaces(str){
  let result = "";

  for(let i = 0; i < str.length; i++){
    if(str[i] !== " "){
      result += str[i];
    }
  }

  return result;
}

let output = removeSpaces("my name is arif");
console.log(output);