// JavaScript Program to Find the Square Root


function findsquareRoot(num){
    for(let i=1;i<=num;i++){
        if(i*i===num){
         return i
        }
    }
    return "Square root not found"
}

console.log(findsquareRoot(25));


