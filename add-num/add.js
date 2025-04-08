function adNum(...nums){
    return nums.reduce((acc,num)=> acc+num,0)
  }
  console.log(adNum(5,6,8,8,9));