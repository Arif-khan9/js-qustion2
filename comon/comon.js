function commonElements(arr1,arr2){
    let commonElementsArr = []
 for(let i=0; i<arr1.length;i++){
    if(arr2.includes(arr1[i])){
        commonElementsArr.push(arr1[i])
    }
 }
 return commonElementsArr
}
console.log(commonElements([1,2,3,4],[4,3,5,2]));
