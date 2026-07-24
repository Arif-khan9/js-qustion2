
let arr=[
    {id:2,name:"youshuf",age:25},

    {id:1,name:"arif",age:23},
    {id:1,name:"arif",age:23},

    
]

function object(arr){
    let store = []
    let store2 = []
  for(let i=0;i<arr.length;i++){
    // console.log(arr[i])
   if(!store.includes(arr[i].id)){
      store.push(arr[i].id)
     store2.push(arr[i])

   }
   
    
  }
  return store2
}
console.log(object(arr))