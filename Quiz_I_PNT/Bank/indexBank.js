// class Vars
var password = {};
var strikes = 3;

// llama la funcion al cargar la ventana
window.onload = function () {
  // genera contraseña aleatoria de 4 digitos
    //ciclo for para guardar en array password[]
  for (let i = 0; i < 4; i++) {
    password[i] = Math.floor(Math.random() * 10);
  }

  // print de la contraseña en consola
  for (let i = 0; i < 4; i++) {
    console.log(password[i]);
  }
};

// llama funcion con un 'listener' de input en los campos de texto
  // args: 1) campo de texto actual 2) id del siguiente campo
function moveToNextInput(currentInput, nextInputId) {
  // valor del campo de texto
  let inputValue = currentInput.value;

  // regex: Solo permite # y un solo digito (borra inputs de texto siguientes si ya hay uno existente)
  inputValue = inputValue.replace(/[^0-9]/g, "");

  currentInput.value = inputValue;

  // revisa longitud del campo de texto === 1 y cambia el 'focus' al siguiente campo de texto con el id
  if (inputValue.length === 1) {
    const nextInput = document.getElementById(nextInputId);
    if (nextInput) {
      nextInput.focus();
    }
  }
}

// llama funcion con 'onClick()'
function onClickHandler() {
  // llama funcion 'match()' retorna boolean
  if (match()) {
    // redirecciona a cuenta bancaria de usuario
      // reset de 'strikes'
    strikes = 3;
    window.location.href = "/Quiz_I_PNT/Bank/logInBank.html";
  } else {
    // si retorna falso resta un 'strike'
      // genera HTML de error como aviso visual para usuario
    strikes--;
    document.getElementById("container_error").innerHTML =
      "<h4>Wrong password try again</h4><h5 id='error_msg'></h5>";
    document.getElementById("error_msg").innerText =
      "Attempts remaining: " + strikes;
    // revisa cantidad de 'strikes' restantes, en 'strikes' === 0 cierra pagina
    if (strikes === 0) {
      window.close();
    }
  }
}

// llamada por funcion 'onClickHandler'
function match() {
  //compara clave digitada con clave generada, retorna boolean
  for (let i = 0; i < 4; i++) {
    if (password[i] != document.getElementById("num" + i).value) {
      return false;
    }
  }

  return true;
}
