// javascript program to clone a js object


const person = {
  name: "Arif",
  age: 21
};

const clone = { ...person };

console.log(clone);