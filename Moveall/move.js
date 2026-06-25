// Move all zeros to the end.

function moveZeros(arr) {
  return arr.sort((a, b) => {
    if (a === 0) return 1;
    if (b === 0) return -1;
    return 0;
  });
}

console.log(moveZeros([1, 0, 2, 0, 3, 4]));