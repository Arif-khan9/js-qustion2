// Implement a program that determines whether a given year is a leap year or not.

function isLeapyear(year){
    if(year % 4 === 0){
      if(year % 100 === 0){
        return year % 400 ===0;
      } return true;
    } else {
      return false;
    }
  }