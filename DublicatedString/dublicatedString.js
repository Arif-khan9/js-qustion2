// Dublicated string

function dublicatedstring(str){
  let store = {}
  let store2 = ""
  for(let i=0;i<str.length;i++){
    if(store[str[i]]){
      store2 += str[i]
}else{
  store[str[i]]=1
}
    
  }
  return store2
}
console.log(dublicatedstring("khanarifkae"))