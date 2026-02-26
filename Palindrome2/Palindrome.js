
function sPalindrom(str){
    let newarr = ""
for(let i = str.length -1; i>=0; i--){
 newarr += str[i]
}
if(newarr === str){
    return true
}
return false
}
console.log(sPalindrom("aba"))
console.log(sPalindrom("arif"))
