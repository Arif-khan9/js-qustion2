// 👉 Find Most Frequent Character in a String

function maxChar(str){
  let obj = {};
  let maxCount = 0;
  let maxChar = "";

  for(let i = 0; i < str.length; i++){
    let char = str[i];

    // count increase
    obj[char] = (obj[char] || 0) + 1;

    // check max
    if(obj[char] > maxCount){
      maxCount = obj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

let result = maxChar("aabbbcc");
console.log(result);