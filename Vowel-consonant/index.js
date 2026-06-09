// Check if a character is a vowel or consonant.

function isVowel(a){
    if("a"===a || "e"===a || "i"===a || "o"===a  || "u"===a){
       return "vawel"
    }
     return "consonant"
}
console.log(isVowel("c"))

function wovel(str){
  let store ="aeiou";
  let store2 = {}
  for(let i=0;i<str.length;i++){
    if(store.includes(str[i])){
      if(store2[str[i]]){
        store2[str[i]]+=1
      }else{
         store2[ str[i]]=1
      }
     
     
}
  }
  return store2
}
console.log( wovel("yusheefui"))