const cardMain = document.querySelector(".card");
const form = document.getElementById("card-form");
const messageError = document.getElementById("email-error");
const inputEmail = document.getElementById("email");
const modalSuccess = document.querySelector(".modal-success");
const userEmail = document.getElementById("confirmed-email");
const buttonDismiss = document.getElementById("button-dismiss");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = inputEmail.value.trim();

  const isValid = validateEmail(email);

  if (isValid) {
    showSuccess(email);
  } else {
    showError();
  }
});

function showSuccess(email) {
  cardMain.classList.add("hidden");
  modalSuccess.classList.remove("hidden");
  modalSuccess.classList.add("active");

  userEmail.innerHTML = email;
}

function showError() {
  messageError.classList.remove("hidden");
  messageError.classList.add("active");
  inputEmail.classList.add("error");
}

inputEmail.addEventListener("input", () => {
  messageError.classList.remove("active");
  messageError.classList.add("hidden");

  inputEmail.classList.remove("error");
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

buttonDismiss.addEventListener("click", () => {
  modalSuccess.classList.remove("active");
  modalSuccess.classList.add("hidden");

  cardMain.classList.remove("hidden");

  inputEmail.value = "";
});
