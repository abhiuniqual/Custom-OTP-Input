const onInputChange = (currentId, nextId) => {
  const currentInput = document.getElementById(currentId);
  const currentValue = currentInput.value;

  if (currentValue.length > 1) {
    currentInput.value = currentValue.slice(0, 1);
  }

  if (nextId && currentValue.length === 1) {
    const nextInput = document.getElementById(nextId);
    nextInput.focus();
  }
};

const onKeyDown = (currentId, prevId) => {
  const currentInput = document.getElementById(currentId);
  const currentValue = currentInput.value;

  if (event.key === "Backspace" && currentValue.length === 0) {
    const prevInput = document.getElementById(prevId);
    prevInput.focus();
  }
};

const onPaste = (event, currentId) => {
  event.preventDefault();
  const pastedText = event.clipboardData.getData("text/plain").trim();
  if (pastedText.length > 0) {
    const currentInput = document.getElementById(currentId);
    currentInput.value = pastedText[0];
    let nextId = currentId;
    for (let i = 1; i < pastedText.length; i++) {
      nextId = "digit" + (parseInt(nextId.slice(-1)) + 1);
      const nextInput = document.getElementById(nextId);
      if (nextInput) {
        nextInput.value = pastedText[i];
      }
    }
  }
};
