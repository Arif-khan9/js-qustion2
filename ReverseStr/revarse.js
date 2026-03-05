// revarse string

function revarseStr(str){
    let arr = []
    for(let i = str.length -1; i>=0; i--){
        arr += str[i]
    }
    return arr
}
console.log(revarseStr("arif"))