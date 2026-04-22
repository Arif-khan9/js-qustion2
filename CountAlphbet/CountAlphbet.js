// Ek function likho jo string me sirf alphabets count kare (numbers ignore)

function countAlphabets(str){
  let count = 0;

  for(let i = 0; i < str.length; i++){
    let ch = str[i];

    if(
      (ch >= 'a' && ch <= 'z') ||
      (ch >= 'A' && ch <= 'Z')
    ){
      count++;
    }
  }

  return count;
}

let result = countAlphabets("a1b2c3d");
console.log(result);