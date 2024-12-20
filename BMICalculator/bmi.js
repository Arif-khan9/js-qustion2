//  Create a program that calculates the Body Mass Index (BMI) based on user input and categorizes it as "Underweight," "Normal," "Overweight," or "Obese."

function calculateBMI(weight, height) {
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Categorize BMI
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }