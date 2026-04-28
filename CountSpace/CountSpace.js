// Count Spaces in a String


function countSpaces(str){
  let count = 0;

  for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
      count++;
    }
  }

  return count;
}

let output = countSpaces("my name is arif");
console.log(output);