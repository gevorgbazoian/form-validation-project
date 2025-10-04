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
      nameError.textContent = "Մուտքագրեք անվան առնվազն 2 տառ";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Մուտքագրեք վավեր էլ․ փոստ";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (passwordInput.value.length < 8) {
      passwordError.textContent = "Գաղտնաբառը պետք է լինի առնվազն 8 նիշ";
      valid = false;
    } else {
      passwordError.textContent = "";
    }

    if (confirmInput.value !== passwordInput.value || confirmInput.value === "") {
      confirmError.textContent = "Գաղտնաբառերը չեն համընկնում";
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
      alert("✅ Գրանցումը հաջողությամբ ավարտվեց!");
      form.reset();
      submitBtn.disabled = true;
    }
  });
});
