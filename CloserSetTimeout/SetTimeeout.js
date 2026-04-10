// Closure + setTimeout + var vs let

for(var i=0; i<3; i++){
  setTimeout(() => console.log(i), 1000);
}