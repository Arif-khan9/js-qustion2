// Capitalize First Letter of Each Word
function firstLetterCapital(str) {
  let store = str.split(" ");

  for (let i = 0; i < store.length; i++) {
    store[i] = store[i][0].toUpperCase() + store[i].slice(1);
  }

  return store.join(" ");
}

console.log(firstLetterCapital("my name is arif"));