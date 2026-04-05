// Remove Falsy Values

function removeFalsy(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsy([0, "hello", false, "", 5, null]));
