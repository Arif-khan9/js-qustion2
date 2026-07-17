
let arr = [
  {
    name: "arif",
    city: "mumbai"
  },
  {
    name: "sameer",
    city: "delhi"
  },
  {
    name: "suhel",
    city: "lucknow"
  },
  {
    name: "abdul",
    city: "delhi"
  },
  {
    name: "ayan",
    city: "lucknow"
  },
  {
    name: "ajmal",
    city: "varanasi"
  },
  {
    name: "akram",
    city: "mumbai"
  }
];

function sortArr(arr) {
  let store = {};

  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i].city]) {
      store[arr[i].city].push(arr[i].name);
    } else {
      store[arr[i].city] = [arr[i].name];
    }
  }

  return store;
}

console.log(sortArr(arr));
