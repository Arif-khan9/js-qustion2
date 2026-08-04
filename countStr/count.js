

function countStr(arr){
    store = {}
    let store2 = 0
    let str = ""
    for(let i=0;i<arr.length;i++){
      if(store[arr[i]]){
        store[arr[i]]+=1
      }else{
        store[arr[i]]=1
      }
      for(let key in store){
       if(store[key]>store2){
        str=key
        store2=store[key]
       }
      }
    }
    return str

}
console.log(countStr("javaaScrippppt"))