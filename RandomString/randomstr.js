// ⁠JavaScript Program to Generate Random String.


function randomString(num){
    let store = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
    let store2 = []
    for(let i =0;i<num;i++){
      let otp = Math.floor(Math.random() *store.length)
      store2 += store[otp]
    }

    return store2

}
console.log(randomString(4))