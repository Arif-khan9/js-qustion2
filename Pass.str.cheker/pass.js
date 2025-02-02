// Implement a program that checks the strength of a password based on criteria such as length, presence of numbers, and special characters.

function checkPasswordStrength(password) {
    let strength = 0;
  
    // Length check
    if (password.length >= 8) {
      strength++;
    }
  
    // Lowercase, uppercase, numbers, special characters
    if (password.match(/[a-z]/)) {
      strength++;
    }
    if (password.match(/[A-Z]/)) {
      strength++;
    }
    if (password.match(/[0-9]/)) {
      strength++;
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
      strength++;
    }
  
    // Strength rating
    switch (strength) {
      case 0:
        return "Very Weak";
      case 1:
      case 2:
        return "Weak";
      case 3:
        return "Medium";
      case 4:
      case 5:
        return "Strong";
    }
  }