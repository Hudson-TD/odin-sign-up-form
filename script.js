const passwordInput = document.getElementById("user-password");
const passwordConfirmationInput = document.getElementById("confirm-password");
const submitBtn = document.getElementById("signup-button");

const passwordErrorText = document.getElementById("password-error");
const passwordConfirmationErrorText = document.getElementById(
  "password-confirmation-error"
);

let warning = document.createElement("p");
passwordErrorText.appendChild(warning);
let isFocused = document.activeElement === passwordInput;

function checkPassword() {
  password1 = passwordInput.value;
  password2 = passwordConfirmationInput.value;
  if (password1 != password2) {
    warning.innerText = "* Passwords do not match";
    warning.style.cssText = "color:red;";
  } else {
    warning.innerText = "Passwords match";
    warning.style.cssText = "color:green;";
  }
}

passwordInput.addEventListener("input", checkPassword);
passwordConfirmationInput.addEventListener("input", checkPassword);