// Convert Only Strings in Array to Uppercase


function convertStrings(arr){
  let result = [];

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "string"){
      result.push(arr[i].toUpperCase());
    }
  }

  return result;
}

let output = convertStrings([1, "hello", 2, "world"]);
console.log(output);