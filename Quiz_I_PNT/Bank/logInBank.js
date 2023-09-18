// class vars
var balance = 0;
  // texto 'display' de balance de usuario
var balanceText = document.getElementById("balance");
  // campo de texto cantidad digitada por usuario
var inputField = document.getElementById("txtField_transaction");

// llama funcion con 'onClick()' de usuario en botones principales
function onClickHandleTransaction(transactionType) {
  //valor en texto de transaccion
  let transactionValue = document.getElementById("txtField_transaction").value;

  console.log(transactionValue);

  // omite accion si campo es 0 o vacio
  if (transactionValue != "" && transactionValue != 0) {
    // text => int
    transactionValue = parseInt(transactionValue);
    // transaccion tipo 1 (deposito)
    if (transactionType === 1) {
      updateText(transactionValue);
      registerTransaction(transactionValue);
    // if: valor de transaccion menor a balance total
    } else if (transactionValue <= balance) {
    // transaccion tipo 2 (retiro)
      transactionValue = transactionValue * -1;
      updateText(transactionValue);
      registerTransaction(transactionValue);
    } else {
      //alerta balance insuficiente
      alert("You can't withdraw more than your current balance");
    }
  }
}

// llama funcion 'onClickHandleTransaction()'
  // args: 1) valor de la transaccion
function registerTransaction(value) {
  // constantes HTML con CSS para actualizacion de interfaz
  const withdrawHTML =
    "<div class='container_receipt'><h3 class='negative'>Withdraw: $transactionValue</h3><h4>transactionTime</h4></div>";
  const depositHTML =
    "<div class='container_receipt'><h3 class='positive'>Deposit: $transactionValue</h3><h4>transactionTime</h4></div>";
  let receipt;

  // contenedor de historial
  let historyContainer = document.getElementById("container_history");
  // selecciona tipo de recibo (negativo, positivo)
  if (value > 0) { receipt = depositHTML; } else { receipt = withdrawHTML;}
  // remplaza texto del HTML constante por texto en variable
  receipt = receipt.replace("transactionValue", value);
  let currentDate = new Date();
  let dateString = currentDate.toLocaleDateString();
  let timeString = currentDate.toLocaleTimeString();
  let dateTimeString = dateString + " at " + timeString;
  receipt = receipt.replace("transactionTime", dateTimeString);
  // adjunta HTML en contenedor de historial
  historyContainer.innerHTML += receipt;
}

//llama funcion en 'onClickHandleTransaction()'
function updateText(transactionValue) {
  // actualiza valor visual en texto HTML
  balance = parseInt(balance) + transactionValue;
  balanceText.innerText = "";
  balanceText.innerText = balance;
  // borra valore en input despues de realizar la transaccion
  inputField.value = "";
}

inputField.addEventListener("input", function () {
  // regex: solo permite #
  var inputValue = inputField.value;
  inputValue = inputValue.replace(/\D/g, "");
  inputField.value = inputValue;
});
