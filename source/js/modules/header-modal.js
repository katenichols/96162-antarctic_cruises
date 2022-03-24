import {closeModal} from './close-modal';
import {pageHeader} from './nav-btn';
import {pageHeaderWrapper} from './nav-btn';

const navLinks = pageHeader.querySelectorAll('.nav__link');
const focusables = pageHeader.querySelectorAll('[data-nav-link], [data-nav-btn');
const firstFocusable = focusables[0];
const lastFocusable = focusables[focusables.length - 1];

const onNavLinkClick = () => {
  if (pageHeader.classList.contains('page-header--modal')) {
    closeModal();
  }
};

firstFocusable.focus();

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Tab') {
    if (evt.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        evt.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        evt.preventDefault();
      }
    }
  }
});

document.addEventListener('click', (evt) => {
  if (pageHeaderWrapper && evt.target !== pageHeaderWrapper && !pageHeaderWrapper.contains(evt.target)) {
    closeModal();
  }
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', onNavLinkClick);
});
