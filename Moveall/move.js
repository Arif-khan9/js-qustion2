// Move all zeros to the end.


  function moveZeros(arr) {
  return arr.sort((a, b) => (a===0)-(b===0))
}





console.log(moveZeros([1, 0, 2, 0, 3, 4]));