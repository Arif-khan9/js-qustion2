// "SeparateNumbers and Strings from an Array"

function f1(arr) {
  let num = [];
  let str = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      num.push(arr[i]);
    } else {
      str.push(arr[i]);
    }
  }

  console.log(num);
  console.log(str);
}

f1([1, "a", 2, "b"]);