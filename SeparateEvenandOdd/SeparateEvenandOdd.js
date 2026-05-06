// Separate Even and Odd Numbers from an Array


function separateEvenOdd(arr){
  let even = [];
  let odd = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return { even, odd };
}

let output = separateEvenOdd([1,2,3,4,5]);
console.log(output);