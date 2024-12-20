//  Create a program that takes a student's score as input and prints the corresponding grade (A, B, C, etc.).

function studentScore(grade){
    if (grade >= 90 ){
      return "A";
    } else if (grade <= 89 && grade > 70) {
      return "B";
    } else if (grade <=69  && grade >= 50 ){
      return "C";
    } else {
      return "D";
    }
    };