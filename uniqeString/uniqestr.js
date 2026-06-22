

// function uniqeStr(str){
//   let store = {}
//   for(let i=0;i<str.length;i++){
//    store[str[i]] = (store[str[i]] || 0) + 1;
//   }
//   return store
// }
// console.log(uniqeStr("aabccd"))


function uniqueString(str) {
  let store = {};

  for (let i = 0; i < str.length; i++) {
    if (!store[str[i]]) {
      store[str[i]] = 1;
    } else {
      store[str[i]]++;
    }
  }

  return store;
}

console.log(uniqueString("aabccd"));