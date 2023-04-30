const inputValue = document.getElementById('validation-input');
// console.log(inputValue);

const checkInputValue = inputValue.addEventListener('blur', () => {
    const requiredLength = inputValue.getAttribute('data-length');
    const currentValue = inputValue.value.trim();
    const currentLength = currentValue.length;

    if (currentLength === Number(requiredLength)) {
    inputValue.classList.remove('invalid');
    inputValue.classList.add('valid');
  } else {
    inputValue.classList.remove('valid');
    inputValue.classList.add('invalid');
  }






}


)