

function arrStr(str){
     let store =  {}
     let store2 = []
  for(let i=0;i<str.length;i++){
  if(store[str[i]]){
      store[str[i]]+=1
  }else{
     store[str[i]]=1
  }
  }
 for(let key in store){
  
  if(store[key]==1){
      store2.push(key)
  }
 }
return store2
}
console.log(arrStr("aabbcddeff"))