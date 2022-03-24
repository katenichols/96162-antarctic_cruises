import {escKey} from './../utils/esc-key';
import {closeModal} from './close-modal';

export const body = document.querySelector('[data-body]');
export const navBtn = document.querySelector('[data-nav-btn]');
export const pageHeader = document.querySelector('[data-header]');
export const pageHeaderOverlay = pageHeader.querySelector('[data-header-overlay]');
export const pageHeaderWrapper = pageHeader.querySelector('[data-header-wrapper]');
export const pageHeaderPicture = pageHeader.querySelector('[data-header-picture]');
export const pageHeaderPictureModal = pageHeader.querySelector('[data-header-picture-modal');
export const nav = pageHeader.querySelector('[data-nav]');
export const navList = pageHeader.querySelector('[data-nav-list-nojs]');

const onEscKeydown = (evt) => {
  if (escKey(evt)) {
    closeModal();
  }
};

export const classListsToggle = () => {
  body.style.position = 'fixed';
  body.style.top = '0';
  pageHeader.classList.toggle('page-header--modal');
  pageHeaderOverlay.classList.toggle('page-header__overlay--modal');
  pageHeaderWrapper.classList.toggle('page-header__wrapper--modal');
  pageHeaderPicture.classList.toggle('visually-hidden');
  pageHeaderPictureModal.classList.toggle('visually-hidden');
  nav.classList.toggle('nav--opened');
  navBtn.classList.toggle('is-open');
  navList.classList.toggle('nav__list--opened');
};

document.addEventListener('keydown', onEscKeydown);

navBtn.addEventListener('click', classListsToggle);
