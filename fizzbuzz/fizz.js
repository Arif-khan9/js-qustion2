// FizzBuzz” if i is divisible by 3 and 5,
// “Fizz” if i is divisible by 3,
// “Buzz” if i is divisible by 5
// “i” as a string, if none of the conditions are true.

function fizzbuzz(num){
    if(num % 5 === 0 && num % 3 === 0){
        return "fizzbuu"
    }else if(num % 5 === 0){
        return "buzz"
    }else if(num % 3 === 0){
        return "fizz"
    }else{
        return num
    }
}
console.log(22);
