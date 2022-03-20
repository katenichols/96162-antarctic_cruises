const form = document.querySelector('[data-form]');
const inputName = form.querySelector('[data-name]');
const inputPhone = form.querySelector('[data-phone]');
const inputEmail = form.querySelector('[data-email');
const inputCheckbox = form.querySelector('[data-assent]');
const labelCheckbox = form.querySelector('[data-label-checkbox]');

inputName.addEventListener('focus', () => {
  if (inputName.classList.contains('form__input--invalid')) {
    inputName.classList.remove('form__input--invalid');
  }
});

inputPhone.addEventListener('focus', () => {
  if (inputPhone.classList.contains('form__input--invalid')) {
    inputPhone.classList.remove('form__input--invalid');
  }
});

inputEmail.addEventListener('focus', () => {
  if (inputEmail.classList.contains('form__input--invalid')) {
    inputEmail.classList.remove('form__input--invalid');
  }
  if (inputPhone.classList.contains('form__input--invalid')) {
    inputPhone.classList.remove('form__input--invalid');
  }
});

labelCheckbox.addEventListener('click', () => {
  if (labelCheckbox.classList.contains('form__label--checkbox-invalid')) {
    labelCheckbox.classList.remove('form__label--checkbox-invalid');
  }
});

const isPhone = () => {
  const regPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
  if (!inputPhone.value === '') {
    return regPhone.test(inputPhone.value);
  } else {
    return false;
  }
};

const isEmail = () => {
  const regMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  if (inputPhone.value === '' && !inputEmail.value === '') {
    return regMail.test(inputEmail.value);
  } else {
    return false;
  }
};

const isAssent = () => {
  if (inputCheckbox.checked) {
    return true;
  } else {
    return false;
  }
};

const addClasslist = (elem) => {
  elem.classList.add('form__input--invalid');
};

form.addEventListener('submit', (evt) => {
  let isName = inputName.value;
  if (!isName || !isAssent() && (!isPhone() || !isEmail())) {
    evt.preventDefault();
    if (!isName) {
      addClasslist(inputName);
    }
    if (!isPhone() && inputEmail.value === '') {
      addClasslist(inputPhone);
    }
    if (isPhone() && !isEmail()) {
      addClasslist(inputEmail);
    }
    if (!isAssent()) {
      labelCheckbox.classList.add('form__label--checkbox-invalid');
    }
  }
});
