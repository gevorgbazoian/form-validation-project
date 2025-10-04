document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirm");
  const termsCheckbox = document.getElementById("terms");
  const submitBtn = form.querySelector("button[type='submit']");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmError = document.getElementById("confirm-error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateForm() {
    let valid = true;

    if (nameInput.value.trim().length < 2) {
      nameError.textContent = "Please enter at least 2 characters for your name";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (passwordInput.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters";
      valid = false;
    } else {
      passwordError.textContent = "";
    }

    if (confirmInput.value !== passwordInput.value || confirmInput.value === "") {
      confirmError.textContent = "Passwords do not match";
      valid = false;
    } else {
      confirmError.textContent = "";
    }

    if (!termsCheckbox.checked) {
      valid = false;
    }

    submitBtn.disabled = !valid;

    return valid;
  }

  [nameInput, emailInput, passwordInput, confirmInput].forEach((input) =>
    input.addEventListener("input", validateForm)
  );
  termsCheckbox.addEventListener("change", validateForm);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("✅ Registration successful!");
      form.reset();
      submitBtn.disabled = true;
    }
  });
});
