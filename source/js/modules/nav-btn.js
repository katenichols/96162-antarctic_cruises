import {escKey} from './../utils/esc-key';
import {closeModal} from './close-modal';

export const navBtn = document.querySelector('[data-nav-btn]');

export const pageHeader = document.querySelector('[data-header]');
export const pageHeaderWrapper = document.querySelector('[data-header-wrapper]');
export const pageHeaderPicture = document.querySelector('[data-header-picture]');
export const pageHeaderPictureModal = document.querySelector('[data-header-picture-modal');
export const nav = document.querySelector('[data-nav]');
export const navList = document.querySelector('[data-nav-list-nojs]');

const onEscKeydown = (evt) => {
  if (escKey(evt)) {
    closeModal();
  }
};

export const classListsToggle = () => {
  pageHeader.classList.toggle('page-header--modal');
  pageHeaderWrapper.classList.toggle('page-header__wrapper--modal');
  pageHeaderPicture.classList.toggle('visually-hidden');
  pageHeaderPictureModal.classList.toggle('visually-hidden');
  nav.classList.toggle('nav--opened');
  navBtn.classList.toggle('is-open');
  navList.classList.toggle('nav__list--opened');
};

document.addEventListener('keydown', onEscKeydown);

navBtn.addEventListener('click', classListsToggle);
