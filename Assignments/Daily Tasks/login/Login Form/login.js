
function validateForm() {
    // Clear previous validation messages
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("telephoneError").innerHTML = "";
  
    // Get form input values
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var telephone = document.getElementById("telephone").value.trim();
  
    // Validate username
    if (username === "") {
      document.getElementById("usernameError").innerHTML = "Please enter the username (5-15 characters)";
      document.getElementById("username").style.borderColor = "red";
      return false;
    } else if (username.length < 5 || username.length > 15) {
      document.getElementById("usernameError").innerHTML = "Username must be 5-15 characters";
      document.getElementById("username").style.borderColor = "red";
      return false;
    } else {
      document.getElementById("username").style.borderColor = "green";
    }
  
    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Please enter an email";
      document.getElementById("email").style.borderColor = "red";
      return false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerHTML = "Email must be valid (e.g., me@mydomain.com)";
      document.getElementById("email").style.borderColor = "red";
      return false;
    } else {
      document.getElementById("email").style.borderColor = "green";
    }
  
    // Validate password
    var passwordRegex = /^[a-zA-Z0-9@_-]{8,20}$/;
    if (password === "") {
      document.getElementById("passwordError").innerHTML = "Please enter a password (8-20 characters)";
      document.getElementById("password").style.borderColor = "red";
      return false;
    } else if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").innerHTML = "Password must be alphanumeric and contain (@, _ and - are also allowed)";
      document.getElementById("password").style.borderColor = "red";
      return false;
    } else {
      document.getElementById("password").style.borderColor = "green";
    }
  
    // Validate telephone
    var telephoneRegex = /^\d{10}$/;
    if (telephone === "") {
      document.getElementById("telephoneError").innerHTML = "Please enter a telephone number";
      document.getElementById("telephone").style.borderColor = "red";
      return false;
    } else if (!telephoneRegex.test(telephone)) {
      document.getElementById("telephoneError").innerHTML = "Telephone must be a valid Indian telephone number (10 digits)";
      document.getElementById("telephone").style.borderColor = "red";
      return false;
    } else {
      document.getElementById("telephone").style.borderColor = "green";
    }
  
    // Form is valid
    return true;
  }
  