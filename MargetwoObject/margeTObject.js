//  ⁠JavaScript Program to Merge Property of Two Objects.

const obj1 = {
    name: "arif",
    age: 22,
    // city: "mumbai"
};

const obj2 = {
   city: "mumbai",
   country: "india"
   
};

const margeobject = {
    ...obj1,
    ...obj2
};
console.log(margeobject);
