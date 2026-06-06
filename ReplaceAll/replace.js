// ⁠JavaScript Program to Replace All Occurrences of a String.

let str = "i like javascript since javascript is single threaded!!!"

// let store = str.replaceAll("javascript",  "React")

// console.log(store)

function strReplace(str,value,replacer){
    let arr = str.split(" ");
    console.log("arr", arr);
    

   for(let i=0;i<arr.length;i++){
    console.log("[i]", i);
 console.log("arr[i]", arr[i]);

    
    if(arr[i] === replacer){
        arr[i] = value
    }
   }
   return arr.join(" ")
}
console.log(strReplace(str,"React","javascript"));

