
const obj=[
    {name: "arif",age:  22,email: "ak",veryfied: true},
    {name: "karan",age:  34,email: "ac",veryfied: false},
    {name: "suehel",age:  23,email: "dk",veryfied: true},
    {name: "sameer",age:  32,email: "cf",veryfied: false},

]

function arr(obj){
    let store = []
 for(let i=0;i<obj.length;i++){
    if(obj[i].veryfied===true){
      store.push(obj[i])
    }
    
 }
 return store
}
console.log(arr(obj))