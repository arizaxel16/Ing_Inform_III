var balance = 0;
var balanceText = document.getElementById("balance");

function onClickHandleTransaction(transactionType) {
    let transactionValue = parseInt(document.getElementById("txtField_transaction").value);
    console.log("transaction value : "+transactionValue);
    if (transactionType === 0) {
        transactionValue = transactionValue*-1;
    }
    balance = parseInt(balance) + transactionValue;
    console.log(balance);
    balanceText.innerText = "";
    balanceText.innerText = balance;

    inputField.value = "";
}

var inputField = document.getElementById("txtField_transaction");

inputField.addEventListener("input", function() {
  var inputValue = inputField.value;

  inputValue = inputValue.replace(/\D/g, "");

  inputField.value = inputValue;
});