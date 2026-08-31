

const str="anonymouszcoder"

function strCount(str){
  let store = {}
  let arr = "z"
  for(let i=0;i<str.length;i++){
      if(store[str[i]] && str[i] !== arr){
      store[str[i]]+=1
    }else if (str[i] !== arr){
      store[str[i]]=1
    }
  }
  return store
}
console.log(strCount(str))
