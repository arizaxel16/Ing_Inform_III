var balance = 0;
var balanceText = document.getElementById("balance");
var inputField = document.getElementById("txtField_transaction");

function onClickHandleTransaction(transactionType) {
  let transactionValue = document.getElementById("txtField_transaction").value;

  console.log(transactionValue);

  if (transactionValue != "" && transactionValue != 0) {
    transactionValue = parseInt(transactionValue);
    if (transactionType === 1) {
      updateText(transactionValue);
      registerTransaction(transactionValue);
    } else if (transactionType === 0 && transactionValue <= balance) {
      transactionValue = transactionValue * -1;
      updateText(transactionValue);
      registerTransaction(transactionValue);
    } else {
      alert("You can't withdraw more than your current balance");
    }
  }
}

function registerTransaction(value) {
  const withdrawHTML =
    "<div class='container_receipt'><h3 class='negative'>Withdraw: $transactionValue</h3><h4>transactionTime</h4></div>";
  const depositHTML =
    "<div class='container_receipt'><h3 class='positive'>Deposit: $transactionValue</h3><h4>transactionTime</h4></div>";
  let receipt;

  let historyContainer = document.getElementById("container_history");

  if (value > 0) {
    receipt = depositHTML;
  } else {
    receipt = withdrawHTML;
  }

  receipt = receipt.replace("transactionValue", value);

  let currentDate = new Date();
  let dateString = currentDate.toLocaleDateString();
  let timeString = currentDate.toLocaleTimeString();
  let dateTimeString = dateString + " at " + timeString;

  receipt = receipt.replace("transactionTime", dateTimeString);

  historyContainer.innerHTML += receipt;
}

function updateText(transactionValue) {
  balance = parseInt(balance) + transactionValue;
  balanceText.innerText = "";
  balanceText.innerText = balance;
  inputField.value = "";
}

inputField.addEventListener("input", function () {
  var inputValue = inputField.value;
  inputValue = inputValue.replace(/\D/g, "");
  inputField.value = inputValue;
});
