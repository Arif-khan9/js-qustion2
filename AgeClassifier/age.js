//  Implement a program that categorizes a person's age into "Child," "Teenager," "Adult," or "Senior."


function categorizeAge(age) {
    if (age < 13) {
      return "Child";
    } else if (age >= 13 && age < 18) {
      return "Teenager";
    } else if (age >= 18 && age < 65) {
      return "Adult";
    } else {
      return "Senior";
    }
  }
  