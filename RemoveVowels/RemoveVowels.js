// Remove Vowels from a String


function removeVowels(str){
  let result = "";
  let vowels = "aeiouAEIOU";

  for(let i = 0; i < str.length; i++){
    if(!vowels.includes(str[i])){
      result += str[i];
    }
  }

  return result;
}

let output = removeVowels("javascript");
console.log(output);