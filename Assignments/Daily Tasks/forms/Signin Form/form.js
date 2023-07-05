
function validateForm(event) {
  event.preventDefault();
  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");

  validateInput(usernameInput, usernameError, "username", "Please enter a username.", "Characters should be between 5-15.");
  validateInput(passwordInput, passwordError, "password", "Please enter a password.", "Characters should be between 8-15.");

  if (usernameInput.value.trim !== "" && passwordInput.value.trim !== "" && !usernameInput.classList.contains("error") && !passwordInput.classList.contains("error")) {
    // Submit the form if validation passes
    alert("Form submitted successfully!");
  }else{
    window.location = "https://www.achieversit.com"
  }
}

function validateInput(input, errorElement, inputType, emptyErrorMessage, lengthErrorMessage) {
  if (input.value === "") {
    input.classList.remove("success");
    input.classList.add("error");
    errorElement.style.border = "red";
    errorElement.textContent = emptyErrorMessage;
  } else if (input.value.length < 5 || input.value.length > 15) {
    input.classList.add("error");
    errorElement.style.border = "red";
    errorElement.textContent = lengthErrorMessage;
  } else {
    input.classList.remove("error");
    input.classList.add("success");
    errorElement.textContent = "";
  }
}

function validateUsername() {
  var usernameInput = document.getElementById("username");
  var usernameError = document.getElementById("usernameError");

  validateInput(usernameInput, usernameError, "username", "Please enter a username.", "Characters should be between 5-15.");
}

function validatePassword() {
  var passwordInput = document.getElementById("password");
  var passwordError = document.getElementById("passwordError");
  
  validateInput(passwordInput, passwordError, "password", "Please enter a password.", "Characters should be between 8-15.");
}