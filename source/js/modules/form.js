const form = document.querySelector('[data-form]');
const inputName = form.querySelector('[data-name]');
const inputPhone = form.querySelector('[data-phone]');
const inputEmail = form.querySelector('[data-email');
const inputCheckbox = form.querySelector('[data-assent]');
const labelCheckbox = form.querySelector('[data-label-checkbox]');

const formData = {
  name: '',
  phone: '',
  email: '',
  assent: '',
};

let data = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : formData;

inputName.value = data.name;
inputPhone.value = data.phone;
inputEmail.value = data.email;
inputCheckbox.checked = data.assent;

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
  return regPhone.test(inputPhone.value);
};

const isEmail = () => {
  const regMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  return regMail.test(inputEmail.value);
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

inputPhone.addEventListener('input', () => {
  if (inputPhone.classList.contains('form__input--invalid')) {
    inputPhone.classList.remove('form__input--invalid');
  }

  if (!isPhone()) {
    addClasslist(inputPhone);
  }
});

form.addEventListener('submit', (evt) => {
  let isName = inputName.value;

  if (!isName || !isAssent() || !isPhone() || !isEmail()) {
    evt.preventDefault();

    if (!isName) {
      addClasslist(inputName);
    }
    if (!isPhone()) {
      addClasslist(inputPhone);
    }
    if (!isEmail()) {
      addClasslist(inputEmail);
    }
    if (!isAssent()) {
      labelCheckbox.classList.add('form__label--checkbox-invalid');
    }
  } else {
    data.name = inputName.value;
    data.phone = inputPhone.value;
    data.email = inputEmail.value;
    data.assent = inputCheckbox.checked;

    localStorage.setItem('items', JSON.stringify(data));
  }
});
