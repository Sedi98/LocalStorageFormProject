// registration page credentials
const inputs = document.querySelectorAll(".input");
const nameInput = document.querySelector(".nameInput");
const surnameInput = document.querySelector(".surnameInput");
const mailInput = document.querySelector(".mailInput");
const phoneInput = document.querySelector(".phoneInput");
const errText = document.querySelectorAll(".errText");
const btnSubmit = document.querySelector(".btnSubmit");
// details page credentials
const userNameText = document.querySelector(".userNameText");
const usermailText = document.querySelector(".usermailText");
const userphoneText = document.querySelector(".userphoneText");
// if error get true or false
let isError = false;



// trim all inputs values before submit
function trimmerFunction() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = inputs[i].value.trim();
  }
}

// check if inputs are empty and if empty display error
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
// if all inputs are not empty and isError is false take info
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


// create a object and submit data
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


// after successfully submit then reset inputs
function resetInputs() {
  if (!isError) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    isError;
  }
}


// render all info on next page
function renderInfo() {
  let info = JSON.parse(localStorage.getItem("info"));
  if (info) {
    userNameText.innerHTML = `${info.name} ${info.surname}`;
    usermailText.innerHTML = info.mail;
    userphoneText.innerHTML = info.phone;
  }
}



// do all of this functions when button is clicked
btnSubmit.addEventListener("click", (e) => {
  isError = false;
  e.preventDefault();
  trimmerFunction();
  checkInputs();
  takeInfo();
  resetInputs();
});
