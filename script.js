const inputs = document.querySelectorAll(".input");
const nameInput = document.querySelector(".nameInput");
const surnameInput = document.querySelector(".surnameInput");
const mailInput = document.querySelector(".mailInput");
const phoneInput = document.querySelector(".phoneInput");
const errText = document.querySelectorAll(".errText");

// details page credentials
const userNameText = document.querySelector(".userNameText");
const usermailText = document.querySelector(".usermailText");
const userphoneText = document.querySelector(".userphoneText");

const btnSubmit = document.querySelector(".btnSubmit");

let isError = false;

btnSubmit.addEventListener("click", (e) => {
  isError = false;
  e.preventDefault();
  trimmerFunction();
  checkInputs();
  takeInfo();
  resetInputs();
});

function trimmerFunction() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = inputs[i].value.trim();
  }
}

function checkInputs() {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      errText[i].textContent = "This field is required";
      isError = true;
    } else {
      errText[i].textContent = "";
    }
  }
}

function takeInfo() {
  if (!isError) {
    submitInfo(
      nameInput.value,
      surnameInput.value,
      mailInput.value,
      phoneInput.value
    );
  }
}

function submitInfo(nameValue, surnameValue, mailValue, phoneValue) {
  let obj = {
    name: nameValue,
    surname: surnameValue,
    mail: mailValue,
    phone: phoneValue,
  };

  localStorage.setItem("info", JSON.stringify(obj));
  window.location.href = "./profileInfo.html";
}

function resetInputs() {
  if (!isError) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    isError;
  }
}

function renderInfo() {
  let info = JSON.parse(localStorage.getItem("info"));
  if (info) {
    userNameText.innerHTML = `${info.name} ${info.surname}`;
    usermailText.innerHTML = info.mail;
    userphoneText.innerHTML = info.phone;
  }
}
