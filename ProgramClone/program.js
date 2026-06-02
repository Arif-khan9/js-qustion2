// javascript program to clone a js object
// using Object.assign() method

// creating a js object
const obj1 = {
    name: "John",
    age: 30,
    city: "New York"
};

// cloning the object using Object.assign() method
const obj2 = Object.assign({}, obj1);

// displaying the original and cloned objects
console.log("Original Object:", obj1);
console.log("Cloned Object:", obj2);

// modifying the cloned object
obj2.name = "Jane";
obj2.age = 25;