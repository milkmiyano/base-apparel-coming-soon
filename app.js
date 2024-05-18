const emailField = document.getElementById("email-field");
const emailError = document.getElementById("emailerror");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const iconError = document.getElementById("icon-error");

function validateEmail() {
  if (emailField.value === "") {
      emailError.innerHTML = "";
      emailField.style.borderColor = "";
      iconError.style.display = "";
      return true; 
  } else if (emailField.value.match(emailRegex)) {
      emailError.innerHTML = "";
      emailField.style.borderColor = "";
      return true; 
  } else {
      emailError.style.color = "hsl(0, 93%, 68%)";
      emailField.style.border = "2px solid hsl(0, 93%, 68%)";
      emailError.innerHTML = "Please provide a valid email";
      iconError.style.display = "block"
      return false; 
  }
}

emailField.addEventListener('keyup', validateEmail);

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  if (!validateEmail()) {
    event.preventDefault(); 
  }
});
