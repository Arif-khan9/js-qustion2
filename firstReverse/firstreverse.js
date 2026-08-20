    let str = "Arif Khan"

    function firstRemove(str){
        let store = []
    let arr = str.split(" ")
    for(let i=0;i<arr.length;i++){
        console.log(i)
    if(i==0){
            store.push(arr[i].split("").reverse().join(""))
    }else{
        store.push(arr[i])
    }
    }
    return store
    }
    console.log(firstRemove(str))