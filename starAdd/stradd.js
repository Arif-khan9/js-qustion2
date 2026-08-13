

let email="ak59755@gmail.com"
// outpush ="a*******@gmail.com"


function removeEmail(str){
    let data =[]
    let store = []
for(let i=0;i<str.length;i++){
//    console.log(str[i])
   if(!data.includes("@") && i > 0){
    store.push("*")
     data.push(str[i])
   }else{
    store.push(str[i])
   }
}
return store.join("")
}
console.log(removeEmail(email))