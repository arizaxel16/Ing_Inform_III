function moveToNextInput(currentInput, nextInputId) {
    let inputValue = currentInput.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    currentInput.value = inputValue;

    if (inputValue.length === 1) {
      const nextInput = document.getElementById(nextInputId);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }