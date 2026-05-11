// 2.	Prime Number Check:
// // Question: Create a program that checks whether a given number is prime or not.
// // Example Input:

function checkPrime(number) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return number + ' is not a prime number';
        }
    }

    return number + ' is a prime number';
}

console.log(checkPrime(13));
