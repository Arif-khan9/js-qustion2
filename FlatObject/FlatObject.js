// Flatten Nested Object

function flattenObject(obj){
  let res = {};
  let keys = Object.keys(obj);

  for(let i = 0; i < keys.length; i++){
    let key = keys[i];

    if(typeof obj[key] === "object" && obj[key] !== null){
      let temp = flattenObject(obj[key]);

      let innerKeys = Object.keys(temp);
      for(let j = 0; j < innerKeys.length; j++){
        res[innerKeys[j]] = temp[innerKeys[j]];
      }

    } else {
      res[key] = obj[key];
    }
  }

  return res;
}

let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
};

console.log(flattenObject(obj));