const checkValidData = (email, password, fullName="") => {
  // Implement validation logic 
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password); // Example: Password must be at least 8 characters long
  const isFullNameValid = fullName === ""||fullName.trim().length >= 2; // Example: Full name must be at least 2 characters long

  if(!isEmailValid) {
    return "Please enter a valid email address.";
  }
  if(!isPasswordValid) {
    return "Password is not valid .";
  }
  if(!isFullNameValid) {
    return "Please enter a valid full name.";
  }

  return null;
};

export { checkValidData };