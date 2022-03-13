import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import './modules/anchors';

const pageHeader = document.querySelector('[data-header-mobile]');
const pageHeaderPicture = document.querySelector('[data-header-picture]');
const pageHeaderPictureNoJs = document.querySelector('[data-header-picture-nojs]');
const pageHeaderWrapper = document.querySelector('[data-header-wrapper]');
const containerNoJs = document.querySelector('[data-container-nojs]');
const navBtn = document.querySelector('[data-nav-btn');
const navNoJs = document.querySelector('[data-nav-nojs]');
const navList = document.querySelector('[data-nav-list-nojs]');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  pageHeader.classList.remove('page-header--no-js');
  pageHeaderPicture.style.display = 'inline-block';
  pageHeaderPictureNoJs.style.display = 'none';
  pageHeaderWrapper.classList.remove('page-header__wrapper--no-js');
  containerNoJs.classList.remove('container--no-js');
  navBtn.classList.remove('nav__btn--no-js');
  navNoJs.classList.remove('nav--no-js');
  navList.classList.remove('nav__list--no-js');

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
