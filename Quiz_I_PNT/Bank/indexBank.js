var password = {};
var strikes = 3;

window.onload = function () {
  for (let i = 0; i < 4; i++) {
    password[i] = Math.floor(Math.random() * 10);
  }

  for (let i = 0; i < 4; i++) {
    console.log(password[i]);
  }
};

function moveToNextInput(currentInput, nextInputId) {
  let inputValue = currentInput.value;

  inputValue = inputValue.replace(/[^0-9]/g, "");

  currentInput.value = inputValue;

  if (inputValue.length === 1) {
    const nextInput = document.getElementById(nextInputId);
    if (nextInput) {
      nextInput.focus();
    }
  }
}

function onClickHandler() {
  if (match()) {
    strikes = 3;
  } else {
    strikes--;
    document.getElementById("container_error").style.backgroundColor = "white";
    document.getElementById("container_error").innerHTML =
      "<h4>La contraseña es incorrecta</h4><h5 id='error_msg'></h5>";
    document.getElementById("error_msg").innerText =
      "Intentos restantes: " + strikes;
    if (strikes === 0) {
      window.close();
    }
  }
}

function match() {
  for (let i = 0; i < 4; i++) {
    if (password[i] != document.getElementById("num" + i).value) {
      return false;
    }
  }

  return true;
}
