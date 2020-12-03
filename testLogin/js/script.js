'use strict';

(function () {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const inputEmail = document.querySelector('input[type="email"]');
  const inputPass = document.querySelector('input[type="password"]');

  function validateEmail(value) {
    return EMAIL_REGEXP.test(value);
  }

  function updateInput() {
    if (validateEmail(inputEmail.value)) { 
      inputEmail.style.borderColor = 'transparent';
      inputPass.style.cursor = 'pointer';
      inputPass.removeAttribute('disabled');
    }
    else {
      inputEmail.style.borderColor = 'red';
      inputPass.style.cursor = 'not-allowed';
      inputPass.setAttribute("disabled", "disabled");
    }
  }

  inputEmail.addEventListener('input', updateInput);
})();
